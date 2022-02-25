import React from "react";
import { PageTitle, SubTitle, Text } from "../../../Constants/OverallStyles";

export default function Formentera() {
  return (
    <div>
      <PageTitle>Formentera</PageTitle>
      <Text>
        Vanaf Schiphol kan je er al binnen drie uur zijn en daarom verwacht je
        misschien niet veel van het eiland Formentera. Maar het is werkelijk
        waar een klein paradijsje in de Middellandse Zee. Ondanks dat het vrij
        bewolkt was toen ik het eiland bezocht waren de stranden nog steeds
        prachtig wit en de zee helder blauw.{" "}
      </Text>
      <SubTitle>Hoe kom je er?</SubTitle>
      <Text>
        Er is geen luchthaven op Formentera dus om er te komen vlieg je naar
        Ibiza en vanaf daar ga je per boot verder. Het makkelijkst is om vanuit
        Ibiza stad de ferry te nemen, dan ben je er in een half uur. Ik heb zelf
        vanuit Es Canar de ferry gepakt. Dan doe je er een uur en driekwartier
        over maar het is wel een mooie tocht. En als je de bus vanuit Es Canar
        naar Ibiza stad moet pakken ben je ook een uur onderweg. Deze ferry
        stopt ook in Santa Eulalia en Cala Llonga dus daar zou je ook nog op
        kunnen stappen. Als je met een groepje bent is het een leuke optie om
        samen een boot te huren. Dit geeft je veel vrijheid want je kunt dan een
        rondje om het eiland varen, zelf bepalen hoe laat je vertrekt en
        aanleggen waar je maar wilt.
      </Text>
      <SubTitle>Vervoer</SubTitle>
      <Text>
        Als je aankomt in de haven van La Savina zie je overal auto-, fiets- en
        scooterverhuurbedrijven. Soms loont het om niet bij de eerste de beste
        naar binnen te lopen maar net even iets verder te kijken. Het eiland is
        niet zo groot dus een auto vond ik een beetje overbodig. Ik twijfelde
        tussen een scooter of een fiets huren. Omdat mij vertelt werd dat er op
        Formentera geen bergen waren, en je op veel parkeerplekken moet betalen
        om je scooter neer te zetten, ging mijn Nederlandse hart toch iets
        sneller kloppen voor de optie fiets. Nu moet ik wel direct toegeven dat
        ik voorgelogen ben. Formentera ziet er welliswaar super plat uit, het is
        het niet. Het is heuvelachtig en in combinatie met de hoge temperaturen
        (en mijn slechte conditie) kan het soms best een uitdaging zijn. Mijn
        plan was om vanuit La Savina eerst helemaal naar Far de la Mola, aan de
        andere kant van het eiland te gaan. Halverwege heb ik me toch bedacht en
        ben ik richting Platja de Migjorn gefietst.
      </Text>
      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <SubTitle>Platja de Migjorn</SubTitle>
          <Text>
            Dit zandstrand is zeven kilometer lang en wordt af en toe
            onderbroken door rotsplateaus. Aan het strand zitten een aantal
            resorts en grote restaurants. Ik ben wat verder doorgelopen tot ik
            bij een heel schattig strandhutje terecht kwam. Kiosko 62 noemen ze
            dit barretje waar ze goede muziek draaien, koude drankjes serveren
            en waar super vriendelijke surfdudes achter de bar werken.{" "}
          </Text>
          <SubTitle>Es Pujols</SubTitle>
          <Text>
            Dit is echt een schattig badplaatsje met winkeltjes en genoeg keuze
            uit restaurants. De boulevard is heel gezellig en het heeft een
            super wit zandstrand. Dit was het meest levendige stadje waar ik ben
            geweest maar nog wel heel schattig en kleinschalig.
          </Text>
          <SubTitle>Platja de ses illetes</SubTitle>{" "}
          <Text>
            De weg van Es Pujols naar Platja de Ses Illetes is heel mooi omdat
            je langs de zoutmeren fietst. Dit languitgestrekte gedeelte van het
            eiland vond ik qua stranden absoluut het mooiste. Je kan het een
            beetje zien als een soort lange zandbank met af en toe wat
            strandtentjes. Het water is er turquoise omdat het in het begin vaak
            ondiep is.
          </Text>
        </div>
        <img
          src="https://cdn.getyourguide.com/img/location/5cd93dbfbf1ff.jpeg/88.jpg"
          alt="Platja de ses Illetes"
          style={{ width: "450px" }}
        />
      </div>
      <SubTitle>La Savina</SubTitle>
      <Text>
        Dit is het havenplaatsje waar je aankomt en weer vertrekt. Er liggen
        super mooie boten in de haven en je hebt er enkele winkeltjes en soms
        ook een klein marktje. Ook is er een zandstrandje waar je lekker pootje
        kan baden tot de ferry je weer op komt halen.
      </Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="500px"
          height="300px"
          src="https://www.youtube.com/embed/WxHuNd_KrCU"
          title="Ibiza, Formentera"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
