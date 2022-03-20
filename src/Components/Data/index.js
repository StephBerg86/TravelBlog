export const GOTOPAGE = {
  MexicoRoute: "/route/mexico",
  MexicoStory: "/mexicostory",
  IcelandRoute: "/route/iceland",
  IcelandStory: "/icelandstory",
  BahamasRoute: "/route/bahamas",
  BahamasStory: "/stories/bahamas",
  JapanRoute: "/route/japan",
  JapanStory: "/japanstory",
  PhilippinesRoute: "/route/philippines",
  PhilippinesStory: "/philippinesstory",
  NamibiaRoute: "/route/namibia",
  NamibiaStory: "/namibiastory",
  SouthAfricaRoute: "/route/southafrica",
  SouthAfricaStory: "/southafricastory",
  MiamiRoute: "/route/miami",
  MiamiStory: "/miamistory",
  SpainRoute: "/route/spain",
  FormenteraStory: "/formenterastory",
  IbizaStory: "/ibizastory",
  SrilankaRoute: "/route/srilanka",
  SrilankaStory: "/srilankastory",
};

export const data = [
  {
    id: "mexico",
    location: "Mexico",
    continent: "Midden Amerika",
    title: "Mexico",
    text: "Intro about Mexico",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Mexique.png",
    alt: "Flag Mexico",
    routes: [
      {
        title: "Mijn route door Yucatan",
        category: "card",
        location: "Mexico",
        text: "Benieuwd naar mijn route door Mexico, lees er hier meer over",
        image:
          "https://media.istockphoto.com/photos/ik-kil-yucatan-mexico-picture-id471176226?s=612x612",
        alt: "cenote",
        onClick: GOTOPAGE.MexicoRoute,
        homepage: false,
      },
      {
        category: "route",
        title: "Mijn route door Yucatan",
        location: "Mexico",
        text: "Dit is de tekst over de route ....",
        image:
          "https://media.istockphoto.com/photos/ik-kil-yucatan-mexico-picture-id471176226?s=612x612",
        alt: "cenote",
      },
    ],
    stories: [
      {
        title: "Yucatan de toeristische parel van Mexico",
        location: "Mexico",
        text: "Mexico heeft eindeloos veel Cenotes, de één nog mooier dan de andere.  Maar welke mag je zeker niet overslaan? Als je voor het eerst naar Mexico gaat dan kan deze keuze best wel overweldigend zijn. Dit waren mijn favoriete cenotes.",
        image:
          "https://media.istockphoto.com/photos/ik-kil-yucatan-mexico-picture-id471176226?s=612x612",
        alt: "cenote",
        onClick: GOTOPAGE.MexicoStory,
        category: "card",
        homepage: false,
      },
    ],
  },
  {
    id: "namibia",
    location: "Namibie",
    continent: "Afrika",
    title: "Namibië",
    text: "Intro about Namibië",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Namibie.png",
    alt: "Flag Namibië",
    routes: [
      {
        title: "Spookstad Kolmanskop",
        category: "card",
        location: "Namibie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wearetravellers.nl/wp-content/uploads/kolmanskop-namibie-badkamer-2.jpg",
        alt: "Kolmanskop",
        onClick: GOTOPAGE.NamibiaRoute,
        homepage: true,
      },
      {
        category: "route",
        title: "Route door Namibie",
        location: "Namibie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wearetravellers.nl/wp-content/uploads/kolmanskop-namibie-badkamer-2.jpg",
        alt: "Kolmanskop",
      },
    ],
    stories: [
      {
        title: "Sossusvlei",
        location: "Namibie",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/16/fa/05/2b/sossusvlei.jpg",
        alt: "Sossusvlei",
        onClick: GOTOPAGE.NamibiaStory,
        category: "card",
        homepage: true,
      },
    ],
  },
  {
    id: "japan",
    location: "Japan",
    continent: "Azie",
    title: "Japan",
    text: "Intro about Japan",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Japon.png",
    alt: "Flag Japan",
    routes: [
      {
        title: "van Hiroshima naar Tokyo en de Yaeyama islands",
        category: "card",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        alt: "Mario Kart Tokio",
        onClick: GOTOPAGE.JapanRoute,
        homepage: true,
      },
      {
        category: "route",
        title: "van Hiroshima naar Tokyo en de Yaeyama islands",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        alt: "Mario Kart Tokio",
      },
    ],
    stories: [
      {
        title: "Mario Kart in Tokyo",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        alt: "Mario Kart Tokio",
        onClick: GOTOPAGE.JapanStory,
        category: "card",
        homepage: true,
      },
    ],
  },
  {
    id: "iceland",
    location: "Ijsland",
    continent: "Europa",
    title: "IJsland",
    text: "Intro about Iceland",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Islande.png",
    alt: "Flag IJsland",
    routes: [],
    stories: [
      {
        title: "Waterval paradijs",
        location: "Ijsland",
        text: "Als je van mooie watervallen houdt dan in IJsland echt 'the place to be'. Dit zijn de mooiste.",
        image:
          "https://www.askja.nl/media/thumbnails/web/670de8c78fce524e325ab7e5884345c0faeb4fee/cheng-yuan1.jpg",
        alt: "waterval ijsland",
        onClick: GOTOPAGE.IcelandStory,
        category: "card",
        homepage: false,
      },
    ],
  },
  {
    id: "bahamas",
    location: "Bahamas",
    continent: "USA",
    title: "Bahamas",
    text: "Intro about Bahamas",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Bahamas.png",
    alt: "Flag Bahamas",
    routes: [],
    stories: [
      {
        title: "Alles wat je moet weten over zwemmen met varkens in de Bahamas",
        category: "card",
        location: "Bahamas",
        text: "Een helderblauwe zee, witte stranden, en vrolijke varkentjes. Dit klinkt toch als het paradijs op aarde? Dit paradijs bestaat en het is in de Bahamas. Lees er alles over in dit artikel.",
        image:
          "https://cdn.holidayguru.nl/wp-content/uploads/2017/03/Swimming-pigs-of-Exumas-iStock_000033977684_Large-2.jpg",
        alt: "zwemmende varkens",
        onClick: GOTOPAGE.BahamasStory,
        homepage: true,
      },
      {
        category: "story",
        title: "Alles wat je moet weten over zwemmen met varkens in de Bahamas",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-720x480/0a/9e/26/3e.jpg",
        alt: "zwemmende varkens",
        location: "Bahamas",
        text: "Toen ik voor het eerst foto's van zwemmende varkentjes in helderblauw water zag, stond dit direct bovenaan mijn bucketlist. Mijn ticket naar Miami had ik al geboekt en omdat ik toch 'in de buurt' was, heb ik besloten om de zwemmende varkens van mijn bucketlist af te strepen.",
        text1:
          " De Bahama's liggen op ruim een uur vliegen vanaf Miami en bestaan uit 700 eilandjes waarvan er zo'n 35 bewoond zijn. Meestal vlieg je op Nassau, de hoofdstad van de Bahamas en de plek waar 70% van de inwoners even.",
        subTitle2: "Hoe kom je er?",
        text2:
          "Vanuit Nassau kun je met de boot of met het vliegtuig naar Georgetown, de hoofdstad van Great Exuma. Als je de varkens wilt zien zwemmen moet je naar Pig Beach, dit is één van de eilanden van de Exuma Cays. Pig Beach is een klein eiland waar je niet kunt verblijven dus je kunt het beste Georgetown als uitvalsbasis gebruiken. Vanuit daar kun je een privéboot huren of je boekt een excursie. Ik heb zelf een excursie geboekt waarmee ik in één dag alle bezienswaardigheden van de Exuma Cays kon zien.",
        subTitle3: "Zwemmende varkens",
        text3:
          "Hoe de varkens precies op Pig Beach gekomen zijn weet niemand. Er gaan verschillende verhalen rond maar persoonlijk geloof ik het verhaal dat de varkens er neergezet zijn om het toerisme op de Bahama's te stimuleren. Als je de baai in komt varen dan komen de grootste varkens al op je af gezwommen. Een hele groep zwemmende varkens in het mooiste blauwe water, met op de achtergrond een parelwit strand. Dit was echt een onbeschrijfelijk mooi moment. De boot meert aan op het strandje en hier komen ook de kleine varkentjes je tegemoet.",
        subTitle4: "Keerzijde",
        text4:
          "Ondanks dat ik het heel bijzonder vond om de varkens te zien zwemmen, gaf het me ook een naar gevoel en wilde ik er zo snel mogelijk weer weg. De reden daarvan waren mijn medetoeristen en de leiding van de excursie. Je wordt door de tourleiding aangemoedigd om de kleine varkens op te tillen en ze eten te geven. Superleuk voor Instagram, zo'n foto met een klein varkentje in je armen. De keerzijde is dat je non-stop de kleine varkens hoort gillen omdat ze helemaal niet opgetild willen worden. Ook zag ik dat er hele zakken chips, muffins en koeken aan de varkens gegeven werden. Toen ik net twee weken thuis was hoorde ik op het nieuws dat er zes varkens overleden waren nadat toeristen de varkens alcohol hadden gevoerd. Dit verbaasd mij niks en ik vind het een hele kwalijke zaak. Mocht je zelf naar Pig Beach gaan, laat de varkens dan lekker op de grond lopen en geef ze geen junkfood.",
        subtitle5: "Disclaimer",
        text5:
          "Ik was in februari 2017 op de Bahamas. Inmiddels is er gelukkig een hoop veranderd. Toen ik ging was er bijna geen informatie te vinden over hoe je naar de vakens kon komen en nu lees je het overal. Ook zijn ze nu strenger geworden wat betreft de regels rondom de varkens. Je mag ze niet zomaar meer oppakken en ook mag je ze alleen fruit en groente voeren.",
        subTitle6: "Excursie",
        text6:
          "Er zijn diverse bedrijven die dag excursies aanbieden naar Pig Beach. Deze excursies zijn prijzig maar zeker de moeite waard. Je gaat namelijk niet alleen naar Pig Beach. Je stopt o.a. een eiland vol iguana's die je sla mag voeren, je kan zwemmen met nurse sharks, je komt langs een vliegtuig van Pablo Escobar wat je vanuit de boot op de bodem kunt zien liggen en je gaat snorkelen op de mooiste plekken.",
        subTitle7: "Prijzen",
        text7:
          " De Bahama's is geen goedkope vakantiebestemmig. Zeker niet als je, net als ik, alleen reist. Er zijn weinig hostels te vinden en je betaald vaak per hotelkamer i.p.v. per persoon. Met een groepje gaat is het goedkoopst omdat je dan ook je eigen vliegtuig kan charteren. (hoe vet!). Toen ik ging kon je via Makers Air een vliegtuig charteren voor €500,- en er kunnen 6 personen in een vliegtuig.",
        subTitle8: "Miami",
        text8:
          "Je kunt een vakantie naar de Bahamas heel goed combineren met een citytrip naar Miami. Hieronder zie je de video van mijn reis naar Miami en de Bahamas.",
      },
    ],
  },
  {
    id: "usa",
    location: "Usa",
    continent: "USA",
    title: "USA",
    text: "Intro about USA",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Etats-Unis.png",
    alt: "Flag Amerika",
    routes: [],
    stories: [
      {
        title: "Streetart in Wynwood",
        location: "Miami",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/05/41/20190602-125404-largejpg.jpg?w=1200&h=-1&s=1",
        alt: "streetart miami",
        onClick: GOTOPAGE.MiamiStory,
        category: "card",
        homepage: false,
      },
    ],
  },
  {
    id: "philippines",
    location: "Filipijnen",
    continent: "Azie",
    title: "Filipijnen",
    text: "Intro about Philippines",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Philippines.png",
    alt: "Flag filipijnen",
    routes: [],
    stories: [
      {
        title: "De mooiste eilandentours",
        location: "Philipijnen",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://lp-cms-production.imgix.net/2021-02/GettyRF_985553596.jpg",
        alt: "eiland philipijnen",
        onClick: GOTOPAGE.PhilippinesStory,
        category: "card",
        homepage: false,
      },
    ],
  },
  {
    id: "southafrica",
    location: "Zuid Afrika",
    continent: "Afrika",
    title: "Zuid Afrika",
    text: "Intro about ZA",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Afrique_du_Sud.png",
    alt: "Flag Zuid Afrika",
    routes: [],
    stories: [
      {
        title: "Wijntour in Fransschoek",
        location: "ZuidAfrika",
        text: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6f/d9/3d.jpg",
        alt: "wijntram franschhoek",
        onClick: GOTOPAGE.SouthAfricaStory,
        category: "card",
        homepage: true,
      },
    ],
  },
  {
    id: "spain",
    location: "Spanje",
    continent: "Europa",
    title: "Spanje",
    text: "Intro about Spain",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Europe/Espagne.png",
    alt: "Flag Spanje",
    routes: [
      {
        title: "Een paradijs in Europa, Formentera",
        category: "card",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wandelingen.info/wp-content/uploads/2016/12/Formentera-trucadors-plankierpad.jpg",
        alt: "strand formentera",
        onClick: GOTOPAGE.SpainRoute,
        homepage: true,
      },
      {
        title: "Een paradijs in Europa, Formentera",
        category: "route",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wandelingen.info/wp-content/uploads/2016/12/Formentera-trucadors-plankierpad.jpg",
        alt: "strand formentera",
      },
    ],
    stories: [
      {
        title: "De andere kant van party-eiland Ibiza",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.travelvalley.nl/uploads/images/pleintje-ibiza-stad.jpeg",
        alt: "Dalt Vila",
        onClick: GOTOPAGE.IbizaStory,
        category: "card",
        homepage: true,
      },
    ],
  },
  {
    id: "srilanka",
    location: "Sri Lanka",
    continent: "Azie",
    title: "Sri Lanka",
    text: "Intro about sri",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Sri_Lanka.png",
    alt: "Flag Sri Lanka",
    routes: [],
    stories: [
      {
        title: "Sri Lanka in drie of vier weken",
        location: "Sri Lanka",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://d2csxpduxe849s.cloudfront.net/media/D9C47D27-CF22-4106-BDD62A07BB6C91E1/1AF92955-0C7D-4CAC-81182775001FB1B2/webimage-55FF1AEA-BE78-4EEA-BD5B453633ED3633.png",
        alt: "trein",
        onClick: GOTOPAGE.SrilankaStory,
        category: "card",
        homepage: true,
      },
    ],
  },
  {
    location: "Zanzibar",
    continent: "Afrika",
    title: "Zanzibar",
    text: "Intro about Zanzi",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Tanzanie.png",
    alt: "Flag Tanzania",
    routes: [],
    stories: [],
  },
  {
    id: "cambodia",
    location: "Cambodja",
    continent: "Azie",
    title: "Cambodja",
    text: "Intro about Cambodja",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Tanzanie.png",
    alt: "Flag Cambodja",
    routes: [],
    stories: [],
  },
  {
    id: "china",
    location: "China",
    continent: "Azie",
    title: "China",
    text: "Intro about China",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Chine.png",
    alt: "Flag China",
    routes: [],
    stories: [],
  },
  {
    id: "indonesia",
    location: "Indonesie",
    continent: "Azie",
    title: "Indonesië",
    text: "Intro about Indonesië",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Indonesie.png",
    alt: "Flag Indonesië",
    routes: [],
    stories: [],
  },
  {
    id: "laos",
    location: "Laos",
    continent: "Azie",
    title: "Laos",
    text: "Intro about Laos",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Laos.png",
    alt: "Flag Laos",
    routes: [],
    stories: [],
  },
  {
    id: "malaysia",
    location: "Maleisie",
    continent: "Azie",
    title: "Maleisië",
    text: "Intro about Maleisië",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Malaisie.png",
    alt: "Flag Maleisië",
    routes: [],
    stories: [],
  },
  {
    id: "thailand",
    location: "Thailand",
    continent: "Azie",
    title: "Thailand",
    text: "Intro about Thailand",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Thailand.png",
    alt: "Flag Thailand",
    routes: [],
    stories: [],
  },
  {
    id: "vietnam",
    location: "Vietnam",
    continent: "Azie",
    title: "Vietnam",
    text: "Intro about Vietnam",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Vietnam.png",
    alt: "Flag Vietnam",
    routes: [],
    stories: [],
  },
  {
    id: "cuba",
    location: "Cuba",
    continent: "Midden Amerika",
    title: "Cuba",
    text: "Intro about Cuba",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Cuba.png",
    alt: "Flag cuba",
    routes: [],
    stories: [],
  },
  {
    id: "curacao",
    location: "Curacao",
    continent: "Midden Amerika",
    title: "Curacao",
    text: "Intro about curacao",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/266px-Flag_of_Cura%C3%A7ao.svg.png",
    alt: "Flag curacao",
    routes: [],
    stories: [],
  },
  {
    id: "brasil",
    location: "Brazilie",
    continent: "Zuid Amerika",
    title: "Brazilië",
    text: "Intro about Brazilie",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Bresil.png",
    alt: "Flag Brazilië",
    routes: [],
    stories: [],
  },
  {
    id: "australia",
    location: "Australie",
    continent: "Oceanie",
    title: "Australië",
    text: "Intro about Australië",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Australie.png",
    alt: "Flag Australië",
    routes: [],
    stories: [],
  },
];

<ul>
  <li>Londen</li>
  <li>Zuid Afrika</li>
  <li>Noorwegen</li>
  <li>Polen</li>
</ul>;
