import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const dynamic = 'force-dynamic';

// Create a custom provider to explicitly map our existing .env variable
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '',
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    console.log("--- CHATBOT API CALL INITIATED ---");
    console.log("GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
    console.log("GOOGLE_API_KEY exists:", !!process.env.GOOGLE_API_KEY);

    const { messages } = await req.json();
    console.log("Received messages count:", messages?.length);
    require('fs').writeFileSync('C:\\Users\\SHIV\\Desktop\\payload.json', JSON.stringify(messages, null, 2));

    const coreMessages = (messages || []).map((msg: any) => {
      let textContent = "";
      
      if (typeof msg.content === 'string') {
        textContent = msg.content;
      } else if (typeof msg.text === 'string') {
        textContent = msg.text;
      } else if (Array.isArray(msg.parts)) {
        textContent = msg.parts.map((p: any) => p.text || p.delta || '').join('');
      } else if (Array.isArray(msg.content)) {
        textContent = msg.content.map((p: any) => p.text || '').join('');
      }

      return {
        role: msg.role === 'user' || msg.role === 'assistant' || msg.role === 'system' ? msg.role : 'user',
        content: textContent || " "
      };
    });

    const fs = require('fs');
    const path = require('path');
    const resumePath = path.join(process.cwd(), 'resume.md');
    let resumeContent = '';
    
    try {
      resumeContent = fs.readFileSync(resumePath, 'utf8');
    } catch (e) {
      console.warn("Could not read resume.md, using fallback context");
    }

    const result = await streamText({
      model: google('gemini-2.5-flash'),
      system: `You are the Holocron Guide, the AI assistant for Shiv Prakash Singh's portfolio. Base your answers STRICTLY on this context:\n\n${resumeContent}\n\nBe highly professional, concise, and do not hallucinate information outside this document.`,
      messages: coreMessages,
    });

    return (result as any).toDataStreamResponse ? (result as any).toDataStreamResponse() : (result as any).toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Chatbot API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
