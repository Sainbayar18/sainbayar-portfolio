export type Locale = "en" | "ja";
export type Localized = { en: string; ja: string };
export const profile = {
  name: "Sainbayar",
  initials: "S.",
  role: {
    en: "Developer & software tester",
    ja: "開発者・ソフトウェアテスター",
  },
  // Add your real details here. Empty values are deliberately not rendered as links.
  email: "",
  github: "https://github.com/Sainbayar18",
  photo: "https://avatars.githubusercontent.com/u/150028437?v=4",
  linkedin: "https://www.linkedin.com/in/sainbayar-m-2249b040b/",
  instagram: "",
  x: "",
  resume: "",
  // Public Upwork snapshot. Update these details when your profile changes.
  upwork: {
    url: "https://www.upwork.com/freelancers/~01dd7b64a2f383366e",
    name: "Munkhzorig S.",
    photo: "/upwork-profile.jpg",
    title: "Web Development | JavaScript, Java, HTML, Programming Languages",
    location: { en: "Tokyo, Japan", ja: "日本・東京" },
    jobSuccess: 100,
    totalJobs: 10,
    skills: ["JavaScript", "Java", "HTML"],
    updated: { en: "October 2026", ja: "2026年10月" },
  },
  // Public uTest profile snapshot.
  utest: {
    url: "https://www.utest.com/profile/p2832054/about",
    name: "Sainbayar Munkhzorig",
    photo: "/utest-profile.jpg",
    title: { en: "Software tester", ja: "ソフトウェアテスター" },
    location: { en: "Japan", ja: "日本" },
    joinedYear: "2026",
    rating: { en: "Unrated", ja: "評価なし" },
    updated: { en: "13 October 2026", ja: "2026年10月13日" },
  },
  bio: {
    en: "I'm a Mongolian developer and software tester based in Japan. I build web interfaces, test real products, and keep learning at the intersection of code, quality, and AI.",
    ja: "日本を拠点に活動する、モンゴル出身の開発者・ソフトウェアテスターです。WebのUI開発や実際の製品のテストに取り組み、コード、品質、AIの分野で学び続けています。",
  },
};
export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Vercel",
];
export const projects = [
  {
    slug: "lms-tca",
    number: "01",
    name: "LMS TCA",
    category: "Web",
    art: "lms-tca",
    tags: ["LMS", "E-learning", "Web app"],
    sample: false,
    description: {
      en: "An e-learning portal for Mongol Kosen, with a Mongolian interface and teacher, student, and administrator sign-in options.",
      ja: "モンゴル高専のオンライン学習ポータル。モンゴル語のUIと、教員・学生・管理者それぞれのログイン選択肢を備えています。",
    },
    overview: {
      en: "LMS TCA is an education-focused web project with a Mongolian-language entry screen for Mongol Kosen Technology College. Its sign-in interface gives teachers, students, and administrators separate role choices.",
      ja: "LMS TCAは、モンゴル高専向けの教育用Webプロジェクトです。モンゴル語のログイン画面で、教員・学生・管理者の役割を選択できます。",
    },
    features: {
      en: [
        "Mongolian-language e-learning entry screen",
        "Teacher, student, and administrator role choices",
        "Username and password sign-in interface",
        "College branding and a dedicated education portal",
      ],
      ja: [
        "モンゴル語のオンライン学習ログイン画面",
        "教員・学生・管理者の役割選択",
        "ユーザー名とパスワードによるログインUI",
        "学校のブランドに合わせた学習ポータル",
      ],
    },
    liveUrl: "https://lms-tca.vercel.app/",
    sourceUrl: "",
  },
  {
    slug: "mangos",
    number: "02",
    name: "Mangos",
    category: "Web",
    art: "mangos",
    tags: ["Web app", "Manga reader", "Responsive UI"],
    sample: false,
    description: {
      en: "A Mongolian manga reading app. Discover stories, explore the catalog, and read chapter by chapter.",
      ja: "モンゴル語のマンガ閲覧アプリ。作品を探し、カタログから選んで、各話を読み進められます。",
    },
    overview: {
      en: "Mangos brings manga discovery and reading into a Mongolian-language interface. The homepage highlights new chapters and featured stories, with search, genre filters, and a dedicated reading experience.",
      ja: "Mangosは、マンガを探して読む体験をモンゴル語のUIにまとめたアプリです。ホームでは新着話やおすすめ作品を紹介し、検索、ジャンルの絞り込み、専用の閲覧画面を備えています。",
    },
    features: {
      en: [
        "Mongolian interface and manga catalog",
        "Search and genre filtering",
        "Featured stories and recently added chapters",
        "Chapter reading and light / dark themes",
      ],
      ja: [
        "モンゴル語のUIとマンガカタログ",
        "検索・ジャンルによる絞り込み",
        "おすすめ作品と新着話の紹介",
        "各話の閲覧とライト・ダークテーマ",
      ],
    },
    liveUrl: "https://mangos-lime.vercel.app/",
    sourceUrl: "",
  },
  {
    slug: "personal-portfolio",
    number: "03",
    name: "Personal portfolio",
    category: "Web",
    art: "portfolio",
    tags: ["Next.js", "TypeScript", "CSS"],
    sample: false,
    description: {
      en: "A little corner of the internet, designed to feel like me.",
      ja: "自分らしさを表現する、インターネット上の小さな居場所。",
    },
    overview: {
      en: "An original portfolio built with the Next.js App Router. The design pairs deep forest tones with an editorial layout, a custom geometric identity, and carefully considered interactions.",
      ja: "Next.jsのApp Routerで構築したオリジナルのポートフォリオ。深いグリーン、読みやすいレイアウト、独自の幾何学的なモチーフ、使いやすさを考えた操作を組み合わせています。",
    },
    features: {
      en: [
        "English and Japanese language switching",
        "Persistent light and dark themes",
        "Responsive layouts and accessible navigation",
        "Project filtering and individual project pages",
      ],
      ja: [
        "英語・日本語の切り替え",
        "ライト・ダークテーマの選択を保存",
        "レスポンシブなレイアウトと使いやすいナビゲーション",
        "プロジェクトの絞り込みと各プロジェクトの詳細ページ",
      ],
    },
    liveUrl: "/",
    sourceUrl: "",
  },
];
