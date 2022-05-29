import { namibiaImages } from "../../Images/Namibia";

export const GOTOPAGE = {
  MexicoRoute: "/route/mexico",
  // MexicoStory: "/story/mexico",
  IcelandRoute: "/route/iceland",
  IcelandStory: "/story/iceland",
  BahamasRoute: "/route/bahamas",
  BahamasStory: "/story/bahamas",
  JapanRoute: "/route/japan",
  JapanStory: "/story/japan",
  PhilippinesRoute: "/route/philippines",
  PhilippinesStory: "/story/philippines",
  NamibiaRoute: "/route/namibia",
  // NamibiaStory: "/story/namibia",
  SouthAfricaRoute: "/route/southafrica",
  SouthAfricaStory: "/story/southafrica",
  MiamiRoute: "/route/miami",
  MiamiStory: "/story/miami",
  SpainRoute: "/route/spain",
  SpainStory: "/story/spain",
  SrilankaRoute: "/route/srilanka",
  SrilankaStory: "/story/srilanka",
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
    stories: [
      {
        category: "card",
        title: "Mijn route door Yucatan",
        location: "Mexico",
        text: "Benieuwd naar mijn route door Mexico, lees er hier meer over",
        image:
          "https://media.istockphoto.com/photos/ik-kil-yucatan-mexico-picture-id471176226?s=612x612",
        alt: "cenote",
        onClick: GOTOPAGE.MexicoRoute,
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
  },
  {
    id: "namibia",
    location: "Namibie",
    continent: "Afrika",
    title: "Namibië",
    text: "Intro about Namibië",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Namibie.png",
    alt: "Flag Namibië",
    stories: [
      {
        category: "card",
        title: "Wijn, wildlife en woestijn",
        location: "Namibie",
        text: "In een 4x4 zijn wij van Kaapstad naar Windhoek gereden. Wij bleven één week in Zuid Afrika en twee in Namibië. In twee weken kun je alle highlights van Namibië zien maar je brengt wel veel tijd in de auto door. Als je wat meer tijd hebt raden we aan om 3 weken voor deze route door Namibië te nemen.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/16/fa/05/2b/sossusvlei.jpg",
        alt: "Sossusvlei",
        onClick: GOTOPAGE.NamibiaRoute,
      },
      {
        category: "route",
        title: "Wijn, wildlife en woestijn",
        location: "Namibie",
        period: "Eind september t/m begin oktober",
        introtext:
          "In een 4x4 met een tent op het dak, zijn wij van Kaapstad naar Windhoek gereden. Wij bleven één week in Zuid Afrika en twee in Namibië. In twee weken kun je alle highlights van Namibië zien maar je brengt wel veel tijd in de auto door. Als je wat meer tijd hebt raden we aan om 3 weken voor deze route door Namibië te nemen. Hieronder kun je lezen hoe wij in twee weken van Noordoewer naar Windhoek zijn gereden. (Klik op de text bij 'slapen' om naar de site van de campsites te gaan)",
        text1:
          "Als je net als wij via Zuid Afrika naar Namibië reist zorg dan dat je op tijd bij de grensovergang bent. Wij waren rond 15:00 uur bij de grens maar alles duurde zo lang dat we pas 18:15 uur Namibië in konden rijden. Stipt om 18:00 uur ging het licht uit dus dat betekent dat je door het pikkedonker (want geen straatverlichting) jouw slaapplek moet zien te vinden.",
        slapen1:
          "Wij sliepen in Noordoewer, dit is de plaats waar je direct na de grensovergang aankomt. Na een kwartiertje rijden kom je dan aan bij Amanzi Trails River Adventures. Dit is een mooie camping aan een rivier waar ook genoeg activiteiten te doen zijn.",
        link1: "https://www.amanzitrails.co.za/amanzi-river-camp/",
        tip1: "Direct na de grensovergang zit een groot tankstation. Zorg dat je hier je auto direct vol gooit en geld pint. In (zuid) Namibië zijn tankstations en pinautomaten namelijk schaars en je wil niet (net zoals wij) zonder cash en benzine komen te staan.",
        text2:
          "Op deze dag reden we van Noordoewer naar Ai-Ais (richting Hobas). Voor ons was dit echt een pech dag want onze benzine raakte op en we hebben het op het nippertje gehaald tot Hobas. Hier zou een tankstation zijn volgens Google maps maar die bleek leeg te zijn. We hebben toen in Hobas bij onze campsite gewacht tot iemand 80km heen en weer had gereden naar het eerstvolgende tankstation.",
        todo2:
          "Je denkt vaak dat plaatsen op de kaart een stad of dorp zijn, maar in Namibië is een naam op de kaart soms alleen een campsite. In Ai-Ais kun je naar de hotspring maar dit stelt helemaal niks voor. Het is letterlijk een gat in de grond met water wat te heet is om aan te raken. De camping heeft wel een spa wat water gebruikt uit de hotspring.",
        slapen2:
          "Wij sliepen in Hobas op de Ai-Ais Hotsprings Spa Campsite. Dit is een hele mooie campsite met zwembad. Goede alternatieven zijn Hobas Campsite en Canyon Roadhouse (Hier hebben ze een pinautomaat en tankstation! Pinautomaat was wel leeg toen wij daar aankwamen)",
        link2: "http://www.nwrnamibia.com/ai-ais.htm",
        text3:
          "In de ochtend zijn we naar Fish River Canyon gereden. Dit was 50 minuten rijden vanuit Hobas. Daarna zijn we nog 3,5 uur doorgereden naar Klein-aus-vista",
        todo3:
          "Wij waren alleen een ochtend bij Fish River Canyon. Omdat je hier ook verschillende hikes kunt doen kun je je hier prima een paar dagen vermaken. De Fish River Canyon is namelijk, op de Grand Canyon in de VS na, de langste canyon ter wereld.",
        slapen3:
          "Klein Aus Vista Desert Horse Camp is de camping waar wij verbleven. Dit is een mooie camping vanuit waar je ook mooie hikes kunt doen. Ook is het een goede uitvalsbasis om de wilde woestijn paarden te bekijken, tenminste als het niet zo droog is als toen wij er waren. Er is wel een waterbron waar de paarden vaak te vinden zijn, maar toen wij er waren (Oktober) was de omgeving te droog voor de paarden.",
        link3:
          "https://www.klein-aus-vista.com/accommodation/desert-horse-campsite/",
        tip3: "Vanaf de camping is er één rechte weg richting Kolmanskop. Aan het begin van deze weg is er aan de rechterkant een pad richting een waterhole. Deze staat ontzettend slecht aangegeven dus je moet goed opletten. Wij zagen geen paarden bij deze waterhole maar er zijn meestal wel wat struisvogels, herten en andere beestjes te vinden. Het schijnt dat je heel vroeg 's ochtends of juist laat in de middag de meeste kans hebt om de paarden te zien.",
        text4:
          "Vroeger was Kolmanskop één van de rijkste dorpen van Afrika vanwege de diamanthandel. Toen er geen diamant meer te vinden was hebben alle bewoners het dorp verlaten. Sommigen hebben letterlijk alleen hun kleren ingepakt en zijn weggegaan. Je kunt nu ronddwalen in dit volledig verlaten dorp en ook de huizen van binnen bekijken. Omdat er in de omgeving vrijwel niets anders is dan zand, zijn de huizen in de loop der jaren steeds meer onder het zand komen te liggen. Dit geeft een surreel beeld en is fantastisch om te zien. Wij kwam al vroeg aan in Kolmanskop en daarom was er verder ook helemaal niemand. Dit maakte het extra speciaal. En omdat we nog 5 uur moesten rijden naar Sesriem was het ook nodig om vroeg te gaan.",
        slapen4:
          "Omdat we de volgende ochtend meteen met zonsopkomst Sossusvlei wilden bezoeken, hebben we gekozen voor een camping naast de ingang; Sossus Oasis Campsite. Dit was een mooie campsite met zwembad en je had je eigen toilet/badkamer/keuken gebouwtje. Daarnaast hebben ze ook een eigen tankstation, wat super handig is!",
        link4: "https://www.sossus-oasis.com/",
        tip4: "Bij een benzinestation kun je je bandenspanning laten verlagen (naar 1.6). Dit wordt overal aangeraden maar is niet nodig als je alleen op de normale weg rijdt. Aan het einde van de normale weg heb je de keuze om voor weinig geld met een jeep mee te rijden die je naar de verschillende duinen rijdt, of om zelf te gaan rijden. Als je zelf gaat rijden heb je inderdaad de lage bandenspanning nodig maar dit raden wij je niet aan. We zagen een aantal mensen die vast waren komen te zitten in het zand. Dit betekent dan ook letterlijk dat je daar vast zit want de auto kan er pas de volgende ochtend uit gesleept worden omdat het zand vanwege de warmte te zacht wordt in de middag. Ik zou het risico niet nemen want het is super makkelijk (en leuk) om één van de jeepjes te pakken die constant heen en weer rijden.",
        text5:
          "De dag van de Sossusvlei. Iets wat je absoluut niet mag overslaan als je naar Namibië gaat. Voor zonsopkomst rijdt je naar de poort, waar je naar binnen gelaten wordt zodra de eerste zonnestraal tevoorschijn komt. Je rijdt over een lange rechte weg met aan beide kanten prachtige rode zandduinen, in het oranje licht van de opkomende zon. Je kunt ervoor kiezen om zonsopkomst te bekijken bij Dune 45. Dit is een duin die je ziet na 45km op deze lange weg, vandaar ook de naam. Wij hebben ervoor gekozen om helemaal door te rijden tot het einde van de weg. Onze auto lieten we hier achter op de parkeerplaats en met een jeep gingen we verder naar Dodevlei. De zonsopkomst hier was magisch. Je kunt hier de verschillende duinen op klimmen of gewoon rondlopen over de uitgedroogde zoutpan van de Dodevlei. De oranje duinen met daarvoor het witte zout en de grijze dode bomen zijn super fotogeniek. Met de jeep zijn we nog naar Big Mamma en Hidden Vlei geweest.",
        slapen5:
          "Tussen Sesriem en Swakopmund in ligt camping: Bushman's Desert Camp. Het ligt een beetje verscholen. Zorg dat je niet net als wij vol gas gaat over het zandweggetje. De weg houdt namelijk ineens op en dan rij je een soort ravijn in waar de camping ligt. Wij waren bijna bovenop de camping gevlogen met onze auto. Wat leuk is, is dat ze ook een eigen waterhole hebben waar je 's avonds dieren kunt spotten.",
        link5: "https://bushmans-desert-camp-self-catering.business.site/",
        tip5: "Wij dachten dat we een hele dag zouden spenderen in de Sossusvlei maar na een halve dag hadden we het wel gezien. Voornamelijk omdat het op een gegeven moment echt te heet wordt om door het zand heen te banjeren. Neem dan ook voldoende water mee. En mocht je wel in de middag nog rond willen lopen door de duinen, doe dan dichte schoenen aan en ga niet net als wij op slippers. Als je voor de echte hitte weg gaat kun je trouwens prima op slippers lopen.",

        text6:
          "Vandaag staat weer een autorit van ruim 4 uur op het programma. We zijn vanuit onze campging doorgereden naar Walvisbaai en Swakopmund. Hier hebben we rondgelopen en geluncht. Omdat het toen wij er waren erg koud was (en wij hier neit op gekleed waren) zijn we uiteindelijk doorgereden naar Cape Cross Bay om hier te overnachten. Naast deze campsite zit een rescue center voor zeehondjes dus je ziet hier op het strand aardig wat van deze beestjes.",
        slapen6:
          "Een van de laatste campsites voordat je aankomt bij de Skeleton Coast is Cape Cross Campsite. Hier hebben wij geslapen omdat we de volgende dag graag via de Skeleton Coast wilden rijden.",
        link6: "https://www.capecross.org/Campsite.htm",
        text7:
          "Het schijnt aan de kust en dan voornamelijk het stuk bij de Skeleton Coast, elke morgen grijs en bewolkt te zijn. Dit past ook super goed bij het spookachtige sfeertje wat er hier hangt. Het heet natuurlijk niet voor niks 'Skeleton Coast'. Nadat je door een hek met allemaal doodshoofden bent gereden, rij je officieel langs de Skeleton Coast. Langs deze route zijn een paar afslagen waar je shipwrecks kunt bekijken. Wij zijn ook bij de huab lagoon van de weg af gegaan om flamingo's te bekijken. Toen ik wilde uitstappen om van dichterbij een foto van de flamingo's te maken zag ik net op tijd het bord: 'Blijf in je auto! Er loopt hier een leeuw!'. De leeuw hebben we hier helaas niet gezien. We waren erg blij dat zodra we weer landinwaards reden, weg van de Skeleton Coast, de zon meteen weer begon te schijnen.",
        slapen7:
          "We sliepen op een plek waarvan we dachten dat het handig was voor de route richting Etosha, maar het bleek ook nog één van de mooiste campsite te zijn van onze reis; Madisa Camp. Er is een zwembad en je hebt een privé badkamer / toilet / keuken in de buitenlucht. Ook is er een grote rots waar je op kan klimmen voor de zonsopgang. Als je mazzel hebt kun je vanaf hier ook olifanten spotten.",
        link7: "http://www.madisacamp.com/",
        text8:
          "Vergis je niet in de afstanden in Namibië. Ook vandaag zaten we weer 5 uur in de auto. Toch is het geen straf om hier te rijden. Oke, de wegen zijn niet altijd een pretje maar het landschap is prachtig! Hoe dichter je bij Etosha in de buurt komt, hoe meer wilde beesten je kunt spotten. Maar soms zie je ook urenlang alleen maar zandvlaktes. Als je een tegenligger tegenkomt dan zwaai je naar elkaar want dit gebeurd namelijk niet zo vaak.",
        slapen8:
          "Om op tijd in Etosha te kunnen zijn en daar drie volle dagen te kunnen besteden slapen we deze nacht in Etosha Safari Camp, net voor de ingang van Etosha. Dit was weer een prachtige campsite, van alle gemakken voorzien. Deze camping vonden wij extra bijzonder door wat er 's nachts gebeurde. Mijn vriend moest naar de wc en klom de tent uit. Ineens hoorde we allemaal hoeven wegrennen. Ik ritste de tent open en onze auto was omringt door zebra's en verschillende soorten hertjes. Even later zagen we ook een giraf langslopen. Zo bizar dat deze gewoon om je tent heen lopen. Wel een fijn idee dat je dan hoog bovenop de auto slaapt.",
        link8:
          "https://gondwana-collection.com/lodgedetail?LodgeName=ETOSHA%20SAFARI%20CAMP",
        text9:
          "Ook vandaag staan we weer voor zonsopkomst op, om met zonsopgang het park binnen te kunnen rijden. Het is ook mogelijk om georganiseerde tours te doen met een gids, maar wij vonden het veel leuker om zelf te rijden. Ook is het niet heel moeilijk om de beesten te spotten. Alleen de katachtigen zijn soms wat lastiger. Maar vaak als er een grote groep auto's ergens stilstaat dan weet je genoeg. Je rijdt eigenlijk van de ene waterhole naar de andere. Bij deze waterholes is het, zeker in de droge periode waarin wij er waren, super druk met allerlei beesten.",
        slapen9:
          "De eerste nacht in Etosha sliepen we in Okaukuejo. Dit is een vrij simpele camping maar de ligging is perfect voor de eerste nacht. Ook is er een grote waterhole waar je super veel dieren kunt spotten.",
        link9: "https://www.etoshanationalpark.org/accommodation/okaukuejo",
        tip9: "Je mag alleen tussen zonsopkomst en zonsondergang in het park rijden en hier zijn ze heel streng in. Als je met zonsondergang de campsite oprijdt, ga dan direkt naar de waterhole. Dit is het moment waarop veel dieren naar de waterhole komen omdat het minder heet is. En al deze dieren bij elkaar met de ondergaande zon op de achtergrond is prachtig om te zien!",
        text10:
          "Ook vandaag hebben we weer een hele dag rondgereden in Etosha. Het park is heel groot dus je moet er ook wel minstens twee dagen voor uittrekken. En het verveelt nooit. Als je even denkt dat je geen wildlife meer tegen gaat komen dan ligt er ineens een groep leeuwen op de weg. Het is niet te voorspellen en elke dag is anders. Maar dat je bijzondere dingen gaat zien, dat staat vast.",
        slapen10:
          "Tamboti Campsite hadden we gekozen omdat het helemaal aan de andere kant van Etosha ligt ten opzichte van Okaukuejo. Alleen dachten we dat de camping ook in Etosha lag maar dit bleek niet het geval. Dit maakt echter niet heel veel uit want de camping ligt letterlijk meteen na de uitgang van Etosha. De campsite is super mooi. Eigenlijk is het bijna zonde dat we hier alleen tijd hebben doorgebracht tussen zonsondergang en voor zonsopkomst.",
        link10: "https://onguma.com/tamboti-luxury-campsite/",
        text11:
          "Ondanks dat het op sommige websites wel vertelt wordt kun je de big five niet zien in Etosha. Dit komt omdat de buffel niet in Etosha leeft. (Deze kun je wel b.v. bij Waterbergplateau tegenkomen.) Maar ook zonder de buffel was Etosha een van de mooiste ervaringen uit mijn leven. Dit zijn een aantal van de beesten die wij gezien hebben tijdens onze ritjes door het park: olifanten, zebra's, giraffen, neushoorns, leeuwen, hyena's, jackhalzen, luipaarden en ontelbare vogels en verschillende soorten herten.",
        slapen11:
          "We sliepen in Sachsenheim Guest Farm. Dit is een campsite vlakbij Tambobi. We wilden onze laatste dag in Etosha nog wel goed kunnen benutten dus we wilden niet te ver rijden. Het leuke aan deze campsite is dat het ook een soort boerderij is. Dan slaap je ineens tussen de koeien ipv tussen ze zebra's.",
        link11: "https://sachsenheim-guest-farm.business.site/",
        text12:
          "Vandaag rijden we naar Waterberg plateau (4 uur). Ook deze route is prachtig, en wat opvalt is dat dit deel van Namibië een stuk groener is. Wij hebben maar één dag voor Waterberg maar anders zou dit een mooie omgeving zijn voor een langere hike.",
        todo12:
          "Wij hebben in de ochtend een trekking over de plateau gedaan. Dit is wel een must-do als je naar de waterbergplateau gaat. Nadat je 200m omhoog bent geklommen heb je prachtig uitzicht over het hele gebied. Daarna wandel je over de plateau waar je ook neushoorns tegen kunt komen. Bizar feitje van onze gids: Er leefden geen grote dieren op de pleteau. Alle neushoorns, giraffen etc zijn naar boven gehesen. Ze kunnen ook niet meer zelfstandig naar bendeden omdat het plateau een te stijle berg is. Dit hebben ze gedaan om de bedreigde beesten (zwarte neushoorn) te beschermen tegen stropers.",
        slapen12:
          "We slapen op Waterberg Plateau Campsite. Deze campsite ligt in het nationaal park.",
        link12:
          "https://www.waterberg-wilderness.com/waterberg-plateau-campsite.html",
        text13:
          "Onze laatste bestemming is Windhoek, de hoofdstad van Namibië. Het is weer eens wat anders om weer in een grote stad te zijn, na zo lang weinig mensen te zijn tegengekomen. Er is van alles te doen in Windhoek en er is voor het eerst keuze uit restaurants. Windhoek is een stad waar je prima één of twee dagen kunt verblijven omdat je reis hier vaak begint of eindigd. Maar je komt naar namibië voor de natuur en daar is in Windhoek vrijwel niets van te zien.",
        slapen13:
          "Omdat we de volgende dag terug naar Nederland vliegen en omdat we in de ochtend eerst nog onze 4x4 moeten inleveren slapen we op een campsite net buiten Windhoek, in de buurt van de luchthaven: Ondekaremba. Dit is een mooie campsite waar je prima langere tijd kunt verblijven als je wat meer dagen in Windhoek wilt blijven.",
        link13: "https://www.ondekaremba.com/",
        text14:
          "Helaas is dit alweer de laatste dag van een fantastische reis. Namibië is geen land waar je zomaar even last-minute naar toe gaat. Het is belangijk om je van te voren wel even te verdiepen in het land. Maar wat een onvergetelijke reis is dit geworden. Bekijk onze tips voor Namnibië hieronder en dan kan ik iedereen aanraden om er een keer heen te gaan!",
        image1: namibiaImages[0],
        alt1: "Sossusvlei",
        image2: namibiaImages[1],
        alt2: "view from tent",
        image3: namibiaImages[2],
        alt3: "Bushman's Desert Camp",

        image4: namibiaImages[3],
        alt4: "Pool at Ai-Ais campsite",
        image5: namibiaImages[4],
        alt5: "Fish River Canyon",
        image6:
          "https://images.unsplash.com/photo-1579990555377-c0abf314dcdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
        alt6: "Fish River Canyon",

        image7: namibiaImages[5],
        alt7: "Kolmanskop",
        image8:
          "https://images.unsplash.com/photo-1516822671976-480ad5131e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt8: "Kolmanskop",
        image9:
          "https://images.unsplash.com/photo-1588453610237-cfe7f3abfc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
        alt9: "Kolmanskop",

        image10: namibiaImages[6],
        alt10: "Sossusvlei",
        image11:
          "https://media-cdn.tripadvisor.com/media/photo-s/16/fa/05/2b/sossusvlei.jpg",
        alt11: "Dodevlei",
        image12: namibiaImages[7],
        alt12: "Sossusvlei",

        image13:
          "https://images.unsplash.com/photo-1592161443742-5dc4651dce11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt13: "Swakopmund",
        image14:
          "https://live.staticflickr.com/2947/15256164828_61a58911aa_c.jpg",
        alt14: "Skeleton Coast",
        image15: namibiaImages[8],
        alt15: "Madisa Camp sunset",

        image16: namibiaImages[9],
        alt16: "giraf",
        image17: namibiaImages[10],
        alt17: "Sunset Okaukuejo",
        image18: namibiaImages[11],
        alt18: "Leeuwin etosha",

        image19: namibiaImages[12],
        alt19: "Leeuwen Etosha",
        image20: namibiaImages[13],
        alt20: "Neushoorn en Springbokken Etosha",
        image21: namibiaImages[14],
        alt21: "Waterhole Etosha",

        image22: namibiaImages[15],
        alt22: "Zebra's Etosha",
        image23: namibiaImages[16],
        alt23: "Jakhals",
        image24: namibiaImages[17],
        alt24: "Luipaard etosha",

        image25: namibiaImages[18],
        alt25: "Sossusvlei",
        image26: namibiaImages[19],
        alt26: "view from tent",
        image27: namibiaImages[20],
        alt27: "",

        image28: "",
        alt28: "",
        image29: "",
        alt29: "",
        image30: "",
        alt30: "",

        important1:
          "Zodra je een ATM ziet: pinnen! Pinautomaten zijn schaars en het komt ook vaak voor dat er geen geld meer in zit",
        important2:
          "Je kunt in Naminië ook overal met de Zuid Afrikaanse Rand betalen",
        important3: "Download Maps.me. Google Maps klopt vaak niet",
        important4:
          " Gooi je auto vol bij elk tankstation. In het noorden zijn er wat meer maar in het zuiden zijn er erg weinig tankstations en ze zijn vaak ook leeg",
        important5:
          "Temperaturen kunnen erg verschillen tussen dag en nacht en per lokatie. Neem daarom ook voldoende warme kleren mee",
        important6:
          "Koop een simkaart met internet als je het belangrijk vindt om online te zijn of af en toe iets wilt opzoeken. Wifi is er vaak niet, doet het niet of is betaald en doet het dan vaak alsnog niet",
        important7:
          "Neem genoeg eten mee voor op de braai. Restaurants zijn er niet altijd en supermarkten ook niet",
        important8:
          "Ben je vegetariër? Dan heb je pech. Vega kennen ze niet in Namibië. Het vlees is wel erg lekker en ook allemaal vers en lokaal",
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
    stories: [
      {
        category: "card",
        title: "van Hiroshima naar Tokyo en de Yaeyama islands",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        alt: "Mario Kart Tokio",
        onClick: GOTOPAGE.JapanRoute,
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
      {
        category: "card",
        title: "Mario Kart in Tokyo",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        alt: "Mario Kart Tokio",
        onClick: GOTOPAGE.JapanStory,
      },
      {
        category: "story",
        title: "Mario Kart in Tokyo",
        location: "Japan",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image:
          "https://images.dailyhive.com/20190430160748/Mario-Kart-in-Tokyo.-Shutterstock.jpg",
        alt: "Mario Kart Tokio",
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
    stories: [
      {
        category: "card",
        title: "Waterval paradijs",
        location: "Ijsland",
        text: "Als je van mooie watervallen houdt dan in IJsland echt 'the place to be'. Dit zijn de mooiste.",
        image:
          "https://www.askja.nl/media/thumbnails/web/670de8c78fce524e325ab7e5884345c0faeb4fee/cheng-yuan1.jpg",
        alt: "waterval ijsland",
        onClick: GOTOPAGE.IcelandStory,
      },
      {
        category: "route",
        title: "Waterval paradijs",
        location: "Ijsland",
        text: "Als je van mooie watervallen houdt dan in IJsland echt 'the place to be'. Dit zijn de mooiste.",
        image:
          "https://www.askja.nl/media/thumbnails/web/670de8c78fce524e325ab7e5884345c0faeb4fee/cheng-yuan1.jpg",
        alt: "waterval ijsland",
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
      },
      {
        category: "story",
        title: "Alles wat je moet weten over zwemmen met varkens",
        location: "Bahamas",
        period: "Februari 2017",
        introtext: "",
        image1:
          "https://media.tacdn.com/media/attractions-splice-spp-720x480/0a/9e/26/3e.jpg",
        alt1: "zwemmende varkens",
        image2:
          "https://www.sailcloudybay.com/wp-content/uploads/2020/01/IMG_4611.jpg",
        alt2: "nurse sharks",
        image3:
          "https://images.unsplash.com/photo-1533766837525-f6d19d32149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt3: "Pig Beach",
        video: "https://www.youtube.com/embed/sBlKHQUUM0k",
        videoTitle: "Miami, Bahamas",
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
    stories: [
      {
        category: "card",
        title: "Streetart in Wynwood",
        location: "Miami",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/05/41/20190602-125404-largejpg.jpg?w=1200&h=-1&s=1",
        alt: "streetart miami",
        onClick: GOTOPAGE.MiamiStory,
      },
      {
        category: "story",
        title: "Streetart in Wynwood",
        location: "Miami",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/05/41/20190602-125404-largejpg.jpg?w=1200&h=-1&s=1",
        alt: "streetart miami",
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
    stories: [
      {
        category: "card",
        title: "De mooiste eilandentours",
        location: "Philipijnen",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://lp-cms-production.imgix.net/2021-02/GettyRF_985553596.jpg",
        alt: "eiland philipijnen",
        onClick: GOTOPAGE.PhilippinesStory,
      },
      {
        category: "story",
        title: "De mooiste eilandentours",
        location: "Philipijnen",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://lp-cms-production.imgix.net/2021-02/GettyRF_985553596.jpg",
        alt: "eiland philipijnen",
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
    stories: [
      {
        category: "card",
        title: "Wijntour in Fransschoek",
        location: "ZuidAfrika",
        text: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6f/d9/3d.jpg",
        alt: "wijntram franschhoek",
        onClick: GOTOPAGE.SouthAfricaStory,
      },
      {
        category: "story",
        title: "Wijntour in Fransschoek",
        location: "ZuidAfrika",
        text: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6f/d9/3d.jpg",
        alt: "wijntram franschhoek",
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
    stories: [
      {
        category: "card",
        title: "Een paradijs in Europa, Formentera",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wandelingen.info/wp-content/uploads/2016/12/Formentera-trucadors-plankierpad.jpg",
        alt: "strand formentera",
        onClick: GOTOPAGE.SpainRoute,
      },
      {
        category: "story",
        title: "Een paradijs in Europa, Formentera",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wandelingen.info/wp-content/uploads/2016/12/Formentera-trucadors-plankierpad.jpg",
        alt: "strand formentera",
      },
      {
        category: "card",
        title: "De andere kant van party-eiland Ibiza",
        location: "Ibiza",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.travelvalley.nl/uploads/images/pleintje-ibiza-stad.jpeg",
        alt: "Dalt Vila",
        onClick: GOTOPAGE.SpainStory,
      },
      {
        category: "story",
        title: "De andere kant van party-eiland Ibiza",

        video: "https://www.youtube.com/embed/WxHuNd_KrCU",
        videoTitle: "Ibiza & Formentera",
        location: "Ibiza",
        text: "Ibiza, het eiland van de jetset en chique restaurants, waar alle mensen half naakt en met bloemen in hun haar rondlopen en waar je kan feesten tot je erbij neervalt. Dat was het beeld wat ik van Ibiza had voordat ik er zelf geweest was. Inmiddels weet ik dat Ibiza juist ook zeer geschikt is voor de liefhebber van rust, natuur en mooie stranden.",
        text1: "",
        subTitle2: "Beste locatie om te overnachten",
        text2:
          "Het kan handig zijn om van tevoren te bedenken wat jouw reden is om naar Ibiza toe te gaan. Hou jij van een feestje op zijn tijd en wil je in het weekend de party scene van Ibiza meemaken? Neem dan zeker een hotel in Ibiza stad. Je kan hier goed uitgaan, je hebt er mooie stranden en voor wat cultuur kan je terecht in het mooie Dalt Vila. Ook San Antonio is een plek voor mensen die vooral willen feesten en een goedkope en gehorige accomodatie zoeken. Ook al ga ik in Amsterdam regelmatig naar feestjes en festivals, mijn doel in Ibiza was juist om te relaxen en te genieten van de mooie omgeving. Dus wil je wat meer rust en mooie zandstranden, ga dan voor een plaats in het noorden van het eiland. Ik heb zelf gekozen voor een hotel in Es Canar.",
        subTitle3: "Vervoer",
        text3:
          "Natuurlijk kan je ervoor kiezen om een week bij je hotel te blijven en aan het strand te liggen. De stranden zijn er super mooi dus ik kan je geen ongelijk geven. Zelf wilde ik graag zoveel mogelijk van het eiland zien. Ik heb verschillende opties van vervoer overwogen. Een optie is om de bus te pakken. Nadeel is wel dat de verbindingen niet altijd even goed zijn en je dus niet makkelijk overal kan komen. Stiptheid is iets wat niet in het vocabulaire van de buschauffeurs voorkomt. Bovendien stoppen de bussen vaak dus doe je er een eeuwigheid over. Meer informatie over de bustijden en routes kun je vinden op Ibizabus.com. Een leuke manier om Ibiza ter verkennen is met de boot. Via de website van Santaeulalia fery kan je verschillende routes kiezen en je tickets vast online kopen. Ik heb deze ferry ook gebruikt om van Es Canar naar Formentera te gaan.",
        text4:
          "De boot is een leuke optie maar niet de snelste manier en je kan alleen naar de kustplaatsen reizen. Voor mij was de beste optie om het eiland te verkennen met de auto of scooter. Toen ik bij het verhuurbedrijf vroeg wat zij mij aanraden zeiden was het antwoord een scooter. Als je een auto huurt moet je vaak parkeergeld betalen (is trouwens niet heel duur) maar vooral in ibiza stad zijn parkeerplekken soms lastig te vinden. En je kan nergens echt hard rijden. Er zijn stukjes waar je 80 mag maar het meeste is 50km/ph. Daarom heb ik gekozen voor een scooter. In principe kan je op de scooter een groot deel van het eiland in 1 dag zien, maar als je ook af en toe ergens wat wil drinken of op het strand wil liggen kan je er beter twee of drie dagen de tijd voor nemen. Ik heb mijn tour opgedeeld in twee dagen. De eerste dag heb ik het noorden gedaan en de tweede dag Ibiza stad en het zuiden.",
        subTitle5: "Plaatsen om te bezoeken:",
        text5: "   ",
        subTitle6: "Cala Llonga",
        text6:
          "Het plaatsje Cala Llonga is centraal gelegen aan de oostkust. Vanaf hier ben je binnen tien minuten met de auto in Ibiza stad of als je richting het noorden rijdt in Santa Eularia. Cala Llonga heeft een zandstrand dat langzaam afloopt en omdat het in een baai ligt heb je weinig golven en wind. Het dorpje is niet heel bruisend maar het heeft een aantal winkels en restaurants.",
        image6:
          "https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/beach-images/69727/slideshow-1540806823_1.jpg",
        alt6: "Cala Llonga",
        subTitle7: "Es Canar",
        text7:
          "Dit is een klein badplaatsje met een zandstrand, leuke winkeltjes, restaurants en er zijn enkele uitgaansgelegenheden. Es Canar heeft niet het mooiste strand of de beste clubs maar er is wel voor ieder wat wils. Es Canar is ook de locatie van de grootste hippiemarkt van Ibiza 'Punta Arabi'. Ik sliep in 'Hotel Club Punta Arabi' en het voordeel hiervan is dat de hippiemarkt voor de deur is.",
        image7:
          "https://lh3.googleusercontent.com/ZqgikydpLvt5MUVt4NV8OIX5PRC0msWZb8FqBrsOFDoaiE0bD0dyBRssYauy_qVX-69GmcTFtOBDjq_azhhXZ7U=l80-w1500-e365",
        alt7: "Hippie market Es Canar",
        subTitle8: "Aguas Blancas",
        text8:
          "Ik ben zelf niet zo'n held in het vinden van de weg maar ik hoorde ook van andere mensen dat het even zoeken is naar het strand van Aguas Blancas. Maar daardoor is de beloning misschien wel groter als je het uiteindelijk gevonden hebt. Het goudkleurige zandstrandje ligt tussen de hoge rotsen. Het strand is te bereiken via een trap en daarom niet geschikt voor mensen die slecht ter been zijn. Het is officieel een naaktstrand maar je vindt er ook genoeg mensen die gewoon in badkleding lopen. Alles mag, niets hoeft.",
        image8:
          "https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/beach-images/69713/slideshow-1472063900.jpg",
        alt8: "Aguas Blancas",
        subTitle9: "Portinatx",
        text9:
          "Toen ik aan kwam rijden met mijn scooter zag ik van bovenaf al de prachtige baai liggen met super helder blauw water en mooie boten. Portinatx heeft veel hotels en appartementencomplexen en er is genoeg keuze wat bars en restaurants betreft. Je kan er goed snorkelen en het strand loop heel langzaam af.",
        image9:
          "https://vakantiespanje.nl/wp-content/uploads/2013/10/portinatx-image.jpg",
        alt9: "Portinatx",
        subTitle10: "Benirras",
        text10:
          "Bij Benirrás kreeg ik direct het hippie gevoel. Er hangt een goede sfeer en in het hoogseizoen is er een klein hippiemarktje. Het is een wit zand-, kiezelstrand en glashelder water. Een ideaal strandje om te zwemmen en te snorkelen. Aan deze kant van het eiland kan je genieten van een prachtige zonsondergang. Overdag is het hier meestal vrij rustig maar als je op zondag tegen het eind van de middag naar Benirrás gaat, dan wordt er een trommelconcert gegeven. Hier komen veel mensen op af en het brengt je meteen in hippie sferen.",
        image10:
          "https://i.pinimg.com/originals/26/b9/cb/26b9cbcd713a7c27a605e79693b73f25.jpg",
        alt10: "Trommelconcert Benirras",
        subTitle11: "Dalt Vila",
        text11:
          "Dit vond ik persoonlijk het leukste stukje van Ibiza Stad en het is behoorlijk Instagram-proof. Dalt Vila is omringt door enorme muren en is het hoogste punt van de stad. Het is heerlijk om tussen alle smalle straatjes en gezellige pleintjes te lopen. Vanuit het hoogste punt heb je een prachtig uitzicht over de haven van Ibiza.",
        image11:
          "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ibiza_town%2C_Dalt_Vila_-_panoramio.jpg",
        alt11: "Dalt Vila",
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
    stories: [
      {
        category: "card",
        title: "Sri Lanka in drie of vier weken",
        location: "Sri Lanka",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://d2csxpduxe849s.cloudfront.net/media/D9C47D27-CF22-4106-BDD62A07BB6C91E1/1AF92955-0C7D-4CAC-81182775001FB1B2/webimage-55FF1AEA-BE78-4EEA-BD5B453633ED3633.png",
        alt: "trein",
        onClick: GOTOPAGE.SrilankaStory,
      },
      {
        category: "story",
        title: "Sri Lanka in drie of vier weken",
        location: "Sri Lanka",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://d2csxpduxe849s.cloudfront.net/media/D9C47D27-CF22-4106-BDD62A07BB6C91E1/1AF92955-0C7D-4CAC-81182775001FB1B2/webimage-55FF1AEA-BE78-4EEA-BD5B453633ED3633.png",
        alt: "trein",
      },
    ],
  },
  // {
  //   location: "Zanzibar",
  //   continent: "Afrika",
  //   title: "Zanzibar",
  //   text: "Intro about Zanzi",
  //   image:
  //     "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Tanzanie.png",
  //   alt: "Flag Tanzania",
  //   stories: [],
  // },
  // {
  //   id: "cambodia",
  //   location: "Cambodja",
  //   continent: "Azie",
  //   title: "Cambodja",
  //   text: "Intro about Cambodja",
  //   image:
  //     "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Tanzanie.png",
  //   alt: "Flag Cambodja",
  //   stories: [],
  // },
  // {
  //   id: "china",
  //   location: "China",
  //   continent: "Azie",
  //   title: "China",
  //   text: "Intro about China",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Chine.png",
  //   alt: "Flag China",
  //   stories: [],
  // },
  // {
  //   id: "indonesia",
  //   location: "Indonesie",
  //   continent: "Azie",
  //   title: "Indonesië",
  //   text: "Intro about Indonesië",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Indonesie.png",
  //   alt: "Flag Indonesië",
  //   stories: [],
  // },
  // {
  //   id: "laos",
  //   location: "Laos",
  //   continent: "Azie",
  //   title: "Laos",
  //   text: "Intro about Laos",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Laos.png",
  //   alt: "Flag Laos",
  //   stories: [],
  // },
  // {
  //   id: "malaysia",
  //   location: "Maleisie",
  //   continent: "Azie",
  //   title: "Maleisië",
  //   text: "Intro about Maleisië",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Malaisie.png",
  //   alt: "Flag Maleisië",
  //   stories: [],
  // },
  // {
  //   id: "thailand",
  //   location: "Thailand",
  //   continent: "Azie",
  //   title: "Thailand",
  //   text: "Intro about Thailand",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Thailand.png",
  //   alt: "Flag Thailand",
  //   stories: [],
  // },
  // {
  //   id: "vietnam",
  //   location: "Vietnam",
  //   continent: "Azie",
  //   title: "Vietnam",
  //   text: "Intro about Vietnam",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Vietnam.png",
  //   alt: "Flag Vietnam",
  //   stories: [],
  // },
  // {
  //   id: "cuba",
  //   location: "Cuba",
  //   continent: "Midden Amerika",
  //   title: "Cuba",
  //   text: "Intro about Cuba",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Cuba.png",
  //   alt: "Flag cuba",
  //   stories: [],
  // },
  // {
  //   id: "curacao",
  //   location: "Curacao",
  //   continent: "Midden Amerika",
  //   title: "Curacao",
  //   text: "Intro about curacao",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Cura%C3%A7ao.svg/266px-Flag_of_Cura%C3%A7ao.svg.png",
  //   alt: "Flag curacao",
  //   stories: [],
  // },
  // {
  //   id: "brasil",
  //   location: "Brazilie",
  //   continent: "Zuid Amerika",
  //   title: "Brazilië",
  //   text: "Intro about Brazilie",
  //   image: "https://www.sport-histoire.fr/Sources/Drapeaux/Amerique/Bresil.png",
  //   alt: "Flag Brazilië",
  //   stories: [],
  // },
  // {
  //   id: "australia",
  //   location: "Australie",
  //   continent: "Oceanie",
  //   title: "Australië",
  //   text: "Intro about Australië",
  //   image:
  //     "https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Australie.png",
  //   alt: "Flag Australië",
  //   stories: [],
  // },
];

/* <ul>
  <li>Londen</li>
  <li>Zuid Afrika</li>
  <li>Noorwegen</li>
  <li>Polen</li>
</ul>; */
