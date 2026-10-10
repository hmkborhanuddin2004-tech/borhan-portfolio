import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "মেসেজ পাওয়া যায়নি।" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback if API key is missing
    if (!apiKey) {
      return NextResponse.json({
        reply: "ধন্যবাদ আপনার আগ্রহের জন্য! বর্তমানে এআই সিস্টেম মেইনটেন্যান্সে রয়েছে। আপনি সরাসরি নিচের কন্টাক্ট ফর্ম থেকে বা টেলিগ্রামে বোরহান ভাইকে মেসেজ পাঠাতে পারেন।",
      });
    }

    const { agent, personal, pillars, projects } = PORTFOLIO_CONFIG;

    // Detailed context for Nova
    const contextPrompt = `${agent.systemPrompt}

Current Portfolio Knowledge:
- Developer: ${personal.name}
- Title: ${personal.title}
- Location: ${personal.location}
- Experience: ${personal.experienceYears} | Projects Delivered: ${personal.projectsDelivered} | Rating: ${personal.clientSatisfaction}
- Contact Email: ${personal.socials.email}
- Telegram Bot: ${personal.socials.telegram}

Pillars & Skills:
${pillars.map((p) => `- ${p.title}: ${p.description}. Tech: ${p.skills.join(", ")}`).join("\n")}

Featured Projects:
${projects.map((proj) => `- ${proj.title} (${proj.category}): Problem: ${proj.problem} | Solution: ${proj.solution} | Metrics: ${proj.metrics}`).join("\n")}

Respond concisely, politely, and informatively. If asked in Bengali, reply in fluent natural Bengali. If asked in English, reply in English.`;

    // Convert chat history for Gemini API
    const contents = [
      {
        role: "user",
        parts: [{ text: `[SYSTEM INSTRUCTION]\n${contextPrompt}` }],
      },
      {
        role: "model",
        parts: [{ text: "Understood! I am Nova, HMk Borhan Uddin's personal virtual assistant. I am ready to answer any questions about Borhan's skills, projects, and availability." }],
      },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" || m.role === "model" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    ];

    // Try Gemini 2.5 Flash, fallback to 1.5 Flash
    const models = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-2.0-flash"];
    let replyText = "";
    let lastError = null;

    for (const model of models) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: contents,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (replyText) break;
        } else {
          const errData = await geminiRes.text();
          console.warn(`Model ${model} failed:`, errData);
          lastError = errData;
        }
      } catch (err) {
        lastError = err;
      }
    }

    if (!replyText) {
      replyText = "বোরহান ভাই মূলত ৩টি ক্ষেত্রে বিশেষজ্ঞ: ১. স্বয়ংক্রিয় এআই এজেন্টস ও পাইপলাইন্স, ২. ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট (Next.js 15), এবং ৩. মেটা অ্যাডস ও ফানেল অটোমেশন। আপনি কি উনার সাথে নতুন কোনো প্রজেক্ট শুরু করতে চান?";
    }

    return NextResponse.json({ reply: replyText });
  } catch (err) {
    console.error("Agent route error:", err);
    return NextResponse.json(
      { error: "এআই এজেন্টে একটি সমস্যা হয়েছে।" },
      { status: 500 }
    );
  }
}
