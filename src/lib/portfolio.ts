export type Locale = "en" | "mn";
export type Localized = { en: string; mn: string };
export const profile = {
  name: "Sainbayar",
  initials: "S.",
  role: {
    en: "Developer & software tester",
    mn: "Хөгжүүлэгч · Программ тестер",
  },
  // Add your real details here. Empty values are deliberately not rendered as links.
  email: "",
  github: "https://github.com/Sainbayar18",
  photo: "https://avatars.githubusercontent.com/u/150028437?v=4",
  linkedin: "",
  instagram: "",
  x: "",
  resume: "",
  // Public Upwork snapshot. Update these details when your profile changes.
  upwork: {
    url: "https://www.upwork.com/freelancers/~01dd7b64a2f383366e",
    name: "Munkhzorig S.",
    photo: "/upwork-profile.jpg",
    title: "Web Development | JavaScript, Java, HTML, Programming Languages",
    location: { en: "Tokyo, Japan", mn: "Токио, Япон" },
    jobSuccess: 100,
    totalJobs: 10,
    skills: ["JavaScript", "Java", "HTML"],
    updated: { en: "October 2026", mn: "2026 оны 10-р сар" },
  },
  // Public uTest profile snapshot.
  utest: {
    url: "https://www.utest.com/profile/p2832054/about",
    name: "Sainbayar Munkhzorig",
    photo: "/utest-profile.jpg",
    title: { en: "Software tester", mn: "Программ хангамжийн тестер" },
    location: { en: "Japan", mn: "Япон" },
    joinedYear: "2026",
    rating: { en: "Unrated", mn: "Зэрэггүй" },
    updated: { en: "13 October 2026", mn: "2026 оны 10-р сарын 13" },
  },
  bio: {
    en: "I'm a Mongolian developer and software tester based in Japan. I build web interfaces, test real products, and keep learning at the intersection of code, quality, and AI.",
    mn: "Би Японд амьдардаг монгол хөгжүүлэгч, программ хангамжийн тестер. Вэб интерфэйс бүтээж, бодит бүтээгдэхүүн тестэлж, код, чанар, хиймэл оюуны чиглэлээр тасралтгүй суралцаж байна.",
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
    slug: "mangos",
    number: "01",
    name: "Mangos",
    category: "Web",
    art: "mangos",
    tags: ["Web app", "Manga reader", "Responsive UI"],
    sample: false,
    description: {
      en: "A Mongolian manga reading app. Discover stories, explore the catalog, and read chapter by chapter.",
      mn: "Монгол манга унших вэб апп. Шинэ түүх олж, мангагийн сангаас сонгон, бүлэг бүрээр уншина.",
    },
    overview: {
      en: "Mangos brings manga discovery and reading into a Mongolian-language interface. The homepage highlights new chapters and featured stories, with search, genre filters, and a dedicated reading experience.",
      mn: "Mangos нь манга хайх, сонгох, унших боломжийг монгол интерфэйст нэгтгэсэн. Нүүр хуудсанд онцлох манга, шинэ бүлгүүдийг харуулж, хайлт, жанрын шүүлтүүр болон тусдаа унших хуудастай.",
    },
    features: {
      en: [
        "Mongolian interface and manga catalog",
        "Search and genre filtering",
        "Featured stories and recently added chapters",
        "Chapter reading and light / dark themes",
      ],
      mn: [
        "Монгол интерфэйс, мангагийн сан",
        "Хайлт болон жанраар шүүх",
        "Онцлох манга, шинээр нэмэгдсэн бүлгүүд",
        "Бүлэг унших, цайвар / бараан горим",
      ],
    },
    liveUrl: "https://mangos-lime.vercel.app/",
    sourceUrl: "",
  },
  {
    slug: "personal-portfolio",
    number: "02",
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
    number: "03",
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
    number: "04",
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
