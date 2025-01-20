import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Seb Galindo",
  initials: "Seb",
  url: "https://sebgalindo.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I was born in Bolivia and started my first business at 12, organizing Yu-Gi-Oh card tournaments. Since then, I have lived on three continents, visited 17 countries, moved to the U.S. in 2015 as an F1 student, and founded 3 tech startups.",
  summary:
    "I am the father of one beautiful baby boy, the husband of a beautiful, supportive partner, and the founder and CEO of Jex. We are building the first AI agent to help international students in the U.S. get hired. As a former international student, I know the pain firsthand. The journey did not start here. Back in 2020, we launched a mobile app that grew to ~80k users in two years, started a staffing agency that reached $2M in revenue within one year, and invested in a few tech startups. Outside of work, I have a passion for quantum physics and exploring the nature of reality. ",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "Python",
    "Typescript",
    "C++",
    "Firebase",
    "AWS",
    "Git",
    "Docker",
    "TensorFlow",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "React",
    "Next.js",
    "TailwindCSS",
    "Shadcn UI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "seb@jexhq.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://x.com/sebgalindo1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebgalindo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sebgalindo1",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: " Jex",
      href: "https://jexhq.com",
      badges: [],
      location: "Remote",
      title: "Founder & CEO",
      logoUrl: "/jex.jpeg",
      start: "2024",
      end: "Present",
      description:
        "AI assistant that connects international students with decision makers at visa-sponsoring companies.",
    },
    {
      company: "SS Ventures",
      badges: [],
      href: "https://ssventures.com",
      location: "Remote",
      title: "Founder & CEO",
      logoUrl: "/ssventures1.png",
      start: "February 2023",
      end: "April 2024",
      description:
        " We allocated and managed top LATAM software engineering talent for over 20 companies within a year, shipped more than 9 apps, and generated over $2M in revenue.",
    },
    {
      company: "Jungle",
      href: "https://jexhq.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Founder & CEO",
      logoUrl: "/jungle.png",
      start: "September 2020",
      end: "March 2023",
      description:
        "Jungle matched college students based on shared favorite bars and restaurants, encouraging them to plan dates at mutual spots. The app grew to 80,000+ users through guerrilla marketing before the IP was transferred to Pearl Tech Inc. in Austin, TX.",
    },
  ],
  education: [
    {
      school: "University of Florida",
      href: "https://www.uff.ufl.edu/gatornation/forbes-ranks-uf-no-4-among-the-nations-best-public-universities/",
      degree: "Bachelor of Science in Economics & CS",
      logoUrl: "/uf.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "ChatGPT",
      href: "https://chat.com",
      degree: "Expanding my curiosity to the limits",
      logoUrl: "/chatgpt.png",
      start: "2022",
      end: "Present",
    },
  ],
  /*projects: [
    {
      title: "Jex",
      href: "https://chatcollect.com",
      dates: "Feb 2024 - IPO + ",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "ts",
        "h",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://jexhq.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "69x Your Prodcutivity",
      href: "https://magicui.design",
      dates: "January 2024 - Present",
      active: true,
      description:
        "Coded over the weekend to help me get more done. I've been using this for a few months now and it has been a game changer.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],*/
  bookshelf: [
    {
      title: " The Cold Start Problem by Andrew Chen",
      description:
        " Explores how companies like Uber, Tinder, and Airbnb overcame the toughest challenge: growing from zero users to thriving networks. It highlights the power of network effects and provides a framework for understanding how products scale and sustain growth.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Startups",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The Singularity Is Nearer by Ray Kurzweil",
      description:
        " Ray Kurzweil dives into how breakthroughs in AI, biotech, and nanotech are accelerating so fast that we could reach a point where machines surpass human intelligence. What I loved most is how he connects these advancements to practical ways they might transform our lives—from curing diseases to redefining what it means to be human.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Artificial Intelligence",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The Elegant Universe by Brian Greene",
      description:
        "Brian Greene masterfully unpacks the complexities of string theory, quantum mechanics, and general relativity in a way that's both accessible and thought-provoking. The Elegant Universe explores the quest to unify the fundamental forces of nature, revealing the hidden dimensions and possibilities that could reshape our understanding of reality.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Physics",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Albert Einstein by Walter Isaacson",
      description:
        "Walter Isaacson presents a fascinating and deeply human portrait of Albert Einstein, exploring how his revolutionary scientific ideas reshaped our understanding of the universe. The biography delves into Einstein's curiosity, creativity, and rebellious spirit, showing how his unique perspective on life fueled his groundbreaking discoveries. ",
      image:
        "/book3.webp",
      links: [
        {
          title: "Startups",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The Club of 5am by Robin Sharma",
      description:
        "Robin Sharma reveals how waking up at 5 AM can transform your life by unlocking peak productivity, creativity, and personal growth. Through a compelling story, he shares practical strategies for maximizing your mornings, building strong habits, and achieving extraordinary results. This book is perfect for anyone looking to elevate their daily routine and reach their full potential.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Productivity",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The Hard Thing About Hard Things by Ben Horowitz",
      description:
        "Ben Horowitz delivers an honest and practical guide to navigating the toughest challenges of running a business. Drawing from his own experiences as a CEO, he tackles topics like making hard decisions, managing through uncertainty, and leading during crises. Packed with actionable advice, this book is a must-read for entrepreneurs and leaders facing the realities of building and scaling a company.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Startups",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Breaking the Habit of Being Yourself by Joe Dispenza",
      description:
        "Joe Dispenza combines neuroscience, quantum physics, and psychology to show how you can rewire your brain and break free from limiting patterns. The book provides practical steps to transform your thoughts, emotions, and behaviors, helping you create a new reality for yourself. It is an empowering read for anyone looking to change their life from the inside out.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Personal Development",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Benjamin Franklin by Walter Isaacson",
      description:
        "A great book that dives into the fascinating life of Benjamin Franklin, showing how he was much more than just a founding father. Walter Isaacson captures Franklin genius as an inventor, writer, and diplomat while revealing the human side of his achievements. It is an inspiring read about creativity, resilience, and shaping the world around you.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Biography",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Meditations by Marcus Aurelius",
      description:
        "A timeless collection of personal reflections from the Roman Emperor Marcus Aurelius, Meditations offers profound insights on resilience, self-discipline, and living with purpose. This book is a must-read for anyone seeking wisdom on how to navigate life challenges with strength and clarity. It is a cornerstone of Stoic philosophy and still deeply relevant today.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Philosophy",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The Simulation Hypothesis by Rizwan Virk",
      description:
        "A thought-provoking exploration of the idea that our reality might be a highly advanced computer simulation. Rizwan Virk blends science, philosophy, and pop culture to examine the evidence for this theory, drawing parallels between video games, virtual worlds, and our everyday experience.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Philosophy & Technology",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Zero to One by Peter Thiel",
      description:
        "his book explores how to create unique businesses that move beyond competition. Peter Thiel shares insights on building monopolies, thinking for the future, and creating transformative products or services.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Startups",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The God Equation by Michio Kaku",
      description:
        "Michio Kaku explores the quest to unify all the fundamental forces of the universe into a single, elegant theory. He delves into string theory, quantum mechanics, and relativity, making complex ideas accessible while reflecting on humanity's deepest questions about the cosmos.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Theoretical Physics",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Trillion Dollar Coach by Eric Schmidt",
      description:
        "This book shares the leadership lessons of Bill Campbell, the legendary coach who mentored Silicon Valley giants like Steve Jobs, Larry Page, and Eric Schmidt. It provides practical insights on building trust, fostering innovation, and leading teams with compassion.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Leadership",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Atomic Habits by James Clear",
      description:
        "A practical guide to building good habits and breaking bad ones. James Clear explains how small, consistent changes lead to remarkable results over time. Packed with actionable strategies.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Productivity",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "The Obstacle Is the Way by Ryan Holiday",
      description:
        "Inspired by Stoic philosophy, this book shows how to turn challenges into opportunities. Ryan Holiday provides timeless strategies for overcoming setbacks, building resilience, and staying focused on what truly matters.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Productivity",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
    {
      title: "Shoe Dog by Phil Knight",
      description:
        "An inspiring memoir by the founder of Nike, this book recounts Phil Knight's journey from selling shoes out of a trunk to building one of the greatest brands in the world.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Startups",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
          //
        },
      ],
    },
    {
      title: "A Brief History of Time by Stephen Hawking",
      description:
        "Takes readers on a journey through the universe biggest mysteries, from the nature of time and black holes to the origins of the cosmos. Written in an accessible and engaging style, this book explores profound scientific concepts while reflecting on humanity place in the vastness of space.",
      image:
        "/book3.webp",
      links: [
        {
          title: "Physics",
          //icon: <Icons.book className="h-4 w-4" />,
          href: "https://jexhq.com/",
          //
        },
      ],
    },
  ],
} as const;
