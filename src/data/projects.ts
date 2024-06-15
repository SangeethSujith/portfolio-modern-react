import { getTheme } from "../components"
import avatar from "./media/avatar.webp"
import ayurware from "./media/ayurware.png"
import chetana from "./media/chetana.png"
import logo from "./media/logo.png"
import plusgoals from "./media/plusgoals.png"
import qrcode from "./media/qrcode.png"
import soluna from "./media/soluna.png"
import stocknikalo from "./media/stocknikalo.png"
import tayari from "./media/tayari.png"
import teamvos from "./media/teamvos.jpg"
import terrapay from "./media/terrapay.png"

const { color } = getTheme()

export type Project = {
  title: string
  description: string
  image: string
  repoUrl?: string
  demoUrl?: string
  docsUrl?: string
}

type Year = { year: number; color: string; projects: Project[] }

export const projects: Year[] = [
  {
    year: 2024,
    color: color.orange,
    projects: [
      {
        title: "Portfolio v2",
        description:
          "The latest version of my portfolio. You are currently looking at it.",
        image: avatar,
        repoUrl: "https://github.com/SangeethSujith/portfolio-modern-react",
        demoUrl: "https://sangeethsujith.github.io/",
      },
      {
        title: "Tayari - A Private Social Media for Congress Party Of India",
        description:
          "My first Social Media made using ReactJS. I used bootstrap as per client request and used TanStack Query and Redux for state management.",
        image: tayari,
        demoUrl: "http://tayari.co.in/",
      },
      {
        title: "Ayurware",
        description:
          "Ayurware is a React Native app that helps the hospitals in consultation management. The app is written in TypeScript and styled with Native Wind.",
        image: ayurware,
      },
    ],
  },
  {
    year: 2023,
    color: color.red,
    projects: [
      {
        title: "PlusGoals",
        description:
          "An online student portal for learning and works as an exam and student can submit their works into it.",
        image: plusgoals,
        demoUrl: "https://app.plusgoals.com/",
      },
      {
        title: "StockNikalo - [WIP]",
        description:
          "An E-commerce website made for industry level machinery selling and buying in bulk and retail.",
        image: stocknikalo,
      },
      {
        title: "Chetana Medicals",
        description:
          "Chetana Medicals is an android app created to ease their CRM work with various employees from managers, sales-person and medical representatives to view, report, enquire and manage employees using individual logins.",
        image: chetana,
      },
      {
        title: "Portfolio v1",
        description:
          "My first portfolio. No longer maintained please dont look at it.",
        image: logo,
        repoUrl: "https://github.com/SangeethSujith/portfolio-simple-dark",
        demoUrl: "https://sangeeth-portfoliodark.vercel.app/",
      },
      {
        title: "QR-Code Reader/Tester App",
        description:
          "My test project to implement QR code in diffrent projects",
        image: qrcode,
        repoUrl: "https://github.com/SangeethSujith/qr_tester",
        demoUrl: "https://qr-tester.vercel.app/",
      },
    ],
  },
  {
    year: 2022,
    color: color.purple,
    projects: [
      {
        title: "EZmenu for Soluna Beach Web",
        description: "A hotel order booking and client management",
        image: soluna,
      },
      {
        title: "Terrapay",
        description:
          "A webcilent for bank to bank communication and ledger management system.",
        image: terrapay,
      },
      {
        title: "Team VOS",
        description:
          "Team VOS is an app created for the Vaidyaratnam Oushadhasala to ease their CRM work with various employees from managers, sales-person and medical representatives to view, report, enquire and manage employees using individual logins.",
        image: teamvos,
      },
    ],
  },
]
