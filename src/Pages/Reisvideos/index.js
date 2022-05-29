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
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/7H2yCBzruxg"
          title="Zuid Afrika, Namibie"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/IjNYY7WxJ8U"
          title="Mexico"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/WxbrZeRFe2E"
          title="Ijsland"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/22QYULQwQzc"
          title="Japan"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/grgCFuJ2vhs"
          title="Fraser Island"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/0D7q41PCqlM"
          title="Australie"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/sBlKHQUUM0k"
          title="Miami, Bahamas"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/WxHuNd_KrCU"
          title="Ibiza, Formentera"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/JW7ptyn1Ij8"
          title="Filipijnen"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/NO6V54kdayo"
          title="Zanzibar"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/-F_9c0eczTw"
          title="New York"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="550vw"
          height="350vh"
          src="https://www.youtube.com/embed/xl1NMuFMc-s"
          title="Azie"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
