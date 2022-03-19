import React from "react";
import { PageTitle, Text } from "../../Constants/OverallStyles";

export default function Videos() {
  return (
    <div>
      <PageTitle>Mijn reisvideos</PageTitle>
      <Text>
        Hieronder vind je een overzicht van mijn reisvideos die ik over de jaren
        gemaakt heb.
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          gap: "16px",
        }}
      >
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/7H2yCBzruxg"
          title="Zuid Afrika, Namibie"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/IjNYY7WxJ8U"
          title="Mexico"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/WxbrZeRFe2E"
          title="Ijsland"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/22QYULQwQzc"
          title="Japan"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/grgCFuJ2vhs"
          title="Fraser Island"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/0D7q41PCqlM"
          title="Australie"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/sBlKHQUUM0k"
          title="Miami, Bahamas"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/WxHuNd_KrCU"
          title="Ibiza, Formentera"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/JW7ptyn1Ij8"
          title="Filipijnen"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/NO6V54kdayo"
          title="Zanzibar"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/-F_9c0eczTw"
          title="New York"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="350px"
          height="200px"
          src="https://www.youtube.com/embed/xl1NMuFMc-s"
          title="Azie"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
