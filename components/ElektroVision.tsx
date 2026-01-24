import React, { useState } from 'react';
import { Sparkles, Clapperboard, RefreshCw, Image as ImageIcon, Key, AlertCircle } from 'lucide-react';
import { AspectRatio, ImageSize } from '../types';
import * as GeminiService from '../services/geminiService';

const ElektroVision: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(AspectRatio.CINEMATIC_16_9);
  const [imageSize, setImageSize] = useState<ImageSize>(ImageSize.K1);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ script: string; image?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [needsKey, setNeedsKey] = useState(false);

  const handleGenerate = async () => {
    if (!topic || !businessType) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setNeedsKey(false);

    try {
      // 1. Generate Text Concept
      const script = await GeminiService.generateVideoConcept(topic, businessType);
      
      // 2. Generate Visual
      // We pass the raw script to the image generator to interpret a visual
      const image = await GeminiService.generateStoryboardFrame(script, aspectRatio, imageSize);

      setResult({ script, image });
    } catch (err: any) {
      if (err.message === "API_KEY_REQUIRED") {
        setNeedsKey(true);
      } else {
        setError("System Overload. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeySelection = async () => {
    try {
      if (window.aistudio) {
        await window.aistudio.openSelectKey();
        // Retry generation after selection
        setNeedsKey(false);
        handleGenerate();
      }
    } catch (e) {
      console.error("Key selection failed", e);
    }
  };

  return (
    <section id="elektrovision" className="py-24 px-6 bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            ELEKTRO<span className="text-brand-blue">VISION</span>
          </h2>
          <p className="text-brand-white/60 max-w-2xl mx-auto">
            Experience our creative process instantly. Describe your business, and our Gemini-powered AI engine will generate a custom video concept and storyboard frame in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6 text-brand-blue">
              <Sparkles className="w-5 h-5" />
              <span className="font-display font-bold uppercase tracking-wider text-sm">Concept Generator</span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-brand-white/40 uppercase mb-2">Business Type</label>
                <input 
                  type="text" 
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="e.g., Real Estate Agency, Fashion Brand..."
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand-blue focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-white/40 uppercase mb-2">Video Goal/Topic</label>
                <input 
                  type="text" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Luxury penthouse tour, Summer sale teaser..."
                  className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand-blue focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-brand-white/40 uppercase mb-2">Aspect Ratio</label>
                   <select 
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                      className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand-blue focus:outline-none appearance-none"
                   >
                     {Object.entries(AspectRatio).map(([key, value]) => (
                       <option key={key} value={value}>{value} ({key.replace(/_/g, ' ')})</option>
                     ))}
                   </select>
                </div>
                <div>
                   <label className="block text-xs font-bold text-brand-white/40 uppercase mb-2">Resolution</label>
                   <select 
                      value={imageSize}
                      onChange={(e) => setImageSize(e.target.value as ImageSize)}
                      className="w-full bg-brand-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-brand-blue focus:outline-none appearance-none"
                   >
                     {Object.entries(ImageSize).map(([key, value]) => (
                       <option key={key} value={value}>{value}</option>
                     ))}
                   </select>
                </div>
              </div>

              {needsKey ? (
                <div className="bg-brand-blue/10 border border-brand-blue/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-brand-blue mb-2">
                     <AlertCircle size={20} />
                     <p className="font-bold text-sm">API Key Required</p>
                  </div>
                  <p className="text-xs text-brand-white/70 mb-3">
                     Generating high-quality 4K imagery requires a paid API key from your project.
                  </p>
                  <button 
                    onClick={handleKeySelection}
                    className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-darkBlue text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    <Key size={18} />
                    Connect API Key
                  </button>
                  <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="block text-center text-xs text-brand-white/40 mt-2 hover:text-white underline">Learn about billing</a>
                </div>
              ) : (
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !topic || !businessType}
                  className={`w-full font-display font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-3
                    ${loading || !topic || !businessType ? 'bg-white/10 text-white/30 cursor-not-allowed' : 'bg-brand-blue hover:bg-white hover:text-brand-black text-white'}
                  `}
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      GENERATE CONCEPT
                    </>
                  )}
                </button>
              )}
              
              {error && (
                <div className="text-red-500 text-sm mt-2 text-center">{error}</div>
              )}
            </div>
          </div>

          {/* Results Display */}
          <div className="relative min-h-[400px] flex flex-col gap-6">
             {/* Script Card */}
             <div className="bg-brand-black border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                   <Clapperboard className="text-brand-blue w-8 h-8" />
                </div>
                <h3 className="text-brand-blue font-display font-bold mb-4">SCRIPT CONCEPT</h3>
                <div className="prose prose-invert prose-sm">
                   {result ? (
                     <div className="whitespace-pre-line text-brand-white/80 leading-relaxed">
                       {result.script}
                     </div>
                   ) : (
                     <div className="flex flex-col items-center justify-center h-32 text-white/20">
                       <p className="italic">Waiting for input...</p>
                     </div>
                   )}
                </div>
             </div>

             {/* Visual Card */}
             <div className="flex-1 bg-brand-black border border-white/10 rounded-2xl relative overflow-hidden min-h-[300px] flex items-center justify-center">
                 {result?.image ? (
                   <img 
                     src={result.image} 
                     alt="AI Generated Storyboard" 
                     className="w-full h-full object-contain max-h-[500px]"
                   />
                 ) : (
                   <div className="text-center text-white/20 p-8">
                     <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                     <p className="font-display text-sm uppercase tracking-widest">Visual Preview</p>
                     <p className="text-xs mt-2">Generate a concept to see the storyboard</p>
                   </div>
                 )}
                 {loading && (
                   <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm flex items-center justify-center z-20">
                      <div className="text-brand-blue font-display animate-pulse">RENDERING PIXELS...</div>
                   </div>
                 )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElektroVision;
