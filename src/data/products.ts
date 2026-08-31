import { Product, Course, Testimonial, FAQItem, WhyChooseItem } from '../types';

export const DEFAULT_PAYMENT_URL = 'https://rzp.io/rzp/nnykPb9';

export const CONTACT_INFO = {
  email: 'biroboticsautomation@gmail.com',
  whatsappNumber: '+91 9876543210',
  whatsappLink: 'https://wa.me/919876543210?text=Hi%20TeachFlow%20AI%20Team%2C%20I%20have%20a%20question%20about%20your%20AI%20tools%20and%20courses.',
  instagram: 'https://instagram.com/teachflowai',
  youtube: 'https://youtube.com/@teachflowai',
  supportHours: 'Monday - Saturday: 9:00 AM - 8:00 PM IST',
};

export const CATEGORIES = [
  'All Tools',
  'AI Writing',
  'AI Image Generation',
  'AI Video',
  'AI Voice & Audio',
  'AI Coding',
  'AI Marketing',
  'AI Productivity',
  'AI Design',
  'Business AI',
  'AI Learning',
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'chatgpt-pro-pack',
    name: 'ChatGPT Master Bundle',
    tagline: 'Supercharge your daily writing, research, and prompt engineering workflows.',
    description: 'Comprehensive digital toolkit, 1,000+ industry-specific prompts, custom GPT configuration guides, and step-by-step masterclass resources.',
    category: 'AI Writing',
    iconName: 'Bot',
    iconBgColor: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
    badge: 'Bestseller',
    isPopular: true,
    isBestDeal: true,
    price: 99,
    currency: '₹',
    features: [
      '1,000+ Curated High-Conversion Prompts',
      'Step-by-Step Custom GPT Setup Guide',
      'Content Writing & SEO Optimization Playbook',
      'Lifetime Digital Updates & Future Additions',
      'Instant Download & Mobile Accessible'
    ],
    benefits: [
      'Save 15+ hours weekly on content writing and client copywriting',
      'Eliminate writer’s block with battle-tested prompt frameworks',
      'Learn actionable prompt engineering tricks used by top creators'
    ],
    howItWorks: [
      'Click "Buy Now – ₹99" and complete the secure Razorpay checkout.',
      'Instantly receive your digital drive download link via email and on-screen.',
      'Access organized notion databases, PDF guides, and prompt cheat sheets.'
    ],
    whoItIsFor: [
      'Content Creators, Freelancers, and Copywriters',
      'Students, Researchers, and Educators',
      'Entrepreneurs and Small Business Owners'
    ],
    faq: [
      {
        question: 'What is included in this bundle?',
        answer: 'You get full instant digital access to our curated prompt database, structured GPT setup frameworks, workflow templates, and cheat sheets.'
      },
      {
        question: 'Do I need a paid ChatGPT Plus subscription?',
        answer: 'No, these prompts and frameworks work smoothly on both free and premium versions of ChatGPT.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'claude-ai-suite',
    name: 'Claude AI Power Suite',
    tagline: 'Deep research, long-form writing, and code architecture templates.',
    description: 'Master Anthropic’s Claude with advanced reasoning system prompts, Artifacts library, coding blueprints, and analysis workflows.',
    category: 'AI Writing',
    iconName: 'Sparkles',
    iconBgColor: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    badge: 'Popular',
    isPopular: true,
    price: 99,
    currency: '₹',
    features: [
      'Advanced Long-Form Content Frameworks',
      'Claude Artifacts & Interactive UI Blueprints',
      'System Prompt Recipes for In-Depth Analysis',
      'Coding Assistant & Code Review Templates',
      'Instant Digital Delivery'
    ],
    benefits: [
      'Produce publication-grade long articles and research reports in minutes',
      'Harness Claude Artifacts to quickly test UI code and prototypes'
    ],
    howItWorks: [
      'Click "Buy Now – ₹99" to open the secure payment link.',
      'Pay via UPI, Cards, NetBanking, or Wallet.',
      'Get instant access link delivered directly to your inbox.'
    ],
    whoItIsFor: [
      'Developers, Technical Writers, and Academic Researchers',
      'Strategists and Enterprise Project Managers'
    ],
    faq: [
      {
        question: 'Is this suitable for beginners?',
        answer: 'Yes! The starter guides teach step-by-step prompt mastery from basic to advanced levels.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'gemini-business-pack',
    name: 'Gemini AI Workspace Kit',
    tagline: 'Multimodal intelligence, Google Docs/Sheets integration, and research.',
    description: 'Unlock Google Gemini’s immense multimodal potential with structured spreadsheet automation formulas, doc templates, and data analysis guides.',
    category: 'Business AI',
    iconName: 'Cpu',
    iconBgColor: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    badge: 'Trending',
    isPopular: true,
    price: 99,
    currency: '₹',
    features: [
      'Google Workspace + Gemini Automation Templates',
      'Multimodal Image & Document Analysis Playbook',
      'Business Intelligence Prompt Stack',
      'Spreadsheet Data Cleaning & Python Code Snippets',
      'Lifetime Cloud Access'
    ],
    benefits: [
      'Supercharge your Google Workspace productivity with AI routines',
      'Automate invoice extraction, meeting minutes, and financial reviews'
    ],
    howItWorks: [
      'Proceed with checkout using the secure link.',
      'Receive instant link to download digital template assets.'
    ],
    whoItIsFor: [
      'Business Analysts, Operations Managers, and Marketers'
    ],
    faq: [
      {
        question: 'Does this work with Gemini Free & Advanced?',
        answer: 'Yes, all prompts and integration methods are optimized for both free and Google One AI Premium users.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'midjourney-prompts',
    name: 'Midjourney Photorealism Master',
    tagline: 'Ultra-detailed cinematic image prompts, parameters, and style vault.',
    description: 'Over 800+ categorized Midjourney v6 prompts with visual style recipes, camera angle modifiers, lighting formulas, and parameter cheats.',
    category: 'AI Image Generation',
    iconName: 'Image',
    iconBgColor: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    badge: 'Hot Deal',
    isPopular: true,
    isBestDeal: true,
    price: 99,
    currency: '₹',
    features: [
      '800+ Tested Cinematic & Photorealistic Prompts',
      'Aspect Ratio, Stylize & Weight Parameter Cheat Sheet',
      'Product Mockup & 3D Render Prompt Vault',
      'Logo & UI Concept Visual Prompts',
      'High-Resolution Reference Gallery Included'
    ],
    benefits: [
      'Generate breathtaking photorealistic images without trial and error',
      'Create commercial stock images, product mockups, and client art in seconds'
    ],
    howItWorks: [
      'Click Buy Now – ₹99.',
      'Complete the payment on the verified Razorpay gateway.',
      'Instantly receive your Prompt Vault & PDF Reference Guide.'
    ],
    whoItIsFor: [
      'Graphic Designers, UI/UX Specialists, and Digital Artists',
      'E-commerce Store Owners and Brand Marketers'
    ],
    faq: [
      {
        question: 'Are image seeds and parameters provided?',
        answer: 'Yes, full prompt formulas including --v 6, --ar, and --style raw variations are provided.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'canva-magic-ai',
    name: 'Canva Magic AI Design Playbook',
    tagline: 'Speed up graphics, social media posts, and pitch decks with AI.',
    description: 'A curated blueprint for mastering Canva Magic Studio: automated bulk create, AI background expand, design generation, and social templates.',
    category: 'AI Design',
    iconName: 'Palette',
    iconBgColor: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
    isPopular: true,
    price: 99,
    currency: '₹',
    features: [
      'Canva Magic Studio Step-by-Step Workflow Guide',
      '50+ Customizable Social Media Template Kits',
      'Bulk AI Post Creation Workflow with CSVs',
      'AI Brand Kit & Typography Harmonizer',
      'Mobile & Web Design Shortcuts'
    ],
    benefits: [
      'Create 100+ Instagram posts and LinkedIn carousels in under 30 minutes',
      'Build professional client pitch presentations with zero design background'
    ],
    howItWorks: [
      'Click "Buy Now – ₹99" to order.',
      'Check your email or screen for immediate digital download link.'
    ],
    whoItIsFor: [
      'Social Media Managers, Agencies, and Content Creators'
    ],
    faq: [
      {
        question: 'Do I get editable Canva links?',
        answer: 'Yes, the pack includes direct 1-click importable Canva template links.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'runway-video-gen',
    name: 'Runway Gen-3 Video Masterpack',
    tagline: 'Create cinematic AI video ads, cinematic b-roll, and animations.',
    description: 'Comprehensive prompt engineering blueprints for Runway Gen-2 & Gen-3 Alpha, camera motion controls, and post-production scaling workflows.',
    category: 'AI Video',
    iconName: 'Video',
    iconBgColor: 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30',
    badge: 'Futuristic',
    isPopular: true,
    price: 99,
    currency: '₹',
    features: [
      '300+ Cinematic Video Prompt Formulas',
      'Camera Motion Brush & Directional Controls Guide',
      'Text-to-Video & Image-to-Video Workflows',
      'AI Upscaling & Video Smoothing Checklist',
      'Commercial Ad Storyboard Templates'
    ],
    benefits: [
      'Produce dynamic social video ads without expensive camera equipment',
      'Master keyframing, temporal consistency, and prompt camera movements'
    ],
    howItWorks: [
      'Tap "Buy Now – ₹99" to pay.',
      'Get instant access to video prompt cheatsheets and workflow videos.'
    ],
    whoItIsFor: [
      'Video Editors, Filmmakers, and Digital Advertisers'
    ],
    faq: [
      {
        question: 'Does this cover Image-to-Video prompts?',
        answer: 'Yes, comprehensive guides for animating Midjourney & Stable Diffusion stills in Runway are included.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'elevenlabs-voice',
    name: 'ElevenLabs Voice & Audio Toolkit',
    tagline: 'Ultra-realistic AI voice cloning, podcast audio, and narration.',
    description: 'Learn voice cloning techniques, emotion prompting, multilingual dubbing, and commercial podcast production using ElevenLabs & AI audio.',
    category: 'AI Voice & Audio',
    iconName: 'Mic',
    iconBgColor: 'from-rose-500/20 to-red-500/20 border-rose-500/30',
    badge: 'Popular',
    isPopular: true,
    price: 99,
    currency: '₹',
    features: [
      'Voice Settings & Stability Optimization Matrix',
      'Emotion & Pacing Speech Prompting Guide',
      'Audiobook & YouTube Narration Templates',
      'Noise Reduction & Audio Post-Processing Guide',
      'Instant Digital Download'
    ],
    benefits: [
      'Produce natural-sounding voiceovers that captivate viewers',
      'Clone and standardize brand voices across international languages'
    ],
    howItWorks: [
      'Click Buy Now – ₹99.',
      'Proceed through safe payment gateway.',
      'Receive all audio guide assets immediately.'
    ],
    whoItIsFor: [
      'Podcasters, YouTubers, Course Creators, and Audiobook Narrators'
    ],
    faq: [
      {
        question: 'Will this help with voice consistency?',
        answer: 'Yes, settings configurations are provided to prevent voice drift and distortion.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'github-copilot-dev',
    name: 'GitHub Copilot Developer Acceleration',
    tagline: 'Code 55% faster with precision AI autocomplete & unit test routines.',
    description: 'Developer cheat sheets for VS Code & JetBrains, custom prompt comments, automated refactoring recipes, and unit test generation snippets.',
    category: 'AI Coding',
    iconName: 'Code',
    iconBgColor: 'from-cyan-500/20 to-emerald-500/20 border-cyan-500/30',
    badge: 'Top Pick',
    isPopular: true,
    isBestDeal: true,
    price: 99,
    currency: '₹',
    features: [
      'Copilot Chat Slash-Command Cheatsheet',
      'Automated Unit Test & Docstring Generation Prompts',
      'Legacy Code Refactoring & Debugging Blueprint',
      'Clean Code & Design Pattern Templates',
      'Full TypeScript, Python & Java Snippet Pack'
    ],
    benefits: [
      'Write boilerplate code and tests in seconds instead of hours',
      'Learn how to guide AI context to produce bug-free implementations'
    ],
    howItWorks: [
      'Click "Buy Now – ₹99".',
      'Instant access to the complete coding guide repository.'
    ],
    whoItIsFor: [
      'Software Engineers, Full-Stack Developers, and CS Students'
    ],
    faq: [
      {
        question: 'Does this cover Cursor and Claude Code too?',
        answer: 'Yes, modern AI coding patterns applicable to Cursor, Copilot, and Claude Code are covered.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'perplexity-research',
    name: 'Perplexity AI Research & Fact-Finding Pack',
    tagline: 'Deep scientific research, competitive intelligence, and citations.',
    description: 'Transform how you conduct market intelligence and academic literature reviews with Perplexity Focus modes, Collections, and export templates.',
    category: 'AI Learning',
    iconName: 'Search',
    iconBgColor: 'from-teal-500/20 to-sky-500/20 border-teal-500/30',
    isPopular: true,
    price: 99,
    currency: '₹',
    features: [
      'Deep Research Query Construction Blueprint',
      'Academic Citation & Literature Review Framework',
      'Competitor Intelligence & Financial Data Sourcing',
      'Perplexity Space & Collection Setup Templates',
      'PDF Summary & Verification Checklist'
    ],
    benefits: [
      'Find verified sources and actionable data 10x faster than traditional search',
      'Conduct rigorous competitor benchmarking in under 15 minutes'
    ],
    howItWorks: [
      'Click Buy Now – ₹99.',
      'Download the digital guide instantly.'
    ],
    whoItIsFor: [
      'Founders, Market Researchers, Consultants, and Students'
    ],
    faq: [
      {
        question: 'Does it include prompt formulas for academic papers?',
        answer: 'Yes, precise research focus queries with Boolean logic are included.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'notion-ai-workspace',
    name: 'Notion AI Productivity Operating System',
    tagline: 'Automate tasks, meeting summaries, project tracking, and docs.',
    description: 'Complete Notion workspace template with built-in Notion AI autofill properties, weekly review summaries, task managers, and knowledge bases.',
    category: 'AI Productivity',
    iconName: 'LayoutGrid',
    iconBgColor: 'from-slate-500/20 to-zinc-500/20 border-slate-500/30',
    badge: 'Essential',
    isPopular: true,
    isBestDeal: true,
    price: 99,
    currency: '₹',
    features: [
      'Turnkey Notion Operating System Template (1-Click Duplicate)',
      'AI Autofill & Property Extraction Formulas',
      'Automated Meeting Minutes & Action Item Tracker',
      'Personal Habit & Goal Setting AI System',
      'Mobile-Optimized Dashboard'
    ],
    benefits: [
      'Organize your entire digital life and work in one unified AI-powered hub',
      'Never manually summarize a meeting or project brief again'
    ],
    howItWorks: [
      'Click Buy Now – ₹99 to proceed with checkout.',
      'Duplicate the Notion template directly into your workspace with 1 click.'
    ],
    whoItIsFor: [
      'Freelancers, Remote Teams, Product Managers, and Solopreneurs'
    ],
    faq: [
      {
        question: 'Is this a 1-click duplicate Notion template?',
        answer: 'Yes, simply click the provided link and tap "Duplicate" in Notion.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'ai-marketing-growth',
    name: 'AI Marketing & Funnel Growth Kit',
    tagline: 'High-converting ad copy, email sequences, and SEO landing pages.',
    description: 'Comprehensive digital resource pack with 50+ email sequence templates, Meta & Google Ads copy generators, and viral hook formulas.',
    category: 'AI Marketing',
    iconName: 'TrendingUp',
    iconBgColor: 'from-amber-500/20 to-rose-500/20 border-amber-500/30',
    isPopular: false,
    price: 99,
    currency: '₹',
    features: [
      '50+ Direct-Response Email Marketing Sequences',
      'Meta & Google Ads Copy Generator Formulas',
      'Viral TikTok & Instagram Reel Hook Vault (200+)',
      'High-Converting Landing Page Copy Framework',
      'SEO Content Cluster & Keyword Strategy Guide'
    ],
    benefits: [
      'Write sales copy that converts traffic into paying customers',
      'Launch full digital ad campaigns in minutes without hiring an agency'
    ],
    howItWorks: [
      'Click Buy Now – ₹99 to complete checkout.',
      'Instant digital files and spreadsheets delivered to your email.'
    ],
    whoItIsFor: [
      'E-commerce Brands, Affiliate Marketers, and Growth Hackers'
    ],
    faq: [
      {
        question: 'Can I use this for client projects?',
        answer: 'Yes, commercial usage is fully permitted for all templates.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  },
  {
    id: 'ai-voice-podcast-studio',
    name: 'AI Automation & Zapier Workflow Vault',
    tagline: 'Connect AI with 1000+ apps without writing a single line of code.',
    description: 'Ready-to-import Zapier & Make.com automation blueprints connecting ChatGPT, Google Sheets, Gmail, WhatsApp, and CRM tools.',
    category: 'Business AI',
    iconName: 'Zap',
    iconBgColor: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
    badge: 'Pro Tier',
    isPopular: false,
    price: 99,
    currency: '₹',
    features: [
      '20+ Pre-Configured Make.com & Zapier Blueprints (JSON export)',
      'Automated Lead Follow-Up & WhatsApp Notification Flow',
      'Customer Support Auto-Responder with AI Quality Filter',
      'Social Media Auto-Publishing Workflow',
      'Setup Video Tutorial & Troubleshooting Checklist'
    ],
    benefits: [
      'Save 20+ hours each week by automating repetitive business tasks',
      'Deliver instant quotes and answers to customer inquiries 24/7'
    ],
    howItWorks: [
      'Click Buy Now – ₹99.',
      'Import the JSON scenario files directly into Make.com or Zapier.'
    ],
    whoItIsFor: [
      'Agencies, Real Estate Brokers, Consultants, and Service Businesses'
    ],
    faq: [
      {
        question: 'Do I need paid Zapier or Make accounts?',
        answer: 'The templates work on free tiers of Make.com and standard Zapier plans.'
      }
    ],
    paymentUrl: DEFAULT_PAYMENT_URL
  }
];

export const COURSES: Course[] = [
  {
    id: 'plc-programming',
    title: 'PLC Programming Masterclass',
    subtitle: 'From Relay Logic to Industrial Siemens & Allen-Bradley Automation',
    description: 'Learn fundamental and advanced PLC ladder logic, function blocks, structured text, hardware wiring, and real-world industrial troubleshooting.',
    category: 'Industrial Automation',
    duration: '18+ Hours of Video Content + Simulators',
    modulesCount: 12,
    level: 'All Levels',
    topics: [
      'Siemens TIA Portal & S7-1200 / S7-1500 Configuration',
      'Allen-Bradley Studio 5000 & RSLogix Architecture',
      'Ladder Diagram (LD), Function Block (FBD) & Structured Text (ST)',
      'Timer, Counter, Math, & Analog Signal Scaling Logic',
      'HMI Interfacing, SCADA Tags & Fieldbus Networking',
      'Industrial Fault Diagnostics & Safe Shutdown Procedures'
    ],
    keyOutcomes: [
      'Confidently design, write, and simulate industrial automation PLC logic',
      'Understand factory wiring, sensor inputs (NPN/PNP), and actuator outputs',
      'Prepare for automation engineer and commissioning specialist interviews'
    ],
    price: 99,
    paymentUrl: DEFAULT_PAYMENT_URL,
    iconName: 'Cpu',
    featured: true
  },
  {
    id: 'industrial-robot-teaching',
    title: 'Industrial Robot Teaching & Robotics',
    subtitle: 'Teach Pendant Mastery for FANUC, KUKA, ABB & Yaskawa Robots',
    description: 'Step-by-step practical guide to industrial manipulator kinematics, coordinate frames (World, Tool, User), trajectory teaching, and payload calibration.',
    category: 'Robotics',
    duration: '15+ Hours + Robot Simulators',
    modulesCount: 10,
    level: 'Intermediate',
    topics: [
      'Coordinate Systems: Joint, World, Tool Center Point (TCP) & User Frame',
      'Teach Pendant Navigation & Safe Jogging Modes (KUKA SmartPAD, FANUC iPendant)',
      'Pick and Place, Palletizing & Spot Welding Trajectory Programming',
      'I/O Signal Handshake with PLCs & Gripper Actuators',
      'Singularity Avoidance & Workspace Optimization',
      'Industrial Robot Safety Standards (ISO 10218 / RIA 15.06)'
    ],
    keyOutcomes: [
      'Master robot teach pendant programming for top global robot brands',
      'Calibrate custom 6-axis Tool Center Points with sub-millimeter precision',
      'Interface robot controllers with factory PLC networks seamlessly'
    ],
    price: 99,
    paymentUrl: DEFAULT_PAYMENT_URL,
    iconName: 'Bot',
    featured: true
  },
  {
    id: 'industrial-automation-applications',
    title: 'Industrial Automation Applications',
    subtitle: 'System Integration, SCADA, VFDs, Sensors & Industry 4.0 IoT',
    description: 'Comprehensive curriculum covering Variable Frequency Drives (VFDs), stepper/servo motors, industrial sensors, SCADA architectures, and IIoT gateways.',
    category: 'System Integration',
    duration: '20+ Hours',
    modulesCount: 14,
    level: 'All Levels',
    topics: [
      'VFD Parameter Tuning, Multi-speed Control & Modbus RTU Control',
      'Servo Drive Positioning, Motion Profiles & Encoder Feedback',
      'Proximity, Photoelectric, Ultrasonic & Vision Sensor Selection',
      'SCADA Architecture (Ignition / Wonderware / WinCC) & Historian Logs',
      'Industrial Ethernet (PROFINET, EtherNet/IP, EtherCAT) Networking',
      'Industry 4.0 Dashboarding, MQTT & Cloud Data Telemetry'
    ],
    keyOutcomes: [
      'Design complete electrical and control panel architectures from scratch',
      'Integrate VFD drives and motion systems with central PLC controllers',
      'Deploy modern SCADA screens and remote telemetry dashboards'
    ],
    price: 99,
    paymentUrl: DEFAULT_PAYMENT_URL,
    iconName: 'Layers',
    featured: true
  },
  {
    id: 'pharma-industry-automation',
    title: 'Pharma Industry Automation',
    subtitle: '21 CFR Part 11 Compliance, Cleanroom Automation & Batch Control',
    description: 'Specialized course on pharmaceutical automation standards, computerized system validation (GAMP 5), SCADA audit trails, and sterile cleanroom robotics.',
    category: 'Pharma Automation',
    duration: '14+ Hours',
    modulesCount: 9,
    level: 'Advanced',
    topics: [
      'FDA 21 CFR Part 11 Electronic Records & Audit Trail Enforcements',
      'GAMP 5 Guidelines & Computer System Validation (CSV) Protocols',
      'ISA-88 Batch Processing Logic & Recipe Management Architecture',
      'HVAC Cleanroom Pressure, Temperature & Humidity Control Loops',
      'Tablet Press, Blister Packaging & Serialization/Track-and-Trace Systems',
      'Sterilization In Place (SIP) & Clean In Place (CIP) PLC Sequences'
    ],
    keyOutcomes: [
      'Understand stringent pharma regulatory automation and validation criteria',
      'Implement compliant audit trail logging and role-based access control',
      'Qualify for high-demand automation roles in multinational pharma companies'
    ],
    price: 99,
    paymentUrl: DEFAULT_PAYMENT_URL,
    iconName: 'ShieldCheck',
    featured: false
  },
  {
    id: 'food-industry-automation',
    title: 'Food Industry Automation',
    subtitle: 'HACCP Standards, High-Speed Packaging & Vision Sorting',
    description: 'Learn sanitary design automation, high-speed sorting with industrial machine vision, conveyor synchronization, and bottling line controls.',
    category: 'Food & Beverage',
    duration: '12+ Hours',
    modulesCount: 8,
    level: 'Intermediate',
    topics: [
      'Sanitary Stainless Steel Standards & Washdown IP69K Componentry',
      'High-Speed Conveyor Tracking & Multi-axis Pick-and-Place Delta Robots',
      'Cognex / Keyence Industrial Vision Inspection for Quality & Seal Check',
      'Automated Weighing, Fillers, Liquid Bottling & Capping Logic',
      'Cold Chain Temperature Telemetry & Alarm Dispatching',
      'HACCP Food Safety Automation Integration'
    ],
    keyOutcomes: [
      'Program high-speed vision-guided sorting and packaging conveyor lines',
      'Comply with international food processing and washdown electrical guidelines',
      'Optimize throughput on commercial packaging and filling lines'
    ],
    price: 99,
    paymentUrl: DEFAULT_PAYMENT_URL,
    iconName: 'Utensils',
    featured: false
  },
  {
    id: 'automobile-industry-automation',
    title: 'Automobile Industry Automation',
    subtitle: 'Body-in-White (BIW), Robotic Spot Welding & AGV Assembly Lines',
    description: 'Master assembly line automation: Body-In-White robotic welding cells, paint shop automation, powertrain assembly, and automated guided vehicles (AGV/AMR).',
    category: 'Automotive',
    duration: '16+ Hours',
    modulesCount: 11,
    level: 'Advanced',
    topics: [
      'Automotive Body-in-White (BIW) Robotic Welding & Sealing Cells',
      'PLC-to-Robot Interlocking & Safety Zone Light Curtain Muting',
      'Automated Guided Vehicles (AGV) & Autonomous Mobile Robots (AMR) Logistics',
      'Tightening Tool Spindle Torque Control & Traceability Databases',
      'Automated Paint Shop Line Control & Curing Oven Temperature Control',
      'Overall Equipment Effectiveness (OEE) Monitoring & Line Balancing'
    ],
    keyOutcomes: [
      'Master automotive plant automation interlocks and cell safety protocols',
      'Understand robotic spot welding and automated vehicle assembly lines',
      'Gain practical knowledge sought by global automotive OEMs and Tier 1 suppliers'
    ],
    price: 99,
    paymentUrl: DEFAULT_PAYMENT_URL,
    iconName: 'Car',
    featured: false
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'affordable-pricing',
    title: 'Affordable Pricing',
    description: 'Unbeatable flat ₹99 pricing for all premium AI resource bundles, starter guides, and automation courses.',
    iconName: 'Tag'
  },
  {
    id: 'easy-purchase',
    title: 'Easy Purchase',
    description: 'No complicated signups or multi-step barriers. Click buy, complete payment in 30 seconds, and start learning.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    description: '100% digital instant delivery. Access your downloads, guides, templates, and video vaults immediately on any device.',
    iconName: 'DownloadCloud'
  },
  {
    id: 'simple-checkout',
    title: 'Simple Checkout',
    description: 'Secured with industry-standard Razorpay gateway supporting all UPI apps (GPay, PhonePe, Paytm), Cards, and NetBanking.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'multiple-categories',
    title: 'Multiple AI Categories',
    description: 'From writing and image generation to industrial robotics and PLC automation — all specialized under one roof.',
    iconName: 'Grid'
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Dedicated email and WhatsApp support to assist you with access links, downloads, and technical questions.',
    iconName: 'Headphones'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rahul Sharma',
    role: 'Freelance UI Designer & Creator',
    company: 'DesignFlow Studio',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    comment: 'The Midjourney Photorealism Master pack is worth ten times the price! The lighting formulas and camera parameter recipes helped me close 3 new client projects in a week.',
    rating: 5,
    purchasedProduct: 'Midjourney Photorealism Master',
    date: '2 days ago'
  },
  {
    id: 't-2',
    name: 'Ananya Verma',
    role: 'Senior Content Strategist',
    company: 'GrowthPulse Digital',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    comment: 'TeachFlow AI made learning ChatGPT and Claude prompt systems effortless. The ₹99 price is unbelievable for the sheer volume of organized templates provided.',
    rating: 5,
    purchasedProduct: 'ChatGPT Master Bundle',
    date: '1 week ago'
  },
  {
    id: 't-3',
    name: 'Vikram Patel',
    role: 'Industrial Automation Engineer',
    company: 'RoboTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    comment: 'The PLC Programming and Robot Teaching course modules gave me exact industrial ladder logic examples. Clear, practical, and straight to the point.',
    rating: 5,
    purchasedProduct: 'PLC Programming Masterclass',
    date: '3 days ago'
  },
  {
    id: 't-4',
    name: 'Sneha Kulkarni',
    role: 'Digital Marketer & Agency Owner',
    company: 'ScaleX Media',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    comment: 'Smooth Razorpay checkout, instant access email, and incredible Notion AI and Marketing kits. Highly recommend TeachFlow AI to anyone starting out!',
    rating: 5,
    purchasedProduct: 'AI Marketing & Funnel Kit',
    date: '5 days ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is TeachFlow AI?',
    answer: 'TeachFlow AI is a dedicated digital marketplace and learning platform where professionals, students, creators, and engineers can discover high-value AI toolkits, prompt libraries, workflow templates, digital resources, and industrial automation courses at an affordable flat rate of just ₹99.'
  },
  {
    id: 'faq-2',
    question: 'What AI tools and products are available?',
    answer: 'We offer specialized digital resource packs, prompt vaults, automation blueprints, and setup guides for popular AI categories including AI Writing (ChatGPT, Claude), Image Generation (Midjourney), Video Creation (Runway), Coding (Copilot), Audio (ElevenLabs), Design (Canva), and Productivity (Notion AI), alongside professional Industrial Automation and Robotics courses.'
  },
  {
    id: 'faq-3',
    question: 'Why are the products priced at just ₹99?',
    answer: 'Our mission is to democratize AI and industrial automation education. By making high-quality digital templates, curated prompt engineering resources, and practical guides available at a flat ₹99, we ensure that every learner, freelancer, and business owner in India can upskill without financial barriers.'
  },
  {
    id: 'faq-4',
    question: 'How do I purchase a product?',
    answer: 'Simply browse our marketplace or courses, click on any "Buy Now – ₹99" button, and you will be securely redirected to our verified Razorpay checkout page. Enter your basic details and complete the payment.'
  },
  {
    id: 'faq-5',
    question: 'How does payment work?',
    answer: 'All payments are processed securely through Razorpay, India’s top payment gateway. You can pay using UPI (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and digital wallets with 256-bit SSL encryption.'
  },
  {
    id: 'faq-6',
    question: 'How will I receive my purchased product?',
    answer: 'All TeachFlow AI products are 100% digital. Immediately upon successful payment completion, you will receive an instant on-screen access link as well as a confirmation email containing your digital download links, Notion templates, and course access credentials.'
  },
  {
    id: 'faq-7',
    question: 'Can I access the products on mobile?',
    answer: 'Yes! All guides, prompts, PDFs, Notion templates, and video lessons are fully mobile-responsive and accessible on smartphones, tablets, laptops, and desktop computers.'
  },
  {
    id: 'faq-8',
    question: 'What is the refund policy?',
    answer: 'Due to the nature of instant digital downloads and resources, all sales are generally final. However, if you experience any technical download issue or corrupt file that our support team cannot resolve within 48 hours, we will happily issue a full refund.'
  },
  {
    id: 'faq-9',
    question: 'How can I contact support?',
    answer: 'You can reach out to our dedicated support team directly via email at biroboticsautomation@gmail.com or via WhatsApp using the quick button in the bottom right corner. We typically respond within a few hours.'
  }
];
