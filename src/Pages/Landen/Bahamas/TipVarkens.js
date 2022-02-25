import React from "react";
import { PageTitle, SubTitle, Text } from "../../../Constants/OverallStyles";

export default function TipVarkens() {
  return (
    <>
      <PageTitle>
        Alles wat je moet weten over zwemmen met varkens in de Bahamas
      </PageTitle>
      <Text>
        Toen ik voor het eerst foto's van zwemmende varkentjes in helderblauw
        water zag, stond dit direct bovenaan mijn bucketlist. Mijn ticket naar
        Miami had ik al geboekt en omdat ik toch 'in de buurt' was, heb ik
        besloten om de zwemmende varkens van mijn bucketlist af te strepen.
      </Text>
      <Text>
        De Bahama's liggen op ruim een uur vliegen vanaf Miami en bestaan uit
        700 eilandjes waarvan er zo'n 35 bewoond zijn. Meestal vlieg je op
        Nassau, de hoofdstad van de Bahamas en de plek waar 70% van de inwoners
        leven.
      </Text>
      <div style={{ display: "flex", gap: "16px" }}>
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-720x480/0a/9e/26/3e.jpg"
          alt="Zwemmende varkens"
          style={{ width: "450px", marginBottom: "16px" }}
        />
        <div>
          <SubTitle>Hoe kom je er?</SubTitle>
          <Text>
            Vanuit Nassau kun je met de boot of met het vliegtuig naar
            Georgetown, de hoofdstad van Great Exuma. Als je de varkens wilt
            zien zwemmen moet je naar Pig Beach, dit is één van de eilanden van
            de Exuma Cays. Pig Beach is een klein eiland waar je niet kunt
            verblijven dus je kunt het beste Georgetown als uitvalsbasis
            gebruiken. Vanuit daar kun je een privéboot huren of je boekt een
            excursie. Ik heb zelf een excursie geboekt waarmee ik in één dag
            alle bezienswaardigheden van de Exuma Cays kon zien.
          </Text>

          <SubTitle>Zwemmende varkens</SubTitle>
          <Text>
            Hoe de varkens precies op Pig Beach gekomen zijn weet niemand. Er
            gaan verschillende verhalen rond maar persoonlijk geloof ik het
            verhaal dat de varkens er neergezet zijn om het toerisme op de
            Bahama's te stimuleren. Als je de baai in komt varen dan komen de
            grootste varkens al op je af gezwommen. Een hele groep zwemmende
            varkens in het mooiste blauwe water, met op de achtergrond een
            parelwit strand. Dit was echt een onbeschrijfelijk mooi moment. De
            boot meert aan op het strandje en hier komen ook de kleine
            varkentjes je tegemoet.
          </Text>
        </div>
      </div>
      <SubTitle>Keerzijde</SubTitle>
      <Text>
        Ondanks dat ik het heel bijzonder vond om de varkens te zien zwemmen,
        gaf het me ook een naar gevoel en wilde ik er zo snel mogelijk weer weg.
        De reden daarvan waren mijn medetoeristen en de leiding van de excursie.
        Je wordt door de tourleiding aangemoedigd om de kleine varkens op te
        tillen en ze eten te geven. Superleuk voor Instagram, zo'n foto met een
        klein varkentje in je armen. De keerzijde is dat je non-stop de kleine
        varkens hoort gillen omdat ze helemaal niet opgetild willen worden. Ook
        zag ik dat er hele zakken chips, muffins en koeken aan de varkens
        gegeven werden. Toen ik net twee weken thuis was hoorde ik op het nieuws
        dat er zes varkens overleden waren nadat toeristen de varkens alcohol
        hadden gevoerd. Dit verbaasd mij niks en ik vind het een hele kwalijke
        zaak. Mocht je zelf naar Pig Beach gaan, laat de varkens dan lekker op
        de grond lopen en geef ze geen junkfood.
      </Text>

      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <Text style={{ fontWeight: "bold" }}>
            Ik was in februari 2017 op de Bahamas. Inmiddels is er gelukkig een
            hoop veranderd. Toen ik ging was er bijna geen informatie te vinden
            over hoe je naar de vakens kon komen en nu lees je het overal. Ook
            zijn ze nu strenger geworden wat betreft de regels rondom de
            varkens. Je mag ze niet zomaar meer oppakken en ook mag je ze alleen
            fruit en groente voeren.
          </Text>
          <SubTitle>Excursie</SubTitle>{" "}
          <Text>
            Er zijn diverse bedrijven die dag excursies aanbieden naar Pig
            Beach. Deze excursies zijn prijzig maar zeker de moeite waard. Je
            gaat namelijk niet alleen naar Pig Beach. Je stopt o.a. een eiland
            vol iguana's die je sla mag voeren, je kan zwemmen met nurse sharks,
            je komt langs een vliegtuig van Pablo Escobar wat je vanuit de boot
            op de bodem kunt zien liggen en je gaat snorkelen op de mooiste
            plekken.
          </Text>
          <SubTitle>Prijzen</SubTitle>
          <Text>
            De Bahama's is geen goedkope vakantiebestemmig. Zeker niet als je,
            net als ik, alleen reist. Er zijn weinig hostels te vinden en je
            betaald vaak per hotelkamer i.p.v. per persoon. Met een groepje gaan
            is het goedkoopst omdat je dan ook je eigen vliegtuig kan charteren.
            (hoe vet!). Toen ik ging kon je via Makers Air een vliegtuig
            charteren voor €500,- en er kunnen 6 personen in een vliegtuig.
          </Text>
        </div>

        <img
          src="https://www.sailcloudybay.com/wp-content/uploads/2020/01/IMG_4611.jpg"
          alt="nurse sharks"
          style={{ width: "450px" }}
        />
      </div>

      <SubTitle>Miami</SubTitle>
      <Text>
        Je kunt een vakantie naar de Bahamas heel goed combineren met een
        citytrip naar Miami. Hieronder zie je de video van mijn reis naar Miami
        en de Bahamas.
      </Text>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="500px"
          height="300px"
          src="https://www.youtube.com/embed/sBlKHQUUM0k"
          title="Miami, Bahamas"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
