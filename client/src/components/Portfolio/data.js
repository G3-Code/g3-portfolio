export const tabData = [
  "all",
  "javascript",
  "node",
  "React.js",
  "HTML5/CSS3",
  "SQL"
];

export const cardData = [
  {
    id: "1",
    projectName: "Lambda Labs - Product Q",
    description:
      "Fully responsive landing page for web app built with HTML5/CSS3 + javascript.",
    tab: ["javascript", "HTML5/CSS3"],
    img: "./assets/productq.png",
    accomplishment: [
      { id: "a1", desc: "HTML5, CSS3, JS" },
      { id: "a2", desc: "Reusable JS components" },
      {
        id: "a3",
        desc: "Fully responsive - breakpoints for desktop, tablet & mobile"
      }
    ],
    github: "https://github.com/build-415-productqueue/landingpage",
    online: "https://lambdaprodq.netlify.com/"
  },
  {
    id: "2",
    projectName: "Random act generator",
    description: "A web app that suggests a random act of kindness.",
    tab: ["javascript", "React.js", "node", "SQL", "HTML5/CSS3"],
    img: "./assets/justhelp.png",
    accomplishment: [
      { id: "a21", desc: "Accomplishment1" },
      { id: "a22", desc: "Accomplishment2" },
      { id: "a23", desc: "Accomplishment3" },
      { id: "a24", desc: "Accomplishment4" }
    ],
    github: "www.github.com",
    online: "www.google.com"
  }
];
