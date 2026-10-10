export interface LeadData {
  name: string;
  email: string;
  service?: string;
  budget?: string;
  message: string;
}

export async function sendTelegramLeadNotification(lead: LeadData): Promise<{ success: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || "7230521632";

  if (!token) {
    console.warn("TELEGRAM_BOT_TOKEN is not configured in environment variables.");
    return { success: false, error: "Bot token not configured" };
  }

  const text = `🚨 *নতুন ক্লায়েন্ট ইনকোয়ারি এসেছে!* (Portfolio Lead)\n\n` +
    `👤 *নাম:* ${lead.name}\n` +
    `📧 *ইমেইল:* \`${lead.email}\`\n` +
    `💼 *সার্ভিস:* ${lead.service || "General Inquiry"}\n` +
    `💰 *বাজেট:* ${lead.budget || "Not Specified"}\n\n` +
    `📝 *মেসেজ:* \n"${lead.message}"\n\n` +
    `🕒 *সময়:* ${new Date().toLocaleString("bn-BD", { timeZone: "Asia/Dhaka" })} (Dhaka Time)`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API Error:", data);
      return { success: false, error: data.description || "Failed to send telegram message" };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Network error";
    console.error("Telegram dispatch error:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
