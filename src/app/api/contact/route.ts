import { NextRequest, NextResponse } from "next/server";
import { sendTelegramLeadNotification } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "অনুগ্রহ করে আপনার নাম লিখুন।" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "অনুগ্রহ করে আপনার প্রজেক্টের মেসেজ লিখুন।" }, { status: 400 });
    }

    // Dispatch to Telegram
    const telegramResult = await sendTelegramLeadNotification({
      name: name.trim(),
      email: email.trim(),
      service: service?.trim(),
      budget: budget?.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "আপনার মেসেজটি সফলভাবে পৌঁছে গেছে! বোরহান ভাই শীঘ্রই আপনার সাথে যোগাযোগ করবেন।",
      deliveredToTelegram: telegramResult.success,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "সার্ভারে একটি সাময়িক সমস্যা হয়েছে। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।" },
      { status: 500 }
    );
  }
}
