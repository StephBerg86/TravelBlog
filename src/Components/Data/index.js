export const GOTOPAGE = {
  MexicoCenotes: "/mexicocenotes",
  Ijsland: "/ijsland",
  Bahamas: "/bahamasvarkens",
  Japan: "/japan",
  Philipijnen: "/philipijnen",
  Namibie: "/namibie",
  ZuidAfrika: "/zuidafrika",
  Miami: "/miami",
  Formentera: "/formentera",
  Ibiza: "/ibiza",
  Srilanka: "/routesrilanka",
};

export const cardsData = [];

export const data = [
  {
    id: 1,
    location: "Mexico",
    title: "Mexico",
    text: "Intro about Mexico",
    routes: [],
    stories: [
      {
        title: "De mooiste Cenotes van Yucatan",
        location: "Mexico",
        text: "Mexico heeft eindeloos veel Cenotes, de één nog mooier dan de andere.  Maar welke mag je zeker niet overslaan? Als je voor het eerst naar Mexico gaat dan kan deze keuze best wel overweldigend zijn. Dit waren mijn favoriete cenotes.",
        image:
          "https://media.istockphoto.com/photos/ik-kil-yucatan-mexico-picture-id471176226?s=612x612",
        onClick: GOTOPAGE.MexicoCenotes,
        category: "tip",
        homepage: false,
      },
    ],
  },
  {
    id: 2,
    location: "Namibie",
    title: "Namibië",
    text: "Intro about Namibië",
    routes: [],
    stories: [
      {
        title: "Spookstad Kolmanskop",
        location: "Namibie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wearetravellers.nl/wp-content/uploads/kolmanskop-namibie-badkamer-2.jpg",
        onClick: GOTOPAGE.Namibie,
        category: "route",
        homepage: true,
      },
      {
        title: "Sossusvlei",
        location: "Namibie",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/16/fa/05/2b/sossusvlei.jpg",
        onClick: GOTOPAGE.Namibie,
        category: "tip",
        homepage: true,
      },
    ],
  },
  {
    id: 3,
    location: "Japan",
    title: "Japan",
    text: "Intro about Japan",
    routes: [],
    stories: [
      {
        title: "Mario Kart in Tokyo",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        onClick: GOTOPAGE.Japan,
        category: "tip",
        homepage: true,
      },
    ],
  },
  {
    id: 4,
    location: "Ijsland",
    title: "IJsland",
    text: "Intro about Iceland",
    routes: [],
    stories: [
      {
        title: "Waterval paradijs",
        location: "Ijsland",
        text: "Als je van mooie watervallen houdt dan in IJsland echt 'the place to be'. Dit zijn de mooiste.",
        image:
          "https://www.askja.nl/media/thumbnails/web/670de8c78fce524e325ab7e5884345c0faeb4fee/cheng-yuan1.jpg",
        onClick: GOTOPAGE.Ijsland,
        category: "route",
        homepage: false,
      },
    ],
  },
  {
    id: 5,
    location: "Bahamas",
    title: "Bahamas",
    text: "Intro about Bahamas",
    routes: [],
    stories: [
      {
        title: "Alles wat je moet weten over zwemmen met varkens in de Bahamas",
        location: "Bahamas",
        text: "Een helderblauwe zee, witte stranden, en vrolijke varkentjes. Dit klinkt toch als het paradijs op aarde? Dit paradijs bestaat en het is in de Bahamas. Lees er alles over in dit artikel.",
        image:
          "https://cdn.holidayguru.nl/wp-content/uploads/2017/03/Swimming-pigs-of-Exumas-iStock_000033977684_Large-2.jpg",
        onClick: GOTOPAGE.Bahamas,
        category: "tip",
        homepage: true,
      },
    ],
  },
  {
    id: 6,
    location: "Usa",
    title: "USA",
    text: "Intro about USA",
    routes: [],
    stories: [
      {
        title: "Streetart in Wynwood",
        location: "Miami",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/05/41/20190602-125404-largejpg.jpg?w=1200&h=-1&s=1",
        onClick: GOTOPAGE.Miami,
        category: "tip",
        homepage: false,
      },
    ],
  },
  {
    id: 6,
    location: "Philippines",
    title: "Philippines",
    text: "Intro about Philippines",
    routes: [],
    stories: [
      {
        title: "De mooiste eilandentours",
        location: "Philipijnen",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://lp-cms-production.imgix.net/2021-02/GettyRF_985553596.jpg",
        onClick: GOTOPAGE.Philipijnen,
        category: "route",
        homepage: false,
      },
    ],
  },
  {
    id: 5,
    location: "Zuidafrika",
    title: "Zuid Afrika",
    text: "Intro about ZA",
    routes: [],
    stories: [
      {
        id: 7,
        title: "Wijntour in Fransschoek",
        location: "ZuidAfrika",
        text: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6f/d9/3d.jpg",
        onClick: GOTOPAGE.ZuidAfrika,
        category: "tip",
        homepage: true,
      },
    ],
  },
  {
    id: 5,
    location: "Spanje",
    title: "Spanje",
    text: "Intro about Spain",
    routes: [],
    stories: [
      {
        title: "Een paradijs in Europa, Formentera",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wandelingen.info/wp-content/uploads/2016/12/Formentera-trucadors-plankierpad.jpg",
        onClick: GOTOPAGE.Formentera,
        category: "route",
        homepage: true,
      },
      {
        id: 11,
        title: "De andere kant van party-eiland Ibiza",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.travelvalley.nl/uploads/images/pleintje-ibiza-stad.jpeg",
        onClick: GOTOPAGE.Ibiza,
        category: "tip",
        homepage: true,
      },
    ],
  },
  {
    id: 5,
    location: "SriLanka",
    title: "Sri Lanke",
    text: "Intro about sri",
    routes: [],
    stories: [
      {
        id: 12,
        title: "Sri Lanka in drie of vier weken",
        location: "SriLanka",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://d2csxpduxe849s.cloudfront.net/media/D9C47D27-CF22-4106-BDD62A07BB6C91E1/1AF92955-0C7D-4CAC-81182775001FB1B2/webimage-55FF1AEA-BE78-4EEA-BD5B453633ED3633.png",
        onClick: GOTOPAGE.Srilanka,
        category: "route",
        homepage: true,
      },
    ],
  },
];
