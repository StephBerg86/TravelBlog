import { namibiaImages } from "../Images/Namibia";
import { mexicoImages } from "../Images/Mexico";

export const GOTOPAGE = {
  MexicoRoute: "/route/mexico",
  IcelandRoute: "/route/iceland",
  IcelandStory: "/story/iceland",
  BahamasRoute: "/route/bahamas",
  BahamasStory: "/story/bahamas",
  JapanRoute: "/route/japan",
  JapanStory: "/story/japan",
  PhilippinesRoute: "/route/philippines",
  PhilippinesStory: "/story/philippines",
  NamibiaRoute: "/route/namibia",
  SouthAfricaRoute: "/route/southafrica",
  SouthAfricaStory: "/story/southafrica",
  MiamiRoute: "/route/miami",
  MiamiStory: "/story/miami",
  SpainStoryIbiza: "/story/spain/ibiza",
  SpainStoryFormentera: "/story/spain/formentera",
  SrilankaRoute: "/route/srilanka",
  SrilankaStory: "/story/srilanka",
  ZanzibarStory: "/story/zanzibar",
  CambodjaRoute: "/route/cambodja",
  ChinaStory: "/route/china",
  IndonesieRoute: "/route/indonesie",
  LaosRoute: "/route/laos",
  MalaysiaRoute: "/route/maleisie",
  ThailandRoute: "/route/thailand",
  VietnamRoute: "/route/vietnam",
  AustralieRoute: "/route/australie",
  IerlandStory: "/story/ierland",
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
        id: 1,
        title: "Mijn route door Yucatan",
        location: "Mexico",
        period: "december 2019 - januari 2020",
        introtext:
          "Mijn reis naar Mexico was anders dan al mijn voorgaande reizen. Deze reis heb ik samen met een vriendin gemaakt en we vonden dat we onszelf wel een keer goed mochten trakteren. Daarom hebben we net wat luxere hotels en wat duurdere restaurants uitgekozen dan ik normaal (in mn eentje) zou doen. Dat maakte deze reis extra speciaal, maar ook als je weinig budget hebt is deze route door Yucatan echt een aanrader!",
        dagTitel1: "Cancun",
        text1:
          "We begonnen onze reis in Cancun omdat de meeste vluchten naar Mexico hier nou eenmaal op aanvliegen. Dit was ook echt de enige reden. Wij vonden Cancun niet de moeite waard om lang te blijven dus na één nachtje hebben we dan ook de bus en de ferry gepakt om door te reizen naar Isla Holbox.",
        slapen1:
          "We sliepen in Hotel Mezcal. Toen ik dat net ging opzoeken bleek dat het hotel tegenwoordig Nomads Boutique Hotel & Hostel heet. Dit was en leuk hotelletje, vlak bij het busstation waar we de bus naar Isla Holbox konden nemen.",
        link1: "",
        dagTitel2: "Isla Holbox",
        text2:
          "Isla Holbox is een klein (toeristisch) paradijsje. Het eiland zit vol met leuke restaurants, bars en hotels. Daarnaast zie je overal streetart en hangt er een hele fijne sfeer. Als je ook van leuke eettentjes en een gezellige eilandsfeer houdt dan is Isla Holbox perfect voor jou. Je kan je er dan zeker een dag of drie goed vermaken. Wat ik wel een kleine afknapper vond was dat het strand bezaait lag met stinkend zeewier. Het schijn dat het in sommige maanden erger is dan in andere, maar dit is wel iets om rekening mee te houden als je je verheugd op een parelwit strand.",
        todo2:
          "Eigenlijk is dit iets wat je naar mijn mening juist niet moet doen; de 3 islands tour. Je gaat eerst naar bird island waar een heleboel, niet bijzondere, stinkende vogels bij elkaar op een klein eilandje zitten. Daarna ga je naar een cenote wat meer op een soort modderpoel lijkt met 100 andere toeristen. En als laatste ga je naar Isla Paraiso. Oke, ik geef toe, dit was best een leuk onderdeel van de tour. Onderweg naar dit eiland zagen we een groep dolfijnen en bij Isla Paraiso zelf zijn veel flamingo's te vinden. Het eiland zelf is een soort zandbank waar je wat rond kunt lopen. Als je tijd over hebt kun je je dus prima een dag vermaken met deze tour, maar het is niet het mooiste wat je gaat zien in Mexico. Je kan je hier prima een dag mee vermaken, en wij hebben dolfijnen gezien wat heel leuk was, maar verder is het niet bijzonder. ",
        tip2: "Holbox zit vol met heerlijke eetplekjes. Hier komen mijn favorieten: Alma Bar (Rooftop en cocktailbar, erg instagramwaardig), Roots (Leuk tentje met live muziek. Probeer dan vooral de lobster pizza), Caracol (Je kunt hier de hele dag op strandbedjes liggen als je 350 peso pp besteedt en het eten is super lekker), El sushi de Holbox (Heerlijk en erg vers), Basico (Wel van tevoren reserveren want het is klein en vrij chique. De porties zijn wat kleiner en het eten wat duurder maar het is het zeker waard), Painapol (Perfect voor ontbijt en lunch).",
        slapen2:
          "Er zijn tal van goeie hotels en hostels te vinden op Holbox, maar wij verbleven toch wel in een waar paradijsje; El Pueblito. Je kunt op deze tekst klikken om het hotel te bekijken. De foto's spreken voor zich.",
        link2:
          "https://www.booking.com/hotel/mx/el-pueblito.nl.html?auth_success=1",
        image21: mexicoImages[0],
        alt21: "Alma bar",
        image22: mexicoImages[1],
        alt22: "streetart",
        image23: mexicoImages[2],
        alt23: "Holbox sign",
        dagTitel3: "Tulum",
        text3:
          "Tulum, wie kent het niet? Als iemand vertelt dat hij in Mexico is geweest, kun je er zeker van zijn dat hij in ieder geval Tulum heeft bezocht. Tulum is hardstikke hot en dat zie je ook aan het aantal toeristen. Gelukkig is Tulum ook vrij groot. Groter in iedergeval dan dat ik me op voorhand had voorgesteld. Tulum heeft eigenlijk twee delen; Tulum Pueblo en Tulum Beach. Beide zijn absoluut de moeite waard maar let hierop bij het boeken van je accomodatie. Tulum Pueblo is het dorpje waar veel winkels en restaurants zitten. Hier heb je een gezellige boulevard waar 's avonds van alles te doen is. Tulum Beach is een enorme lange strook langs de kust. Je hebt een prachtig strand met aan een stuk door strandtenten en beachclubs. Achter de strandtenten zijn aan de weg vaak ook nog wat winkeltjes. Net buiten Tulum kun je ook nog de Tulum ruines bezoeken en tal van cenotes. Kortom je kunt je alleen in Tulum makkelijk een hele vakantie vermaken.",
        tip3: "Ik krijg wel eens de vraag naar welke strandtent je absoluut moet gaan in Tulum. Omdat Tulum zo groot is en ook zo veel prachtige strandtenten heeft vind ik dit lastig te zeggen. Daarnaast was ik met Oud & Nieuw in Tulum, wat alles ook anders maakt. Strandtenten waar wij zijn geweest en die we ook zeker de moeite waard vonden zijn: Alma, Mezzanine, Ahau en Mia.",
        todo3:
          "Huur een fiets! Je bent niet voor niets een Nederlander. Bovendien kun je niet even door Tulum heen wandelen vanwege de afstanden. Een auto is ook een optie maar er staan vaak dikke files langs het strand omdat iedereen een parkeerplekje zoekt. Bovendien zijn de meeste cenotes en de tulum ruines ook op fiets afstand. Cenotes die je zeker (op de fiets) moet bezoeken zijn: Zacil-ha, Carwash, Gran Cenote & Calvera. Het beste kun je 's ochtends zo vroeg mogelijk gaan om de drukte te vermijden.",
        slapen3:
          "Wij sliepen in hotel Zendero. Een top hotel met een fantastisch ontbijt. Het hotel was net geopend toen wij er waren en is zeker een aanrader om te verblijven, maar het hotel staat wel in Tulum Pueblo. De prijzen van de accomodaties in Tulum Beach zijn vaak net iets hoger, maar ik denk wel dat het leuker is om daar een hotel te boeken. Dus als je de kans hebt kies dan voor een slaapplek bij het strand.",
        link3:
          "https://www.booking.com/hotel/mx/zendero-tulum.nl.html?aid=318615&label=New_Dutch_NL_NL_21456919225-h80T2porWQu2AcvphCQ7XAS84729679105%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=42b3a27b4ae2f7713172914e7a062a11&dest_id=-1707023&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1663176416&srpvid=a1997aaf2fdb00f5&type=total&ucfs=1&activeTab=main",
        image31: mexicoImages[4],
        alt31: "Fiets in Mexico",
        image32: mexicoImages[3],
        alt32: "Cenote carwash",
        image33: mexicoImages[5],
        alt33: "Tulum Ruines",

        dagTitel4: "Bacalar",
        text4:
          "The blue lagoon oftwel; Bacalar. De paradijselijke foto's in magazines over Mexico zijn vaak gemaakt in Bacalar. Dit komt omdat het meer, Laguna Bacalar, door de verschillende dieptes 7 verschillende kleuren blauw heeft. Alles in Bacalar draait dan ook om activiteiten op het water.",
        todo4:
          "Je kunt op het meer suppen of kayakken, maar wij kozen ervoor om te gaan zeilen. Dit wordt door veel reisorganisaties aangeboden en duurt meestal een halve dag. Ik vond zeilen wel echt de beste manier om de laguna goed te bekijken. Als je een dagje wilt chillen dan kun je naar Los Cocalitos. Dit is een grasveldje waar ze hangmatten in het water hebben gehangen en waar je kunt zwemmen. Dit is helaas geen verborgen pareltje meer dus ga vroeg als je het massatoerisme wil ontwijken. Een andere leuke activiteit is snorkelen bij Los Rapidos. Dit is een stroomversnelling waar je lekker met de stroming mee kunt drijven en aan het einde kun je weer terug lopen. Er is hier ook een restaurant en er zijn fijne plekjes met hangmatten waar je kunt kijken naar de voorbijstromende mensen.",
        tip4: "Wij hebben ook in Bacalar weer heerlijk gegeten, en wel op de volgende plekken: Bote de Leche (Neem Pan de Ajo als voorgerecht), El Manati (voor ontbijt en lunch), Yerbabuena Smoothie bar (voor ontbijt), Meztitoz (beste guacamole die ik in Mexico heb gegeten).",

        image41:
          "https://www.porquemegustaviajar.com/wp-content/uploads/2021/09/Los-Ra%CC%81pidos-Bacalar.jpeg?ezimgfmt=rs:3982x386/rscb5/ngcb5/notWebP",
        alt41: "Los rapidos",
        image42: mexicoImages[11],
        alt42: "Our boat in Bacalar",
        image43: mexicoImages[6],
        alt43: "Los Cocalitos",

        dagTitel5: "Valladolid",
        text5:
          "Valladolid, is een goede uitvalsbasis om zowel cultuur te snuiven of de natuur in te gaan. Zo zijn wij vanuit hier naar Izamal, cenote Suytun en Chitzen Itza geweest. Izamal is een mooie, gele stad. Leuk om doorheen te wandelen en winkeltjes te bekijken. Bij cenote Suytun hadden wij de mazzel dat het super rustig was en dat we de hele cenote bijna voor onszelf hadden. Het is een prachtige grot met een plateau in het midden. Bij ons kon je op het plateau staan maar ik heb ook foto's gezien dat het plateau helemaal onder water staat.",
        todo5:
          "Chitzen Itza. De bekendste trekpleister van Yucatan. Vanwege het grote aantal toeristen wat hier dagelijks komt was ik een beetje sceptisch of ik hier wel heel wilde gaan. Het was de bedoeling om hier op tijd heen te gaan maar we waren er uiteindelijk veel later dan gepland. Het park is van 8:00 tot 16:00 uur open en het zag er naar uit dat we daar te laat voor zouden zijn. Wat ze op de meeste sites niet vermelden is dat er nog een tweede kans is om naar binnen te gaan en wel van 17:00 tot 18:00. Dit is natuurlijk veel korter en daarom is de prijs ook lager. In deze korte tijd heb je geen tijd om alle ruines te bekijken maar je kunt toch best veel zien. Zelfs met een vriendin die kreupel liep hebben we nog een aardig groot deel van het park kunnen zien. En het mooiste is dat er maar een handjevol mensen binnen is en dat de zon op dat moment langzaam onder gaat. Dat betekent dat je de ruines ziet met een prachtige oranje / roze gloed op de achtergrond.",
        slapen5:
          "Le Muuch, echt weer een plaatje van een hotel midden in Valladolid.",
        link5: "",
        image51: mexicoImages[10],
        alt51: "Valladolid",
        image52: mexicoImages[7],
        alt52: "Chitzen Itza sunset",
        image53: mexicoImages[8],
        alt53: "Izamal",

        dagTitel6: "Playa del Carmen",
        text6:
          "Toeristischer dan dit wordt het niet. Persoonlijk vind ik dit soort plekken vreselijk maar omdat we met onze huurauto wel iets dichter in de buurt van de luchthaven wilde zijn hebben we toch de keuze gemaakt om hier nog een nachtje te slapen. En ik moet zeggen; voor een dagje is dit helemaal leuk. Je kijkt je ogen uit.",
        todo6:
          "Omdat we in Playa del Carmen niet heel veel wilden bezoeken en omdat we onszelf nog even wilden verwennen voor dat we weer naar het koude Nederland terug vlogen (nee, we waren nog niet genoeg verwend op deze reis), boekten we een all inclusive hotel. En wat voor één. The reef 28. Super de luxe, niks te klagen, heerlijk gegeten.",
        image61: mexicoImages[9],
        alt61: "The Reef 28",
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
        id: 1,
        title: "Wijn, wildlife en woestijn",
        location: "Namibie",
        period: "Eind september t/m begin oktober 2021",
        introtext:
          "In een 4x4 met een tent op het dak, zijn wij van Kaapstad naar Windhoek gereden. Wij bleven één week in Zuid Afrika en twee in Namibië. In twee weken kun je alle highlights van Namibië zien maar je brengt wel veel tijd in de auto door. Als je wat meer tijd hebt raden we aan om 3 weken voor deze route door Namibië te nemen. Hieronder kun je lezen hoe wij in twee weken van Noordoewer naar Windhoek zijn gereden. (Klik op de text bij 'slapen' om naar de site van de campsites te gaan)",
        dagTitel1: "Dag 1",
        text1:
          "Als je net als wij via Zuid Afrika naar Namibië reist zorg dan dat je op tijd bij de grensovergang bent. Wij waren rond 15:00 uur bij de grens maar alles duurde zo lang dat we pas 18:15 uur Namibië in konden rijden. Stipt om 18:00 uur ging het licht uit dus dat betekent dat je door het pikkedonker (want geen straatverlichting) jouw slaapplek moet zien te vinden.",
        slapen1:
          "Wij sliepen in Noordoewer, dit is de plaats waar je direct na de grensovergang aankomt. Na een kwartiertje rijden kom je dan aan bij Amanzi Trails River Adventures. Dit is een mooie camping aan een rivier waar ook genoeg activiteiten te doen zijn.",
        link1: "https://www.amanzitrails.co.za/amanzi-river-camp/",
        tip1: "Direct na de grensovergang zit een groot tankstation. Zorg dat je hier je auto direct vol gooit en geld pint. In (zuid) Namibië zijn tankstations en pinautomaten namelijk schaars en je wil niet (net zoals wij) zonder cash en benzine komen te staan.",
        dagTitel2: "Dag 2",
        text2:
          "Op deze dag reden we van Noordoewer naar Ai-Ais (richting Hobas). Voor ons was dit echt een pech dag want onze benzine raakte op en we hebben het op het nippertje gehaald tot Hobas. Hier zou een tankstation zijn volgens Google maps maar die bleek leeg te zijn. We hebben toen in Hobas bij onze campsite gewacht tot iemand 80km heen en weer had gereden naar het eerstvolgende tankstation.",
        todo2:
          "Je denkt vaak dat plaatsen op de kaart een stad of dorp zijn, maar in Namibië is een naam op de kaart soms alleen een campsite. In Ai-Ais kun je naar de hotspring maar dit stelt helemaal niks voor. Het is letterlijk een gat in de grond met water wat te heet is om aan te raken. De camping heeft wel een spa wat water gebruikt uit de hotspring.",
        slapen2:
          "Wij sliepen in Hobas op de Ai-Ais Hotsprings Spa Campsite. Dit is een hele mooie campsite met zwembad. Goede alternatieven zijn Hobas Campsite en Canyon Roadhouse (Hier hebben ze een pinautomaat en tankstation! Pinautomaat was wel leeg toen wij daar aankwamen)",
        link2: "http://www.nwrnamibia.com/ai-ais.htm",
        dagTitel3: "Dag 3",
        text3:
          "In de ochtend zijn we naar Fish River Canyon gereden. Dit was 50 minuten rijden vanuit Hobas. Daarna zijn we nog 3,5 uur doorgereden naar Klein-aus-vista",
        todo3:
          "Wij waren alleen een ochtend bij Fish River Canyon. Omdat je hier ook verschillende hikes kunt doen kun je je hier prima een paar dagen vermaken. De Fish River Canyon is namelijk, op de Grand Canyon in de VS na, de langste canyon ter wereld.",
        slapen3:
          "Klein Aus Vista Desert Horse Camp is de camping waar wij verbleven. Dit is een mooie camping vanuit waar je ook mooie hikes kunt doen. Ook is het een goede uitvalsbasis om de wilde woestijn paarden te bekijken, tenminste als het niet zo droog is als toen wij er waren. Er is wel een waterbron waar de paarden vaak te vinden zijn, maar toen wij er waren (Oktober) was de omgeving te droog voor de paarden.",
        link3:
          "https://www.klein-aus-vista.com/accommodation/desert-horse-campsite/",
        tip3: "Vanaf de camping is er één rechte weg richting Kolmanskop. Aan het begin van deze weg is er aan de rechterkant een pad richting een waterhole. Deze staat ontzettend slecht aangegeven dus je moet goed opletten. Wij zagen geen paarden bij deze waterhole maar er zijn meestal wel wat struisvogels, herten en andere beestjes te vinden. Het schijnt dat je heel vroeg 's ochtends of juist laat in de middag de meeste kans hebt om de paarden te zien.",
        dagTitel4: "Dag 4",
        text4:
          "Vroeger was Kolmanskop één van de rijkste dorpen van Afrika vanwege de diamanthandel. Toen er geen diamant meer te vinden was hebben alle bewoners het dorp verlaten. Sommigen hebben letterlijk alleen hun kleren ingepakt en zijn weggegaan. Je kunt nu ronddwalen in dit volledig verlaten dorp en ook de huizen van binnen bekijken. Omdat er in de omgeving vrijwel niets anders is dan zand, zijn de huizen in de loop der jaren steeds meer onder het zand komen te liggen. Dit geeft een surreel beeld en is fantastisch om te zien. Wij kwam al vroeg aan in Kolmanskop en daarom was er verder ook helemaal niemand. Dit maakte het extra speciaal. En omdat we nog 5 uur moesten rijden naar Sesriem was het ook nodig om vroeg te gaan.",
        slapen4:
          "Omdat we de volgende ochtend meteen met zonsopkomst Sossusvlei wilden bezoeken, hebben we gekozen voor een camping naast de ingang; Sossus Oasis Campsite. Dit was een mooie campsite met zwembad en je had je eigen toilet/badkamer/keuken gebouwtje. Daarnaast hebben ze ook een eigen tankstation, wat super handig is!",
        link4: "https://www.sossus-oasis.com/",
        tip4: "Bij een benzinestation kun je je bandenspanning laten verlagen (naar 1.6). Dit wordt overal aangeraden maar is niet nodig als je alleen op de normale weg rijdt. Aan het einde van de normale weg heb je de keuze om voor weinig geld met een jeep mee te rijden die je naar de verschillende duinen rijdt, of om zelf te gaan rijden. Als je zelf gaat rijden heb je inderdaad de lage bandenspanning nodig maar dit raden wij je niet aan. We zagen een aantal mensen die vast waren komen te zitten in het zand. Dit betekent dan ook letterlijk dat je daar vast zit want de auto kan er pas de volgende ochtend uit gesleept worden omdat het zand vanwege de warmte te zacht wordt in de middag. Ik zou het risico niet nemen want het is super makkelijk (en leuk) om één van de jeepjes te pakken die constant heen en weer rijden.",
        dagTitel5: "Dag 5",
        text5:
          "De dag van de Sossusvlei. Iets wat je absoluut niet mag overslaan als je naar Namibië gaat. Voor zonsopkomst rijdt je naar de poort, waar je naar binnen gelaten wordt zodra de eerste zonnestraal tevoorschijn komt. Je rijdt over een lange rechte weg met aan beide kanten prachtige rode zandduinen, in het oranje licht van de opkomende zon. Je kunt ervoor kiezen om zonsopkomst te bekijken bij Dune 45. Dit is een duin die je ziet na 45km op deze lange weg, vandaar ook de naam. Wij hebben ervoor gekozen om helemaal door te rijden tot het einde van de weg. Onze auto lieten we hier achter op de parkeerplaats en met een jeep gingen we verder naar Dodevlei. De zonsopkomst hier was magisch. Je kunt hier de verschillende duinen op klimmen of gewoon rondlopen over de uitgedroogde zoutpan van de Dodevlei. De oranje duinen met daarvoor het witte zout en de grijze dode bomen zijn super fotogeniek. Met de jeep zijn we nog naar Big Mamma en Hidden Vlei geweest.",
        slapen5:
          "Tussen Sesriem en Swakopmund in ligt camping: Bushman's Desert Camp. Het ligt een beetje verscholen. Zorg dat je niet net als wij vol gas gaat over het zandweggetje. De weg houdt namelijk ineens op en dan rij je een soort ravijn in waar de camping ligt. Wij waren bijna bovenop de camping gevlogen met onze auto. Wat leuk is, is dat ze ook een eigen waterhole hebben waar je 's avonds dieren kunt spotten.",
        link5: "https://bushmans-desert-camp-self-catering.business.site/",
        tip5: "Wij dachten dat we een hele dag zouden spenderen in de Sossusvlei maar na een halve dag hadden we het wel gezien. Voornamelijk omdat het op een gegeven moment echt te heet wordt om door het zand heen te banjeren. Neem dan ook voldoende water mee. En mocht je wel in de middag nog rond willen lopen door de duinen, doe dan dichte schoenen aan en ga niet net als wij op slippers. Als je voor de echte hitte weg gaat kun je trouwens prima op slippers lopen.",
        dagTitel6: "Dag 6",
        text6:
          "Vandaag staat weer een autorit van ruim 4 uur op het programma. We zijn vanuit onze campging doorgereden naar Walvisbaai en Swakopmund. Hier hebben we rondgelopen en geluncht. Omdat het toen wij er waren erg koud was (en wij hier neit op gekleed waren) zijn we uiteindelijk doorgereden naar Cape Cross Bay om hier te overnachten. Naast deze campsite zit een rescue center voor zeehondjes dus je ziet hier op het strand aardig wat van deze beestjes.",
        slapen6:
          "Een van de laatste campsites voordat je aankomt bij de Skeleton Coast is Cape Cross Campsite. Hier hebben wij geslapen omdat we de volgende dag graag via de Skeleton Coast wilden rijden.",
        link6: "https://www.capecross.org/Campsite.htm",
        dagTitel7: "Dag 7",
        text7:
          "Het schijnt aan de kust en dan voornamelijk het stuk bij de Skeleton Coast, elke morgen grijs en bewolkt te zijn. Dit past ook super goed bij het spookachtige sfeertje wat er hier hangt. Het heet natuurlijk niet voor niks 'Skeleton Coast'. Nadat je door een hek met allemaal doodshoofden bent gereden, rij je officieel langs de Skeleton Coast. Langs deze route zijn een paar afslagen waar je shipwrecks kunt bekijken. Wij zijn ook bij de huab lagoon van de weg af gegaan om flamingo's te bekijken. Toen ik wilde uitstappen om van dichterbij een foto van de flamingo's te maken zag ik net op tijd het bord: 'Blijf in je auto! Er loopt hier een leeuw!'. De leeuw hebben we hier helaas niet gezien. We waren erg blij dat zodra we weer landinwaards reden, weg van de Skeleton Coast, de zon meteen weer begon te schijnen.",
        slapen7:
          "We sliepen op een plek waarvan we dachten dat het handig was voor de route richting Etosha, maar het bleek ook nog één van de mooiste campsite te zijn van onze reis; Madisa Camp. Er is een zwembad en je hebt een privé badkamer / toilet / keuken in de buitenlucht. Ook is er een grote rots waar je op kan klimmen voor de zonsopgang. Als je mazzel hebt kun je vanaf hier ook olifanten spotten.",
        link7: "http://www.madisacamp.com/",
        dagTitel8: "Dag 8",
        text8:
          "Vergis je niet in de afstanden in Namibië. Ook vandaag zaten we weer 5 uur in de auto. Toch is het geen straf om hier te rijden. Oke, de wegen zijn niet altijd een pretje maar het landschap is prachtig! Hoe dichter je bij Etosha in de buurt komt, hoe meer wilde beesten je kunt spotten. Maar soms zie je ook urenlang alleen maar zandvlaktes. Als je een tegenligger tegenkomt dan zwaai je naar elkaar want dit gebeurd namelijk niet zo vaak.",
        slapen8:
          "Om op tijd in Etosha te kunnen zijn en daar drie volle dagen te kunnen besteden slapen we deze nacht in Etosha Safari Camp, net voor de ingang van Etosha. Dit was weer een prachtige campsite, van alle gemakken voorzien. Deze camping vonden wij extra bijzonder door wat er 's nachts gebeurde. Mijn vriend moest naar de wc en klom de tent uit. Ineens hoorde we allemaal hoeven wegrennen. Ik ritste de tent open en onze auto was omringt door zebra's en verschillende soorten hertjes. Even later zagen we ook een giraf langslopen. Zo bizar dat deze gewoon om je tent heen lopen. Wel een fijn idee dat je dan hoog bovenop de auto slaapt.",
        link8:
          "https://gondwana-collection.com/lodgedetail?LodgeName=ETOSHA%20SAFARI%20CAMP",
        dagTitel9: "Dag 9",
        text9:
          "Ook vandaag staan we weer voor zonsopkomst op, om met zonsopgang het park binnen te kunnen rijden. Het is ook mogelijk om georganiseerde tours te doen met een gids, maar wij vonden het veel leuker om zelf te rijden. Ook is het niet heel moeilijk om de beesten te spotten. Alleen de katachtigen zijn soms wat lastiger. Maar vaak als er een grote groep auto's ergens stilstaat dan weet je genoeg. Je rijdt eigenlijk van de ene waterhole naar de andere. Bij deze waterholes is het, zeker in de droge periode waarin wij er waren, super druk met allerlei beesten.",
        slapen9:
          "De eerste nacht in Etosha sliepen we in Okaukuejo. Dit is een vrij simpele camping maar de ligging is perfect voor de eerste nacht. Ook is er een grote waterhole waar je super veel dieren kunt spotten.",
        link9: "https://www.etoshanationalpark.org/accommodation/okaukuejo",
        tip9: "Je mag alleen tussen zonsopkomst en zonsondergang in het park rijden en hier zijn ze heel streng in. Als je met zonsondergang de campsite oprijdt, ga dan direkt naar de waterhole. Dit is het moment waarop veel dieren naar de waterhole komen omdat het minder heet is. En al deze dieren bij elkaar met de ondergaande zon op de achtergrond is prachtig om te zien!",
        dagTitel10: "Dag 10",
        text10:
          "Ook vandaag hebben we weer een hele dag rondgereden in Etosha. Het park is heel groot dus je moet er ook wel minstens twee dagen voor uittrekken. En het verveelt nooit. Als je even denkt dat je geen wildlife meer tegen gaat komen dan ligt er ineens een groep leeuwen op de weg. Het is niet te voorspellen en elke dag is anders. Maar dat je bijzondere dingen gaat zien, dat staat vast.",
        slapen10:
          "Tamboti Campsite hadden we gekozen omdat het helemaal aan de andere kant van Etosha ligt ten opzichte van Okaukuejo. Alleen dachten we dat de camping ook in Etosha lag maar dit bleek niet het geval. Dit maakt echter niet heel veel uit want de camping ligt letterlijk meteen na de uitgang van Etosha. De campsite is super mooi. Eigenlijk is het bijna zonde dat we hier alleen tijd hebben doorgebracht tussen zonsondergang en voor zonsopkomst.",
        link10: "https://onguma.com/tamboti-luxury-campsite/",
        dagTitel11: "Dag 11",
        text11:
          "Ondanks dat het op sommige websites wel vertelt wordt kun je de big five niet zien in Etosha. Dit komt omdat de buffel niet in Etosha leeft. (Deze kun je wel b.v. bij Waterbergplateau tegenkomen.) Maar ook zonder de buffel was Etosha een van de mooiste ervaringen uit mijn leven. Dit zijn een aantal van de beesten die wij gezien hebben tijdens onze ritjes door het park: olifanten, zebra's, giraffen, neushoorns, leeuwen, hyena's, jackhalzen, luipaarden en ontelbare vogels en verschillende soorten herten.",
        slapen11:
          "We sliepen in Sachsenheim Guest Farm. Dit is een campsite vlakbij Tambobi. We wilden onze laatste dag in Etosha nog wel goed kunnen benutten dus we wilden niet te ver rijden. Het leuke aan deze campsite is dat het ook een soort boerderij is. Dan slaap je ineens tussen de koeien ipv tussen ze zebra's.",
        link11: "https://sachsenheim-guest-farm.business.site/",
        dagTitel12: "Dag 12",
        text12:
          "Vandaag rijden we naar Waterberg plateau (4 uur). Ook deze route is prachtig, en wat opvalt is dat dit deel van Namibië een stuk groener is. Wij hebben maar één dag voor Waterberg maar anders zou dit een mooie omgeving zijn voor een langere hike.",
        todo12:
          "Wij hebben in de ochtend een trekking over de plateau gedaan. Dit is wel een must-do als je naar de waterbergplateau gaat. Nadat je 200m omhoog bent geklommen heb je prachtig uitzicht over het hele gebied. Daarna wandel je over de plateau waar je ook neushoorns tegen kunt komen. Bizar feitje van onze gids: Er leefden geen grote dieren op de pleteau. Alle neushoorns, giraffen etc zijn naar boven gehesen. Ze kunnen ook niet meer zelfstandig naar bendeden omdat het plateau een te stijle berg is. Dit hebben ze gedaan om de bedreigde beesten (zwarte neushoorn) te beschermen tegen stropers.",
        slapen12:
          "We slapen op Waterberg Plateau Campsite. Deze campsite ligt in het nationaal park.",
        link12:
          "https://www.waterberg-wilderness.com/waterberg-plateau-campsite.html",
        dagTitel13: "Dag 13",
        text13:
          "Onze laatste bestemming is Windhoek, de hoofdstad van Namibië. Het is weer eens wat anders om weer in een grote stad te zijn, na zo lang weinig mensen te zijn tegengekomen. Er is van alles te doen in Windhoek en er is voor het eerst keuze uit restaurants. Windhoek is een stad waar je prima één of twee dagen kunt verblijven omdat je reis hier vaak begint of eindigd. Maar je komt naar namibië voor de natuur en daar is in Windhoek vrijwel niets van te zien.",
        slapen13:
          "Omdat we de volgende dag terug naar Nederland vliegen en omdat we in de ochtend eerst nog onze 4x4 moeten inleveren slapen we op een campsite net buiten Windhoek, in de buurt van de luchthaven: Ondekaremba. Dit is een mooie campsite waar je prima langere tijd kunt verblijven als je wat meer dagen in Windhoek wilt blijven.",
        link13: "https://www.ondekaremba.com/",
        dagTitel14: "Dag 14",
        text14:
          "Helaas is dit alweer de laatste dag van een fantastische reis. Namibië is geen land waar je zomaar even last-minute naar toe gaat. Het is belangijk om je van te voren wel even te verdiepen in het land. Maar wat een onvergetelijke reis is dit geworden. Bekijk onze tips voor Namnibië hieronder en dan kan ik iedereen aanraden om er een keer heen te gaan!",

        image11: namibiaImages[0],
        alt11: "Sossusvlei",
        image12: namibiaImages[1],
        alt12: "view from tent",
        image13: namibiaImages[2],
        alt13: "Bushman's Desert Camp",

        image31: namibiaImages[3],
        alt31: "Pool at Ai-Ais campsite",
        image32: namibiaImages[4],
        alt32: "Fish River Canyon",
        image33:
          "https://images.unsplash.com/photo-1579990555377-c0abf314dcdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
        alt33: "Fish River Canyon",

        image41: namibiaImages[5],
        alt41: "Kolmanskop",
        image42:
          "https://images.unsplash.com/photo-1516822671976-480ad5131e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt42: "Kolmanskop",
        image43:
          "https://images.unsplash.com/photo-1588453610237-cfe7f3abfc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
        alt43: "Kolmanskop",

        image51: namibiaImages[6],
        alt51: "Sossusvlei",
        image52:
          "https://media-cdn.tripadvisor.com/media/photo-s/16/fa/05/2b/sossusvlei.jpg",
        alt52: "Dodevlei",
        image53: namibiaImages[7],
        alt53: "Sossusvlei",

        image71:
          "https://images.unsplash.com/photo-1592161443742-5dc4651dce11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        alt71: "Swakopmund",
        image72:
          "https://live.staticflickr.com/2947/15256164828_61a58911aa_c.jpg",
        alt72: "Skeleton Coast",
        image73: namibiaImages[8],
        alt73: "Madisa Camp sunset",

        image91: namibiaImages[9],
        alt91: "giraf",
        image92: namibiaImages[10],
        alt92: "Sunset Okaukuejo",
        image93: namibiaImages[11],
        alt93: "Leeuwin etosha",

        image111: namibiaImages[12],
        alt111: "Leeuwen Etosha",
        image112: namibiaImages[13],
        alt112: "Neushoorn en Springbokken Etosha",
        image113: namibiaImages[14],
        alt113: "Waterhole Etosha",

        image131: namibiaImages[15],
        alt131: "Zebra's Etosha",
        image132: namibiaImages[16],
        alt132: "Jakhals",
        image133: namibiaImages[17],
        alt133: "Luipaard etosha",

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
        id: 1,
        title: "van Hiroshima naar Tokyo en de Yaeyama islands",
        location: "Japan",
        period: "datum",
        introtext: "Nog even geduld, deze tekst volgt snel!",
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
        id: 2,
        title: "Mario Kart in Tokyo",
        location: "Japan",
        text: "Nog even geduld, deze tekst volgt snel!",
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
        id: 1,
        title: "Waterval paradijs",
        location: "Ijsland",
        introtext: "Nog even geduld, deze tekst volgt snel!",
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
        category: "card",
        title: "Alles wat je moet weten over zwemmen met varkens in de Bahamas",
        location: "Bahamas",
        text: "Een helderblauwe zee, witte stranden, en vrolijke varkentjes. Dit klinkt toch als het paradijs op aarde? Dit paradijs bestaat en het is in de Bahamas. Lees er alles over in dit artikel.",
        image:
          "https://cdn.holidayguru.nl/wp-content/uploads/2017/03/Swimming-pigs-of-Exumas-iStock_000033977684_Large-2.jpg",
        alt: "zwemmende varkens",
        onClick: GOTOPAGE.BahamasStory,
      },
      {
        category: "story",
        id: 1,
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
        id: 1,
        title: "Streetart in Wynwood",
        location: "Miami",
        text: "Nog even geduld, deze tekst volgt snel!",
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
        id: 1,
        title: "De mooiste eilandentours",
        location: "Philipijnen",
        text: "Nog even geduld, deze tekst volgt snel!",
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
        id: 1,
        title: "Wijntour in Fransschoek",
        location: "ZuidAfrika",
        text: "Nog even geduld, deze tekst volgt snel!",
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
        title: "Paradijs in de Middelandse zee, Formentera",
        location: "Spanje",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.wandelingen.info/wp-content/uploads/2016/12/Formentera-trucadors-plankierpad.jpg",
        alt: "strand formentera",
        onClick: GOTOPAGE.SpainStoryFormentera,
      },
      {
        category: "story",
        id: "formentera",
        title: "Paradijs in de Middelandse zee, Formentera",
        location: "Spanje",
        text: "Nog even geduld, deze tekst volgt snel!",
      },
      {
        category: "card",
        title: "De andere kant van party-eiland Ibiza",
        location: "Ibiza",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.travelvalley.nl/uploads/images/pleintje-ibiza-stad.jpeg",
        alt: "Dalt Vila",
        onClick: GOTOPAGE.SpainStoryIbiza,
      },
      {
        category: "story",
        id: "ibiza",
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
        image6a:
          "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_700,h_462/https://www.ibizaontdekker.nl/wp-content/uploads/2022/03/ibiza-cala-llonga-rustige-badplaats-vakantie.jpg",
        alt6a: "Cala Llonga",
        image6b:
          "https://lh5.googleusercontent.com/p/AF1QipP2wZxfW9YEWST_ObdD8nJC_nSAgREMvHNSkdhO=s1600",
        alt6b: "Cala Llonga",
        image6c:
          "https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/beach-images/69727/slideshow-1540806823_1.jpg",
        alt6c: "Cala Llonga",
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
        text: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "zanzibar",
    location: "Zanzibar",
    continent: "Afrika",
    title: "Zanzibar",
    text: "Intro about Zanzi",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Afrique/Tanzanie.png",
    alt: "Flag Tanzania",
    stories: [
      {
        category: "card",
        title: "Hakuna Matata op Zanzibar",
        location: "Zanzibar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/11/09/44/e8/paje-the-kitesurfers.jpg",
        alt: "paje",
        onClick: GOTOPAGE.ZanzibarStory,
      },
      {
        category: "story",
        title: "Hakuna Matata op Zanzibar",
        location: "Zanzibar",
        text: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
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
    stories: [
      {
        category: "card",
        title: "Cambodja",
        location: "Cambodja",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://reisexpert.b-cdn.net/wp-content/uploads/2015/01/Angkor-Wat4-Cambodja-ST.jpg",
        alt: "ankor wat",
        onClick: GOTOPAGE.CambodjaRoute,
      },
      {
        category: "story",
        title: "Cambodja",
        location: "Cambodja",
        text: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "china",
    location: "China",
    continent: "Azie",
    title: "China",
    text: "Intro about China",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Chine.png",
    alt: "Flag China",
    stories: [
      {
        category: "card",
        title: "Shanghai",
        location: "China",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://www.jouwchinareis.nl/wp-content/uploads/2022/04/Shanghai-China-930x620.jpg",
        alt: "Shanghai",
        onClick: GOTOPAGE.ChinaStory,
      },
      {
        category: "story",
        title: "Shanghai",
        location: "China",
        text: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "indonesie",
    location: "Indonesie",
    continent: "Azie",
    title: "Indonesië",
    text: "Intro about Indonesië",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Indonesie.png",
    alt: "Flag Indonesië",
    stories: [
      {
        category: "card",
        title: "Indonesie",
        location: "Indonesie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://cdn.britannica.com/10/61110-050-DAC8AD8E/Mount-Bromo-volcanoes-Semeru-Indonesia-Java.jpg",
        alt: "Bromo",
        onClick: GOTOPAGE.IndonesieRoute,
      },
      {
        category: "route",
        title: "Indonesie",
        location: "Indonesie",
        introtext: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "laos",
    location: "Laos",
    continent: "Azie",
    title: "Laos",
    text: "Intro about Laos",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Laos.png",
    alt: "Flag Laos",
    stories: [
      {
        category: "card",
        title: "Laos",
        location: "Laos",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://d13jio720g7qcs.cloudfront.net/images/destinations/origin/60584c85275fb.jpg",
        alt: "Kuang si falls",
        onClick: GOTOPAGE.LaosRoute,
      },
      {
        category: "route",
        title: "Laos",
        location: "Laos",
        introtext: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "maleisie",
    location: "Maleisie",
    continent: "Azie",
    title: "Maleisië",
    text: "Intro about Maleisië",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Malaisie.png",
    alt: "Flag Maleisië",
    stories: [
      {
        category: "card",
        title: "Malesie",
        location: "Maleisië",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f9/f2/d8/malaysia.jpg?w=500&h=300&s=1",
        alt: "Batu caves",
        onClick: GOTOPAGE.MalaysiaRoute,
      },
      {
        category: "route",
        title: "Maleisie",
        location: "Maleisie",
        introtext: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "thailand",
    location: "Thailand",
    continent: "Azie",
    title: "Thailand",
    text: "Intro about Thailand",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Thailand.png",
    alt: "Flag Thailand",
    stories: [
      {
        category: "card",
        title: "Thailand",
        location: "Thailand",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://cdn.wp.riksjatravel.nl/wp-content/uploads/sites/49/2021/04/hero-thailand-family-longtailboats-riksja-travel-e1634241897752.jpg",
        alt: "Longtail boats",
        onClick: GOTOPAGE.ThailandRoute,
      },
      {
        category: "route",
        title: "Thailand",
        location: "Thailand",
        introtext: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "vietnam",
    location: "Vietnam",
    continent: "Azie",
    title: "Vietnam",
    text: "Intro about Vietnam",
    image: "https://www.sport-histoire.fr/Sources/Drapeaux/Asie/Vietnam.png",
    alt: "Flag Vietnam",
    stories: [
      {
        category: "card",
        title: "Vietnam",
        location: "Vietnam",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://res.klook.com/image/upload/c_fill,w_750,h_500,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qmgtdjekctlyucr8itqw.jpg",
        alt: "Ha long bay",
        onClick: GOTOPAGE.VietnamRoute,
      },
      {
        category: "route",
        title: "Vietnam",
        location: "Vietnam",
        introtext: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
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
  {
    id: "australia",
    location: "Australie",
    continent: "Oceanie",
    title: "Australië",
    text: "Intro about Australië",
    image:
      "https://www.sport-histoire.fr/Sources/Drapeaux/Oceanie/Australie.png",
    alt: "Flag Australië",
    stories: [
      {
        category: "card",
        title: "De oostkust van Australie",
        location: "Australie",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOSY5Y13US6Xqig0_M9dw-ZIHW5U6f6hyRg&usqp=CAU",
        alt: "Great Ocean Road",
        onClick: GOTOPAGE.AustralieRoute,
      },
      {
        category: "route",
        title: "De oostkust van Australie",
        location: "Australie",
        introtext: "Nog even geduld, deze tekst volgt snel!",
      },
    ],
  },
  {
    id: "ierland",
    location: "Ierland",
    continent: "Europa",
    title: "Dublin",
    text: "1 dag in Dublin, dit zijn mijn tips",
    image:
      "https://images.unsplash.com/photo-1605969353711-234dea348ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Temple bar Dublin",
    stories: [
      {
        category: "card",
        title: "1 dag in Dublin, dit zijn mijn tips",
        location: "Ierland",
        text: "Heb je net als ik een stopover, of ga je voor een korte trip naar Dublin? Ik kan je vertellen wat leuke plekken zijn om te bekijken en wat je zeker niet mag missen tijdens je korte trip.",
        image:
          "https://images.unsplash.com/photo-1605969353711-234dea348ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Temple bar Dublin",
        onClick: GOTOPAGE.IerlandStory,
      },
      {
        category: "story",
        title: "1 dag in Dublin, dit zijn mijn tips",
        location: "Ierland",
        period: "Oktober 2022",
        text1:
          "Als je op reis gaat komt het vaak voor dat je een tussenstop moet maken. En als je dan toch via een andere plek moet reizen, waarom dan niet wat langer de tijd nemen en meteen die stad bekijken. Dat is wat ik heb gedaan in Dublin toen ik onderweg was naar Spanje. In dit artikel deel ik de tips die ik kreeg en de plekken waar ik zelf geweest ben.",
        subTitle2: "Walking tour",
        text2:
          "Wat ik zelf vaak aan het begin van een stedentrip doe is een 'Walking Tour'. Zo leer je de stad kennen door de ogen van een local. In elke stad hebben ze dit wel en je betaald wat je de wandeltoch zelf waard vond. Op deze manier leer je vaak iets over de historie van de stad, loop je op plekken waar je misschien zelf niet zo snel zou komen en krijg je tips voor leuke restaurants of dingen die je verder nog kunt doen. In Dublin heb ik ook zo'n wandeltocht gedaan en een aantal tips die ik toen gekregen heb deel ik ook in dit artikel.",
        subTitle3: "Wat valt er te zien",
        text3:
          "Het enige plan wat ik had voordat ik naar Dublin ging was een whisky drinken. Maar er is natuurlijk veel meer te doen en zien dan dat. Als je niet veel budget hebt dan kun je alsnog veel zien in Dublin. Rondwandelen door de stad is natuurlijk gratis maar ook alles waar 'National' voor staat is gratis, zoals bijvoorbeeld het National Museum of Ireland. Verder mag een bezoek aan Trinity College niet ontbreken. Je kunt hier rondlopen tussen de studenten en naar de mooie gebouwen kijken, maar wat eigenlijk echt moet bekijken is de bibliotheek van Trinity College met daarin het beroemde Book of Kells. Voor de bibliotheek moet je wel van tevoren een kaartje kopen.",
        image3a:
          "https://images.unsplash.com/photo-1515963931004-51a07139e710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxkdWJsaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        alt3a: "Temple bar Dublin",
        image3b:
          "https://images.unsplash.com/photo-1554581601-e61349bca2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt3b: "Book of Kels",
        image3c:
          "https://images.unsplash.com/photo-1591986204420-196c41191ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt3c: "Streets of Dublin",
        subTitle4: "Temple Bar",
        text4:
          "Temple Bar is een wijk in Dublin met veel bars en restaurants. Midden in deze wijk staat een bar die ook de naam Temple Bar draagt. Dit is de meest gefotografeerde kroeg van Dublin en daarom ook erg populair bij toeristen. Dat komt omdat toeristen vaak denken dat deze bar door zijn naam erg belangrijk is in de wijk, maar dat blijkt absoluut niet waar te zijn. Het gebied Temple Bar dankt zijn naam aan de familie Temple die eigenaar was van deze wijk. 'Bar' komt van de zandbank (sandbar) die vroeger aan dit gebied lag. De naam Temple Bar heeft dus niets met een kroeg te maken. De eigenaren van het cafe Temple Bar zijn gewoon slim geweest door hun bar zo te noemen. Je zal in deze bar echter geen enkele Ier vinden en de Ieren vinden dit een grote toeristische valkuil. Er zijn in de buurt van de Temple Bar ook genoeg andere leuke kroegen waar je ongeveer de helft betaald voor je Guinness. Dus ga vooral naar de wijk Temple Bar, maar sla het cafe de Temple Bar maar even over. Tenminste, je hoeft er niet naar binnen. Een foto maken van buiten zou ik wel doen want het is niet voor niets de meest gefotografeerde bar van deze wijk. Vooral met kerst schijnen ze erg veel aan de aankleding van de bar te doen.",
        text5:
          "Als je dan toch door Temple Bar heen loopt kijk dan vooral goed om je heen naar de streetart en loop via love lane naar de wall of love.",
        image5a:
          "https://images.unsplash.com/photo-1605969353711-234dea348ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt5a: "Temple bar Dublin",
        image5b:
          "https://images.unsplash.com/photo-1573564827193-fadecce712db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        alt5b: "Book of Kels",
        image5c:
          "https://www.independent.ie/regionals/dublin/dublin-news/95176/41684224.ece/AUTOCROP/w1240h700/Love%20Lane%203.jpg",
        alt5c: "Streets of Dublin",
        subTitle6: "Whisky",
        text6:
          "Ik ben een Whisky liefhebber dus de hoofdreden om even te stoppen in Dublin was voor mij om een whisky te drinken in een Ierse pub. Ik ben echter totaal geen Whisky kenner dus het leek me wel leuk om eerst wat meer te leren over het Whisky proces. Je hebt twee grote distillerijen in Dublin; Jameson en Teeling. De Whisky van Jameson wordt gemaakt in Cork en dus kun je in Dublin alleen verhalen over Whisky horen maar niet zien hoe het gemaakt wordt. Dus koos ik ervoor om naar de Teeling distillery te gaan. Je krijgt hier een uitgebreide rondleiding waarbij het hele proces wordt uitgelegd en aan het einde krijg je een Whisky proeverij. Als je niet kan kiezen tussen Jameson en Teeling is het Whisky museum ook een goede optie. Hier kun je het proces van het maken niet zien maar krijg je wel de verhalen over alle Ierse Whisky's.",
        text7:
          "Als in een bar Whisky wil drinken (of Guinness natuurlijk, maar dat is niet echt mijn ding), dan kan dat in principe op elke hoek van de straat. Een aanrader volgens mijn gids is de Palace bar. Dit is een bar waar veel Ierse mensen komen om bij te kletsen. Er staat namelijk geen muziek aan in deze bar en dat is uniek. Waar ik zelf heen geweest ben is Peruke & Periwig. Als je hier binnenstapt waan je je in een scene van Peaky Blinders. Je schijnt hier ook heerlijk te kunnen eten en cocktails te kunnen drinken. Als je sowieso meer een cocktail mens bent dan vind je in de straat van Peruke & Periwig (Dawsen street) een hele hoop fancy cocktailbars.",
        subTitle8: "Lunch en diner",
        text8:
          "Natuurlijk wil je als je in Ierland bent, scones eten (Ik wel in ieder geval). Ik ben zelf geen koffie drinker maar ik heb van meerdere mensen gehoord dat de koffie op de meeste plekken niet te zuipen is. Maar er is een uitzondering; Butlers Chocolate cafe. Je kunt hier super lekkere koffie halen (schijnt), en daarnaast hebben ze heerlijke scones en de beste warme chocolademelk. Heb je wat meer trek dan alleen een scone dan zijn er genoeg andere opties. De Ierse keuken bestaat voornamelijk uit aardappelen en vlees. Dit klinkt als de Nederlandse keuken maar er zijn een aantal locale gerechten die je moet proberen. Zo is er bijvoorbeeld 'Boxty', dit is een soort aardappel pannekoek die ze vullen met verschillende dingen. In de wijk Temple Bar heb je een restaurant die ook Boxty heet en hier serveren ze hele goede Boxty's. Als je zin hebt in iets gezonds, of gewoon een hippe lunch dan moet je bij Tang zijn. Dit is een café naast het St.Stephen's Green park. Heb je zin in een simpele maar heerlijke burger? Ga dan naar Bunsen, de beste burgerbar van Dublin (volgens mijn wandeltour gids dan). Deze burgerbar zit tegenover de Temple Bar.",
        subTitle10: "Muziek en dans",
        text10:
          "Van Riverdance heb je vast wel eens gehoord en het is natuurlijk heel leuk om wat van de Ierse cultuur mee te krijgen in de vorm van de Ierse dans. Er zijn veel commerciële Ierse dans shows waar je veel geld voor betaald en waar alleen toeristen komen. Ik wilde meer de local experience dus ben ik naar de Church bar geweest. Je kunt hier ontzettend lekker eten. Ik had spare ribs gegaard in Guinness (toch nog wat Guinness binnen gekregen), en Irish stew. Tijdens het eten is er de hele avond live muziek en tussendoor komen er steeds optredens van Ierse dansers. Daarnaast is dit restaurant gemaakt in een voormalige kerk, wat het ook een pracht lokatie maakt. Voor meer Ierse live muziek kreeg ik ook nog de tip om naar de Cobble Stone bar te gaan.",
      },
    ],
  },
];

/* <ul>
  <li>Londen</li>
  <li>Zuid Afrika</li>
  <li>Noorwegen</li>
  <li>Polen</li>
</ul>; */
