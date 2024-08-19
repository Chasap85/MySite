import { ProjectData } from "@/types/types";

const projectData: ProjectData = {
  keno: {
    title: "Web Keno",
    description: "Web app where you can play the fun gambling game of keno",
    image: "/images/game.webp",
    processImage: [
      { src: "/images/projects/kenoScreen.webp", caption: "Keno" },
    ],
    intro:
      "Inspired by the lively atmosphere of Las Vegas local bars, this project brings the thrill of Keno to your fingertips—minus the risk. Whether you're picking 20 cards in multi-card Keno or sticking to the classic style with up to 10 numbers, the excitement is in the draw. While real-life gambling comes with stakes, this digital version is all fun and no financial risk. Think of it as a taste of Vegas, right from your couch.",
    about:
      "This web-based Keno game offers both multi-card and classic modes, making it accessible to anyone with an internet connection. But it’s more than just a game; it’s a playground for analytics. By tracking thousands (or even millions) of games, we can dive into the data and uncover trends, strategies, and insights that might just give players an edge—or at least a new way to look at the game.",
    process:
      "I built the game using JavaScript, drawing from my experience with slot machine games to create a sleek and intuitive UI. But I didn’t stop there. I’m currently exploring ways to add animations, sounds, and interactive features to make the game even more engaging. On the backend, I’m developing an analytics engine that shows players how they’re doing in real-time. It’s all about making numbers fun and interactive—you pick, you analyze, you win!",
    progress: { status: "Development", progress: 50 },
    repoUrl: "https://github.com/Chasap85/DigiKeno",
  },
  cluster: {
    title: "Pi Cluster",
    description: "Building a raspberry pi cluster",
    image: "/images/pi.webp",
    processImage: [
      { src: "/images/projects/piCluster.webp", caption: "Cluster Fun" },
      { src: "/images/projects/fusion.webp", caption: "Modeling the shell" },
    ],
    intro:
      "Inspired by my experience in corporate software development, I wanted to create something personal and powerful—a Raspberry Pi cluster that doubles as an art piece. While many have built Pi clusters before, I wanted to push the boundaries by designing a custom case that looks straight out of a video game or cartoon. It’s part tech, part art, and all passion. Starting with concept art and moving into Fusion 360, this project is where engineering meets creativity.",
    about:
      "A Raspberry Pi cluster is a collection of Raspberry Pi devices connected and working together to perform complex tasks that a single Pi couldn’t handle on its own. Think of it as a mini-supercomputer, perfect for experimentation, learning, and even powering some serious applications.",
    process:
      "The journey began with a concept—a unique, cool machine that could blend form and function. I sketched out my ideas, then translated them into rough dimensions using Adobe Illustrator, my go-to tool for quick design work. Next, I moved into Fusion 360 to create the precise files needed for CNC machining and 3D printing. This is where the project really comes to life, combining the digital with the physical.",
    progress: { status: "Development", progress: 30 },
    repoUrl: "#",
  },
  quest: {
    title: "Code Quest",
    description: "Game that teaches kids how to code",
    image: "/images/quest.webp",
    processImage: [
      { src: "/images/projects/questArch.webp", caption: "Code Quest" },
    ],
    intro:
      "Code-Quest was born out of a collaborative effort with a few classmates, aiming to create a fun, interactive game that teaches kids the basics of programming. Built in the Godot engine, this game takes players on a journey where they write real Python code to solve challenges and advance through levels. Despite our initial lack of experience with Godot, we quickly adapted, leveraging its features and documentation to bring our vision to life. We made significant progress, but there’s always room for more features—maybe in a future update.",
    about:
      "Code-Quest isn’t just a game; it’s an educational experience designed for kids aged 9-13. By guiding quirky characters through coding challenges, players develop creativity, problem-solving skills, and a solid foundation in Python—all while having fun. It’s coding education, but with a twist.",
    process: `We built out all the necessary components for a coding game: assets, animations, audio, game dialogue, a built-in code editor, levels, a code analyzer, and more. We even designed multiple characters to accompany the player as they progress through increasingly difficult challenges. Each level presents a unique task that requires the player to write code to advance.
              The in-game code editor acts as a mini-IDE, where players can experiment with solutions. Their code is evaluated through a backend process that communicates with Judge0's API, determining if they’ve solved the challenge. If they succeed, they’re rewarded with a congratulatory popup. If not, they receive actionable feedback powered by OpenAI’s ChatGPT, helping them refine their approach and try again.`,
    progress: { status: "Done", progress: 100 },
    repoUrl:
      "https://github.com/Chasap85/code_quest_senior_project?tab=readme-ov-file",
  },
};

export default projectData;
