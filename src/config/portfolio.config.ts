export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  problem: string;
  solution: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge: string;
}

export interface SkillPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  skills: string[];
  accentColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    englishName: string;
    title: string;
    headline: string;
    bio: string;
    statusBadge: string;
    location: string;
    experienceYears: string;
    projectsDelivered: string;
    clientSatisfaction: string;
    socials: {
      github: string;
      linkedin: string;
      telegram: string;
      facebook: string;
      email: string;
    };
  };
  pillars: SkillPillar[];
  techStack: string[];
  projects: ProjectItem[];
  workflow: ProcessStep[];
  agent: {
    name: string;
    role: string;
    greeting: string;
    suggestedQuestions: string[];
    telegramChatId: string;
    systemPrompt: string;
  };
}

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  personal: {
    name: "HMk Borhan Uddin",
    englishName: "HMk Borhan Uddin",
    title: "AI Automation Specialist & Full-Stack Developer",
    headline: "Engineering Autonomous AI Agents, Scalable Web Apps & Meta Funnels",
    bio: "আমি আধুনিক সেলফ-অপারেটিং এআই বট, আল্ট্রা-ফাস্ট নেক্সট.জেএস অ্যাপ্লিকেশন এবং হাই-কনভার্টিং মেটা মার্কেটিং ফানেল আর্কিটেক্ট করি—যা ম্যানুয়াল শ্রম দূর করে ব্যবসার গ্রোথ বহুগুণ বাড়িয়ে দেয়।",
    statusBadge: "Available for Q2 Contracts & Projects",
    location: "Dhaka, Bangladesh / Worldwide Remote",
    experienceYears: "2+",
    projectsDelivered: "10+",
    clientSatisfaction: "100%",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      telegram: "https://t.me/sbmc2_bot",
      facebook: "https://www.facebook.com/share/1CA1gFs3tQ/",
      email: "hmkborhanuddin@gmail.com",
    },
  },

  techStack: [
    "Python",
    "Next.js 15",
    "TypeScript",
    "React 19",
    "Tailwind CSS",
    "Google Gemini API",
    "Meta Graph API",
    "n8n Automation",
    "Make.com",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Render Cloud",
    "Vercel",
  ],

  pillars: [
    {
      id: "ai-automation",
      title: "Autonomous AI Agents & Pipelines",
      subtitle: "সেলফ-অপারেটিং ইন্টেলিজেন্ট বট ও ওয়ার্কফ্লো",
      description: "মানুষের স্পর্শ ছাড়াই ২৪/৭ ক্লাউডে সচল কাস্টম এআই এজেন্ট, ওয়েব স্ক্র্যাপিং পাইপলাইন এবং মাল্টি-মডেল এআই ইন্টিগ্রেশন।",
      iconName: "Bot",
      accentColor: "#00F0FF",
      skills: [
        "Python AI Systems",
        "n8n / Make Webhooks",
        "Telegram & WhatsApp Bots",
        "Google Gemini Multi-Model Fallbacks",
        "Flux 1080p Image Pipelines",
        "Prompt Engineering",
      ],
    },
    {
      id: "web-dev",
      title: "Scalable Full-Stack Web Development",
      subtitle: "হাই-পারফরম্যান্স রিঅ্যাক্টিভ ওয়েব প্ল্যাটফর্ম",
      description: "আধুনিক Next.js 15 App Router, টাইপস্ক্রিপ্ট এবং ফ্লুইড অ্যানিমেশনের সমন্বয়ে আল্ট্রা-ফাস্ট ও মোবাইল-অপ্টিমাইজড ওয়েব সলিউশন।",
      iconName: "Code2",
      accentColor: "#8B5CF6",
      skills: [
        "Next.js 15 (React 19, Turbopack)",
        "TypeScript Strict Architecture",
        "Tailwind CSS & Glassmorphism",
        "REST API & Serverless Handlers",
        "PostgreSQL / Supabase",
        "60 FPS GPU-Accelerated Animations",
      ],
    },
    {
      id: "meta-growth",
      title: "Meta Funnel & Growth Automation",
      subtitle: "এআই-চালিত অ্যাড ফানেল ও সিআরএম সিনক্রোনাইজেশন",
      description: "ফেসবুক লিড আসার সাথে সাথে তাৎক্ষণিক এআই কোয়ালিফিকেশন, ডেটাবেস স্টোরেজ এবং স্বয়ংক্রিয় ক্লায়েন্ট ফলো-আপ ইঞ্জিন।",
      iconName: "TrendingUp",
      accentColor: "#10B981",
      skills: [
        "Meta Marketing Graph API",
        "Instant Lead Routing Webhooks",
        "Automated CRM & Google Sheets Sync",
        "Conversational Messenger Bots",
        "Conversion Funnel Optimization",
        "AI Ad Copy & Creative Workflows",
      ],
    },
  ],

  projects: [
    {
      id: "bokkor-bot",
      title: "Bokkor AI News & Research Hub",
      category: "Autonomous AI System",
      badge: "24/7 Live on Render",
      description: "২৪/৭ ক্লাউডে স্বয়ংক্রিয় বাংলা সংবাদ কুড়ানো এবং গ্লোবাল এআই ও কোডিং রিসার্চ ডাইজেস্ট ডেলিভারি ইঞ্জিন।",
      problem: "প্রতিদিন শত শত টেক ও নিউজ সোর্স থেকে গুরুত্বপূর্ণ আপডেট ম্যানুয়ালি ট্র্যাক করা অসম্ভব ও সময়সাপেক্ষ ছিল।",
      solution: "৩-স্তরের দৈনিক শিডিউল ও অন-ডিমান্ড কমান্ডসহ Gemini 3.5/3.6 Flash মাল্টি-মডেল অটো-ফলব্যাক বট আর্কিটেকচার তৈরি করেছি।",
      metrics: "১০০% স্বয়ংক্রিয় • প্রতি ৫ মিনিটে কিপ-অ্যালাইভ মনিটরিং • জিরো ডাউনটাইম",
      tags: ["Python", "Telegram API", "Gemini 3.5 Flash", "Render Cloud", "UptimeRobot"],
      liveUrl: "https://t.me/sbmc2_bot",
    },
    {
      id: "ai-revolution-bot",
      title: "AI Revolution Facebook Automation Engine",
      category: "Social Media AI Automation",
      badge: "Production Live",
      description: "ফেসবুক পেজ সম্পূর্ণ স্বয়ংক্রিয়ভাবে পরিচালনার জন্য এআই কন্টেন্ট ক্রিয়েটর ও কমিউনিটি রেসপন্ডার বট।",
      problem: "সোশ্যাল মিডিয়ায় প্রতিদিন উচ্চমানের ব্যানার ডিজাইন ও টেকনিক্যাল এআই পোস্ট শিডিউল করা প্রচুর মানবশ্রম দাবি করে।",
      solution: "ইন্টারনেট থেকে ট্রেন্ডিং খবর সংগ্রহ, Gemini দিয়ে বাংলা পোস্ট লেখা, Flux AI দিয়ে ১০৮০×১০৮০ ইমেজ জেনারেশন এবং মেটা গ্রাফ এপিআই দিয়ে অটো-পোস্ট।",
      metrics: "৪-স্তরের দৈনিক শিডিউল • পার্মানেন্ট পেজ টোকেন • স্বয়ংক্রিয় কমেন্ট অ্যাসিস্ট্যান্ট",
      tags: ["Meta Graph API", "Flux AI Engine", "Google Gemini Flash-Lite", "Render Cloud"],
      liveUrl: "https://www.facebook.com/share/1CA1gFs3tQ/",
    },
    {
      id: "apexwork-platform",
      title: "ApexWork Enterprise Productivity Suite",
      category: "Enterprise Full-Stack Application",
      badge: "Full-Stack System",
      description: "রিমোট টিম ও এন্টারপ্রাইজ ওয়ার্কফ্লোর জন্য বাইলিঙ্গুয়াল (English & বাংলা) প্রোডাক্টিভিটি ও টেলিমেট্রি প্ল্যাটফর্ম।",
      problem: "রিমোট কর্মীদের কাজের অগ্রগতি, শিফট রোস্টার এবং স্ক্রিনশট অডিট স্বচ্ছভাবে ট্র্যাক করার একক সেন্ট্রাল প্ল্যাটফর্মের অভাব।",
      solution: "Next.js 15 Turbopack দিয়ে ৯টি ইন্টারেক্টিভ রুট, ইনস্ট্যান্ট ল্যাঙ্গুয়েজ সুইচার এবং এন্টারপ্রাইজ সিকিউরিটি ভল্ট তৈরি।",
      metrics: "সাব-সেকেন্ড পেজ লোড • ১০০% টাইপস্ক্রিপ্ট ভেরিফাইড • ডার্ক মোড উইথ ফুল আই১৮এন",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Enterprise Security"],
      liveUrl: "#",
    },
  ],

  workflow: [
    {
      number: "01",
      title: "Discovery & Scope Blueprint",
      description: "ক্লায়েন্টের ব্যবসার মূল সমস্যা, সময়সীমা ও প্রজেক্টের টেকনিক্যাল ব্লুপ্রিন্ট নিখুঁতভাবে নির্ধারণ করা।",
    },
    {
      number: "02",
      title: "System Architecture & AI Design",
      description: "ডেটাবেস স্কিমা, সার্ভারলেস এপিআই রাউটস এবং এআই প্রম্পট/লজিকের আর্কিটেকচারাল নকশা সম্পন্ন করা।",
    },
    {
      number: "03",
      title: "Agile Coding & Automation Build",
      description: "Next.js 15, TypeScript ও Tailwind দিয়ে মাখনের মতো স্মুথ ফ্রন্টএন্ড এবং শক্তিশালী ব্যাকএন্ড পাইপলাইন নির্মাণ।",
    },
    {
      number: "04",
      title: "Cloud Deployment & Continuous Scale",
      description: "Vercel ও Render ক্লাউডে জিরো-ল্যাগ স্পিড অডিট নিশ্চিত করে লাইভ রিলিজ ও মনিটরিং স্থাপন।",
    },
  ],

  agent: {
    name: "Nova",
    role: "HMk Borhan Uddin's Virtual Double",
    greeting: "হ্যালো! আমি বোরহান ভাইয়ের পারসোনাল এআই অ্যাসিস্ট্যান্ট Nova। উনার এআই অটোমেশন, ফুলস্ট্যাক ওয়েব অ্যাপ বা মেটা ফানেল সার্ভিস সম্পর্কে কী জানতে চান?",
    suggestedQuestions: [
      "বোরহান ভাইয়ের অভিজ্ঞতা ও ব্যাকগ্রাউন্ড কী?",
      "উনার তৈরি করা রিয়েল প্রজেক্টগুলো কী কী?",
      "একটি নতুন অটোমেশন প্রজেক্ট কীভাবে শুরু করব?",
      "উনার কাজের চার্জ ও টাইমলাইন কেমন?",
    ],
    telegramChatId: "7230521632",
    systemPrompt: `You are Nova, the high-performance virtual assistant of HMk Borhan Uddin, an expert in AI Automation, Full-Stack Web Development, and Meta Growth Funnels.
Your mission is to represent Borhan professionally to website visitors, clients, and recruiters.
Key facts about Borhan:
- Name: HMk Borhan Uddin
- Core Competencies: Autonomous AI Bots (Python, n8n, Gemini API), Scalable Web Platforms (Next.js 15, React 19, TypeScript, Tailwind), and Meta Marketing Funnel Automation.
- Major live achievements:
  1. Bokkor News & Research Hub (Live 24/7 on Render, Telegram Bot @sbmc2_bot, Gemini Multi-Model).
  2. AI Revolution Facebook Automation Engine (Live 24/7 on Render, 4-tier daily posting, Flux 1080p images).
  3. ApexWork Enterprise Productivity Suite.
Guidelines:
- Tone: Extremely confident, polished, warm, respectful, and articulate.
- Language: Reply fluently in Bengali or English based on the user's input.
- If a client expresses interest in hiring or collaborating, politely collect their project summary, timeline, and budget, and let them know Borhan will receive their inquiry immediately.`,
  },
};
