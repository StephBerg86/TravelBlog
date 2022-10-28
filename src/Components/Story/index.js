import React from "react";
import {
  Location,
  PageTitle,
  SubTitle,
  Text,
} from "../../Constants/OverallStyles";

export default function Story({ data }) {
  return (
    <>
      <Location>{data.location}</Location>
      <PageTitle>{data.title}</PageTitle>
      <Text>{data.text}</Text>
      {data.subTitle1 ? <SubTitle>{data.subTitle1}</SubTitle> : ""}
      {data.text1 ? <Text>{data.text1}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image1a && (
          <img
            src={data.image1a}
            alt={data.alt1a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image1b && (
          <img
            src={data.image1b}
            alt={data.alt1b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image1c && (
          <img
            src={data.image1c}
            alt={data.alt1c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle2 ? <SubTitle>{data.subTitle2}</SubTitle> : ""}
      {data.text2 ? <Text>{data.text2}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image2a && (
          <img
            src={data.image2a}
            alt={data.alt2a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image2b && (
          <img
            src={data.image2b}
            alt={data.alt2b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image2c && (
          <img
            src={data.image2c}
            alt={data.alt2c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle3 ? <SubTitle>{data.subTitle3}</SubTitle> : ""}
      {data.text3 ? <Text>{data.text3}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image3a && (
          <img
            src={data.image3a}
            alt={data.alt3a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image3b && (
          <img
            src={data.image3b}
            alt={data.alt3b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image3c && (
          <img
            src={data.image3c}
            alt={data.alt3c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle4 ? <SubTitle>{data.subTitle4}</SubTitle> : ""}
      {data.text4 ? <Text>{data.text4}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image4a && (
          <img
            src={data.image4a}
            alt={data.alt4a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image4b && (
          <img
            src={data.image4b}
            alt={data.alt4b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image4c && (
          <img
            src={data.image4c}
            alt={data.alt4c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle5 ? <SubTitle>{data.subTitle5}</SubTitle> : ""}
      {data.text5 ? <Text>{data.text5}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image5a && (
          <img
            src={data.image5a}
            alt={data.alt5a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image5b && (
          <img
            src={data.image5b}
            alt={data.alt5b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image5c && (
          <img
            src={data.image5c}
            alt={data.alt5c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle6 ? <SubTitle>{data.subTitle6}</SubTitle> : ""}
      {data.text6 ? <Text>{data.text6}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image6a && (
          <img
            src={data.image6a}
            alt={data.alt6a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image6b && (
          <img
            src={data.image6b}
            alt={data.alt6b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image6c && (
          <img
            src={data.image6c}
            alt={data.alt6c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle7 ? <SubTitle>{data.subTitle7}</SubTitle> : ""}
      {data.text7 ? <Text>{data.text7}</Text> : ""}
      {data.image7 && (
        <img
          src={data.image7}
          alt={data.alt7}
          style={{
            width: "30%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image7a && (
          <img
            src={data.image7a}
            alt={data.alt7a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image7b && (
          <img
            src={data.image7b}
            alt={data.alt7b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image7c && (
          <img
            src={data.image7c}
            alt={data.alt7c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle8 ? <SubTitle>{data.subTitle8}</SubTitle> : ""}
      {data.text8 ? <Text>{data.text8}</Text> : ""}
      {data.image8 && (
        <img
          src={data.image8}
          alt={data.alt8}
          style={{
            width: "30%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image8a && (
          <img
            src={data.image8a}
            alt={data.alt8a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image8b && (
          <img
            src={data.image8b}
            alt={data.alt8b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image8c && (
          <img
            src={data.image8c}
            alt={data.alt8c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle9 ? <SubTitle>{data.subTitle9}</SubTitle> : ""}
      {data.text9 ? <Text>{data.text9}</Text> : ""}
      {data.image9 && (
        <img
          src={data.image9}
          alt={data.alt9}
          style={{
            width: "30%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image9a && (
          <img
            src={data.image9a}
            alt={data.alt9a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image9b && (
          <img
            src={data.image9b}
            alt={data.alt9b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image9c && (
          <img
            src={data.image9c}
            alt={data.alt9c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle10 ? <SubTitle>{data.subTitle10}</SubTitle> : ""}
      {data.text10 ? <Text>{data.text10}</Text> : ""}
      {data.image10 && (
        <img
          src={data.image10}
          alt={data.alt10}
          style={{
            width: "30%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image10a && (
          <img
            src={data.image10a}
            alt={data.alt10a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image10b && (
          <img
            src={data.image10b}
            alt={data.alt10b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image10c && (
          <img
            src={data.image10c}
            alt={data.alt10c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle11 ? <SubTitle>{data.subTitle11}</SubTitle> : ""}
      {data.text11 ? <Text>{data.text11}</Text> : ""}
      {data.image11 && (
        <img
          src={data.image11}
          alt={data.alt11}
          style={{
            width: "30%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image11a && (
          <img
            src={data.image11a}
            alt={data.alt11a}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image11b && (
          <img
            src={data.image11b}
            alt={data.alt11b}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image11c && (
          <img
            src={data.image11c}
            alt={data.alt11c}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.video ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            width="500px"
            height="300px"
            src={data.video}
            title={data.videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
