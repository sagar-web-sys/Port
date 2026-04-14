/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║           SAGAR PAUL — PORTFOLIO CONFIGURATION           ║
 * ║                                                          ║
 * ║  এই ফাইলে সব তথ্য আছে। এখানে এডিট করুন।               ║
 * ║  শুধু "" এর ভেতরের লেখা বদলান।                         ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * HOW TO EDIT:
 *   - প্রতিটি "" এর ভেতরে আপনার তথ্য লিখুন
 *   - কিছু না থাকলে "" খালি রাখুন
 *   - ছবি দিতে চাইলে images/ ফোল্ডারে রেখে নাম লিখুন
 *   - সংখ্যার জায়গায় "" ছাড়া সংখ্যা লিখুন
 */

window.PORTFOLIO_CONFIG = {

  /* ─────────────────────────────────────────────
     👤 PERSONAL INFO — ব্যক্তিগত তথ্য
  ───────────────────────────────────────────── */
  personal: {
    name:           "Sagar Paul",               // ← আপনার পুরো নাম
    shortName:      "Sagar",                    // ← ছোট নাম (হিরো সেকশনে)
    initials:       "SP",                       // ← নামের আদ্যক্ষর (Logo-তে)
    tagline:        "Medical Laboratory Technologist",  // ← আপনার পেশার শিরোনাম
    summary:        "Dedicated Medical Laboratory Technician with experience in laboratory diagnostics and quality control, specializing in hematological testing and microbiological analysis.",
    // ↑ নিজের সম্পর্কে ২-৩ লাইন লিখুন

    phone:          "8967478425",               // ← মোবাইল নম্বর
    email:          "sagarpaul.co@gmail.com",   // ← ইমেইল
    linkedin:       "",                         // ← LinkedIn প্রোফাইল URL (না থাকলে খালি)
    website:        "",                         // ← অন্য কোনো ওয়েবসাইট URL

    photo:          "images/profile-professional.jpg",
    // ↑ ছবি দিতে চাইলে images/ ফোল্ডারে রেখে নাম লিখুন
    //   না চাইলে: "" (খালি রাখুন)

    showPhoto:      false,
    // ↑ ছবি দেখাতে চাইলে true, না চাইলে false
  },

  /* ─────────────────────────────────────────────
     📍 ADDRESS — ঠিকানা
  ───────────────────────────────────────────── */
  address: {
    village:        "Subhasganj",               // ← গ্রাম/মহল্লা
    city:           "Raiganj",                  // ← শহর
    district:       "Uttar Dinajpur",           // ← জেলা
    state:          "West Bengal",              // ← রাজ্য
    country:        "India",                    // ← দেশ
    pincode:        "",                         // ← পিনকোড (না জানলে খালি)
  },

  /* ─────────────────────────────────────────────
     🗣️ LANGUAGES — ভাষা
  ───────────────────────────────────────────── */
  languages: [
    { name: "Bangla",  level: "Native"     },  // ← ভাষা ও দক্ষতা
    { name: "Hindi",   level: "Advanced"   },
    { name: "English", level: "Proficient" },
    // আরও ভাষা যোগ করতে নতুন লাইন লিখুন:
    // { name: "ভাষার নাম",  level: "দক্ষতা" },
  ],

  /* ─────────────────────────────────────────────
     📊 HERO STATS — মূল পরিসংখ্যান (হিরো সেকশন)
  ───────────────────────────────────────────── */
  stats: [
    { number: "100+", label: "Monthly Tests"    },
    { number: "95%",  label: "Accuracy Rate"    },
    { number: "15%",  label: "Error Reduction"  },
    // আরও স্ট্যাট যোগ করতে নতুন লাইন লিখুন
  ],

  /* ─────────────────────────────────────────────
     💼 EXPERIENCE — কাজের অভিজ্ঞতা
  ───────────────────────────────────────────── */
  experience: [
    {
      title:      "Medical Laboratory Intern",        // ← পদবী
      company:    "Raiganj Government Medical College and Hospital",  // ← প্রতিষ্ঠান
      period:     "January 2023 – Present",           // ← সময়কাল
      type:       "Internship",                       // ← ধরন (Full-time / Internship / Part-time)
      yearsExp:   1,                                  // ← কত বছর (সংখ্যা)
      description: "Engaged in comprehensive laboratory internship gaining hands-on experience in various diagnostic areas at a premier government medical institution.",
      // ↑ কাজের বিবরণ
      duties: [
        "Conducted hematological tests including CBC, ESR, and peripheral blood smear examination",
        "Implemented and maintained biochemistry quality control procedures",
        "Assisted in bacteriology and serology diagnostic testing",
        "Performed over 100 hematological tests monthly with 95% accuracy rate",
        "Reduced test result errors by 15% through diligent quality control",
        "Practiced basic ELISA techniques for immunological testing",
        // আরও duty যোগ করতে নতুন লাইন লিখুন
      ],
      tags: ["CBC", "ESR", "Bacteriology", "Quality Control", "ELISA"],
      // ↑ ছোট ট্যাগ গুলো
    },

    // আরও কাজের অভিজ্ঞতা যোগ করতে নিচের মতো নতুন ব্লক যোগ করুন:
    // {
    //   title:       "পদবী",
    //   company:     "প্রতিষ্ঠান",
    //   period:      "সময়কাল",
    //   type:        "Full-time",
    //   yearsExp:    2,
    //   description: "বিবরণ",
    //   duties:      ["কাজ ১", "কাজ ২"],
    //   tags:        ["ট্যাগ১", "ট্যাগ২"],
    // },
  ],

  /* ─────────────────────────────────────────────
     🎓 EDUCATION — শিক্ষাগত যোগ্যতা
  ───────────────────────────────────────────── */
  education: [
    {
      degree:      "Diploma in Medical Laboratory Technology",  // ← ডিগ্রির নাম
      short:       "DMLT",                                      // ← সংক্ষিপ্ত নাম
      institute:   "Raiganj Government Medical College and Hospital",  // ← প্রতিষ্ঠান
      period:      "March 2023 – May 2025",                     // ← সময়কাল
      description: "Comprehensive diploma program covering hematology, biochemistry, microbiology, serology, and clinical pathology with hands-on laboratory training.",
      highlights:  ["Laboratory Diagnostics", "Quality Control", "Clinical Pathology"],
    },
    {
      degree:      "Higher Secondary Certificate",
      short:       "12th Standard",
      institute:   "Subhasganj High School (HS)",
      period:      "March 2021 – March 2023",
      description: "Completed Higher Secondary education with focus on science subjects.",
      highlights:  ["Science Stream", "Biology", "Chemistry"],
    },
    {
      degree:      "Secondary School Certificate",
      short:       "10th Standard",
      institute:   "Subhasganj High School (HS)",
      period:      "Completed January 2021",
      description: "Completed Secondary education with strong academic performance.",
      highlights:  ["Core Sciences", "Mathematics", "General Studies"],
    },

    // আরও শিক্ষা যোগ করতে নতুন ব্লক লিখুন
  ],

  /* ─────────────────────────────────────────────
     🛠️ SKILLS — দক্ষতা
  ───────────────────────────────────────────── */
  skills: [
    {
      category: "Hematology",                // ← বিভাগের নাম
      icon:     "fas fa-vials",              // ← Font Awesome আইকন
      items: [
        { name: "Complete Blood Count (CBC)", percent: 95 },
        { name: "ESR Testing",                percent: 90 },
        { name: "Hematological Analysis",     percent: 92 },
        // আরও স্কিল যোগ করতে নতুন লাইন লিখুন
      ],
    },
    {
      category: "Microbiology",
      icon:     "fas fa-bacteria",
      items: [
        { name: "Bacteriology",           percent: 88 },
        { name: "Serology",               percent: 85 },
        { name: "Basic ELISA Techniques", percent: 80 },
      ],
    },
    {
      category: "Biochemistry",
      icon:     "fas fa-flask",
      items: [
        { name: "Biochemistry QC",    percent: 93 },
        { name: "Quality Control",    percent: 95 },
        { name: "Clinical Diagnostics", percent: 90 },
      ],
    },
    {
      category: "Other Skills",
      icon:     "fas fa-desktop",
      items: [
        { name: "Basic Computer Skills", percent: 75 },
        { name: "Attention to Detail",   percent: 98 },
        { name: "Lab Safety Protocols",  percent: 95 },
      ],
    },
  ],

  /* ─────────────────────────────────────────────
     🏆 ACHIEVEMENTS — অর্জন
  ───────────────────────────────────────────── */
  achievements: [
    {
      icon:   "fas fa-chart-line",
      number: "15%",
      title:  "Error Reduction",
      desc:   "Reduced test result errors by 15% through diligent quality control measures.",
      badge:  "Quality Achievement",
    },
    {
      icon:   "fas fa-microscope",
      number: "100+",
      title:  "Monthly Tests",
      desc:   "Successfully completed over 100 hematological tests monthly.",
      badge:  "Productivity Achievement",
      featured: true,  // ← এটা highlighted থাকবে
    },
    {
      icon:   "fas fa-bullseye",
      number: "95%",
      title:  "Accuracy Rate",
      desc:   "Achieved 95% accuracy rate in quality control measures.",
      badge:  "Accuracy Achievement",
    },
  ],

  /* ─────────────────────────────────────────────
     💪 STRENGTHS — শক্তি
  ───────────────────────────────────────────── */
  strengths: [
    {
      icon:  "fas fa-search",
      title: "Attention to Detail",
      desc:  "Detail-oriented and committed to maintaining the highest quality standards.",
    },
    {
      icon:  "fas fa-heartbeat",
      title: "Healthcare Enthusiasm",
      desc:  "Passionate about expanding knowledge in the medical field and social health initiatives.",
    },
    {
      icon:  "fas fa-award",
      title: "Quality Commitment",
      desc:  "Dedicated to improving quality control measures for accurate diagnostic results.",
    },
    {
      icon:  "fas fa-users",
      title: "Team Collaboration",
      desc:  "Works effectively in clinical team environments.",
    },
  ],

  /* ─────────────────────────────────────────────
     🔧 SITE SETTINGS — ওয়েবসাইট সেটিংস
  ───────────────────────────────────────────── */
  settings: {
    showMap:          false,   // ← ম্যাপ দেখাতে চাইলে true
    showPhoto:        false,   // ← ছবি দেখাতে চাইলে true
    showContactForm:  true,    // ← contact form দেখাতে চাইলে true
    showStrengths:    true,    // ← strengths সেকশন দেখাতে চাইলে true
    darkMode:         true,    // ← dark theme: true, light: false
    accentColor:      "#0ea5e9",  // ← মূল রং (নীল)

    typingTexts: [
      "Medical Laboratory Technologist",
      "Hematological Testing Expert",
      "Quality Control Specialist",
      "DMLT Graduate (2025)",
      // আরও লাইন যোগ করতে পারেন
    ],
  },

};

// window.PORTFOLIO_CONFIG is now globally available
