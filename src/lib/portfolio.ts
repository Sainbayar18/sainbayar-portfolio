export type Locale = "en" | "mn";
export type Localized = { en: string; mn: string };
export const profile = {
  name: "Sainbayar",
  initials: "S.",
  role: {
    en: "Developer & creative thinker",
    mn: "Хөгжүүлэгч · Бүтээлч сэтгэлгээ",
  },
  // Add your real details here. Empty values are deliberately not rendered as links.
  email: "",
  github: "",
  linkedin: "",
  resume: "",
  bio: {
    en: "I enjoy turning ideas into considered digital experiences. This is my space to share what I build, what I learn, and where I’m heading next.",
    mn: "Би санаагаа хэрэгтэй, ойлгомжтой дижитал бүтээл болгох дуртай. Энэ бол хийж буй ажил, сурч байгаа зүйл, цаашдын зорилгоо хуваалцах миний орон зай.",
  },
};
export const stack = ["Next.js", "React", "TypeScript", "CSS", "Git", "Figma"];
export const projects = [
  {
    slug: "personal-portfolio",
    number: "01",
    name: "Personal portfolio",
    category: "Web",
    art: "portfolio",
    tags: ["Next.js", "TypeScript", "CSS"],
    sample: false,
    description: {
      en: "A little corner of the internet, designed to feel like me.",
      mn: "Миний өнгө төрхийг илэрхийлэх интернэтийн жижигхэн орон зай.",
    },
    overview: {
      en: "An original portfolio built with the Next.js App Router. The design pairs deep forest tones with an editorial layout, a custom geometric identity, and carefully considered interactions.",
      mn: "Next.js App Router ашиглан бүтээсэн өөрийн загвартай portfolio. Гүн ногоон өнгө, том typography, геометр дүрслэл болон ойлгомжтой үйлдлүүдийг нэгтгэсэн.",
    },
    features: {
      en: [
        "English and Mongolian language switching",
        "Persistent light and dark themes",
        "Responsive layouts and accessible navigation",
        "Project filtering and individual project pages",
      ],
      mn: [
        "Англи, монгол хэл солих",
        "Light/dark theme сонголт хадгалах",
        "Гар утсанд тохирсон загвар, хүртээмжтэй navigation",
        "Төсөл шүүх, төслийн дэлгэрэнгүй хуудас",
      ],
    },
    liveUrl: "/",
    sourceUrl: "",
  },
  {
    slug: "focus-workspace",
    number: "02",
    name: "Focus workspace",
    category: "UI",
    art: "focus",
    tags: ["UI design", "Product concept"],
    sample: true,
    description: {
      en: "A calmer way to organize the everyday. A sample product concept.",
      mn: "Өдөр тутмын ажлаа тайван цэгцлэх бүтээгдэхүүний жишээ санаа.",
    },
    overview: {
      en: "A sample workspace concept to demonstrate the project layout. The idea brings tasks, notes, and a focus timer into one quiet interface. Replace this entry with a real project when you’re ready.",
      mn: "Төслийн хэсгийн загварыг харуулах жишээ концепт. Ажил, тэмдэглэл, төвлөрөх цагийг нэг интерфэйст нэгтгэх санаа. Өөрийн бодит төслөөр солих зориулалттай.",
    },
    features: {
      en: [
        "A focused task list concept",
        "A minimal timer interface",
        "Soft colors and clear information hierarchy",
      ],
      mn: [
        "Ажлын жагсаалтын санаа",
        "Минимал таймер интерфэйс",
        "Зөөлөн өнгө, тодорхой мэдээллийн бүтэц",
      ],
    },
    liveUrl: "",
    sourceUrl: "",
  },
  {
    slug: "steppe-studio",
    number: "03",
    name: "Steppe studio",
    category: "UI",
    art: "steppe",
    tags: ["Visual design", "Website concept"],
    sample: true,
    description: {
      en: "Wide horizons, thoughtful details. A sample visual exploration.",
      mn: "Уудам тал, нямбай шийдэл. Вэб дизайны жишээ концепт.",
    },
    overview: {
      en: "A sample website direction inspired by open landscapes and warm, natural materials. This is a visual concept, not a completed client engagement. Use this space to tell the story of your own work.",
      mn: "Уудам тал, байгалийн дулаан өнгөнөөс санаа авсан вэб загварын жишээ. Захиалагчийн бодит ажил биш, дизайны концепт юм. Энэ хэсгийг өөрийн бүтээлийн түүхээр солиорой.",
    },
    features: {
      en: [
        "Landscape-inspired color palette",
        "Editorial typography direction",
        "A simple, spacious layout concept",
      ],
      mn: [
        "Байгалийн өнгөний сонголт",
        "Том typography",
        "Энгийн, зай сайтай зохиомж",
      ],
    },
    liveUrl: "",
    sourceUrl: "",
  },
];
// These describe the site's process, not unverified employment or credentials.
export const journey = [
  {
    number: "01",
    label: { en: "THE FOUNDATION", mn: "СУУРЬ" },
    title: { en: "Start with curiosity.", mn: "Сониуч зангаас эхэлнэ." },
    body: {
      en: "Understand the problem, explore possibilities, and learn the tools needed to bring an idea to life.",
      mn: "Асуудлыг ойлгож, боломжуудыг судалж, санаагаа хэрэгжүүлэх хэрэгслээ суралцана.",
    },
    tags: ["Learning", "Exploration"],
  },
  {
    number: "02",
    label: { en: "THE PRACTICE", mn: "ДАДЛАГА" },
    title: { en: "Make something real.", mn: "Бодит бүтээл болгоно." },
    body: {
      en: "Turn a direction into working interfaces. Build small, pay attention to details, and improve through iteration.",
      mn: "Санаагаа ажилладаг интерфэйс болгоно. Жижиг алхмаар бүтээж, нарийн зүйлсийг анхаарч, сайжруулна.",
    },
    tags: ["Design", "Development"],
  },
  {
    number: "03",
    label: { en: "THE NEXT CHAPTER", mn: "ДАРААГИЙН АЛХАМ" },
    title: { en: "Keep moving forward.", mn: "Үргэлжлүүлэн хөгжүүлнэ." },
    body: {
      en: "Share the work, listen to feedback, and take on the next meaningful challenge.",
      mn: "Бүтээлээ хуваалцаж, санал хүсэлтийг сонсон, дараагийн хэрэгтэй сорилтыг хүлээж авна.",
    },
    tags: ["Feedback", "Growth"],
  },
];
