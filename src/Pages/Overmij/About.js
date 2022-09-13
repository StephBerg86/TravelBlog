import React from "react";
import { PageTitle, SubTitle, Text } from "../../Constants/OverallStyles";
import ContactForm from "./ContactForm";
import Developer from "../../Images/About/developer.jpg";
import Traveler from "../../Images/About/traveler.jpg";
import Lissabon from "../../Images/About/lissabon.jpg";
import Japan from "../../Images/About/japan.jpg";
import IJsland from "../../Images/About/ijsland.jpg";
import Linkedin from "../../Images/About/linkedin.png";
import Github from "../../Images/About/github.png";

export default function About() {
  return (
    <div>
      <PageTitle>Over mij</PageTitle>
      <Text>
        Mijn naam is Stephanie en ik ben gek op reizen. Daarnaast heb ik in 2020
        een carriere switch gemaakt en werk ik nu als frontend developer. Deze
        site is dus ook een oefenproject om te werken aan mijn
        programmeerskills. (Dus vergeef het me als er af en toe misschien iets
        mis gaat op de site.)
      </Text>
      <SubTitle style={{ marginTop: "8px" }}>Waarom een reisblog? </SubTitle>
      <Text>
        Als ik op reis ga vind ik het heerlijk om van tevoren al van alles op te
        zoeken over de bestemming. Ik hoef dan geen strakke planning te maken
        voor mijn reis, maar ik weet wel precies wat er allemaal te doen is op
        de bestemming. Omdat ik vaak vragen krijg over de landen waar ik ben
        geweest schrijf ik alles wat ik gedaan heb ook altijd op in een
        notitieboekje. Nu ik zelf websites kan maken leek dit mij het perfecte
        moment om er een online reisblog van te maken zodat ik ook Het was
        altijd al mijn idee om dit een keer online te andere mensen kan
        informeren of inspireren. <br />
        Deze aantekeningen in mijn notitieboekjes zijn niet in verhaal vorm
        geschreven en sommige reizen zijn al langere tijd terug gemaakt. Daarom
        kost het even wat tijd om al deze verhalen online te zetten en daarom is
        deze site voorlopig ook nog niet af, maar neem gerust vast een kijkje.
      </Text>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={Traveler}
          alt="Traveler"
          style={{
            width: "30%",
            marginBottom: "16px",
            maxWidth: "250px",
          }}
        />
        <img
          src={IJsland}
          alt="Traveler"
          style={{
            width: "30%",
            marginBottom: "16px",
            maxWidth: "250px",
          }}
        />
        <img
          src={Japan}
          alt="Developer"
          style={{
            width: "30%",
            marginBottom: "16px",
            maxWidth: "250px",
          }}
        />
        <img
          src={Lissabon}
          alt="Developer"
          style={{
            width: "30%",
            marginBottom: "16px",
            maxWidth: "250px",
          }}
        />
      </div>

      <SubTitle style={{ marginTop: "8px" }}>Frontend Developer</SubTitle>
      <Text>
        Zoals ik net al kort vertelde heb ik in 11 weken een opleiding gevolgd
        tot full-stack developer bij Codaisseur en ben ik nu werkzaam als
        frontend developer. <br />
        Ik begon mijn carriere als filmmaker, content creator en social media
        strateeg. Tijdens mijn carriere ben ik veel bezig geweest met design en
        het creeren van gebruiksvriendelijke apps. Deze kennis kan ik nu goed
        gebruiken bij mijn huidige rol als frontend developer.
        <br />
        <br />
        <div style={{ marginBottom: "16px" }}>
          Wil je meer weten over mijn werkervaring? Neem dan een kijkje op mijn
          LinkedIn pagina, of kijk op mijn Github.
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img
            src={Linkedin}
            alt="Developer"
            style={{
              width: "15%",
              marginBottom: "16px",
              maxWidth: "281px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/stephanie-bergman/",
                "_blank"
              );
            }}
          />
          <img
            src={Developer}
            alt="Developer"
            style={{
              width: "15%",
              marginBottom: "16px",
              maxWidth: "281px",
            }}
          />
          <img
            src={Github}
            alt="Developer"
            style={{
              width: "15%",
              marginBottom: "16px",
              maxWidth: "281px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.open("https://github.com/StephBerg86", "_blank");
            }}
          />
        </div>
      </Text>

      <SubTitle style={{ marginTop: "8px" }}>Contact</SubTitle>
      <Text>
        Heb je tips ter verbetering van dit blog? Of heb je ergens vragen over?
        Stuur mij dan een bericht. Dat kan via Linkedin of via het onderstaande
        formulier.
      </Text>
      <ContactForm />
    </div>
  );
}
