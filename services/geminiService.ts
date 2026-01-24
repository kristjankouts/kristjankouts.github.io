import { GoogleGenAI } from "@google/genai";
import { AspectRatio, ImageSize } from "../types";

// Helper to ensure we get a fresh instance with the latest key
const getAIClient = async (): Promise<GoogleGenAI> => {
  // Check if user needs to select a key (required for Pro Image models)
  if (window.aistudio) {
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
        // We throw a specific error to catch in UI and show the "Select Key" button
        throw new Error("API_KEY_REQUIRED"); 
    }
  }
  
  // Create instance with process.env.API_KEY which is injected after selection
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateVideoConcept = async (
  topic: string, 
  businessType: string
): Promise<string> => {
  try {
    const ai = await getAIClient();
    const prompt = `
      You are a creative director for 'Elektrovisual', a high-end videography agency.
      Create a short, punchy video concept for a client.
      
      Client Business: ${businessType}
      Video Topic/Goal: ${topic}
      
      Output Format:
      - Title
      - Visual Hook (First 3 seconds)
      - Key Action/Scene
      - Audio Vibe
      
      Keep it brief, energetic, and modern. Under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Fast response needed
      }
    });

    return response.text || "Could not generate concept.";
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
};

export const generateStoryboardFrame = async (
  concept: string,
  aspectRatio: AspectRatio,
  size: ImageSize
): Promise<string | undefined> => {
  try {
    const ai = await getAIClient();
    
    // Construct a prompt optimized for visual generation
    const prompt = `
      Cinematic shot, photorealistic, 8k, highly detailed.
      A storyboard frame for a video concept: ${concept}.
      Lighting: Neon, moody, professional studio lighting.
      Style: Modern, sleek, Elektrovisual brand style (Black, White, Blue accents).
      No text overlays.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: size
        }
      }
    });

    // Extract image from response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return undefined;

  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
