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
      {data.subTitle2 ? <SubTitle>{data.subTitle2}</SubTitle> : ""}
      {data.text2 ? <Text>{data.text2}</Text> : ""}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.image1 && (
          <img
            src={data.image1}
            alt={data.alt1}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image2 && (
          <img
            src={data.image2}
            alt={data.alt2}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {data.image3 && (
          <img
            src={data.image3}
            alt={data.alt3}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>
      {data.subTitle3 ? <SubTitle>{data.subTitle3}</SubTitle> : ""}
      {data.text3 ? <Text>{data.text3}</Text> : ""}
      {data.subTitle4 ? <SubTitle>{data.subTitle4}</SubTitle> : ""}
      {data.text4 ? <Text>{data.text4}</Text> : ""}
      {data.subTitle5 ? <SubTitle>{data.subTitle5}</SubTitle> : ""}
      {data.text5 ? <Text>{data.text5}</Text> : ""}
      {data.subTitle6 ? <SubTitle>{data.subTitle6}</SubTitle> : ""}
      {data.text6 ? <Text>{data.text6}</Text> : ""}
      {data.image6 && (
        <img
          src={data.image6}
          alt={data.alt6}
          style={{
            width: "35%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      {data.subTitle7 ? <SubTitle>{data.subTitle7}</SubTitle> : ""}
      {data.text7 ? <Text>{data.text7}</Text> : ""}
      {data.image7 && (
        <img
          src={data.image7}
          alt={data.alt7}
          style={{
            width: "35%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      {data.subTitle8 ? <SubTitle>{data.subTitle8}</SubTitle> : ""}
      {data.text8 ? <Text>{data.text8}</Text> : ""}
      {data.image8 && (
        <img
          src={data.image8}
          alt={data.alt8}
          style={{
            width: "35%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      {data.subTitle9 ? <SubTitle>{data.subTitle9}</SubTitle> : ""}
      {data.text9 ? <Text>{data.text9}</Text> : ""}
      {data.image9 && (
        <img
          src={data.image9}
          alt={data.alt9}
          style={{
            width: "35%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      {data.subTitle10 ? <SubTitle>{data.subTitle10}</SubTitle> : ""}
      {data.text10 ? <Text>{data.text10}</Text> : ""}
      {data.image10 && (
        <img
          src={data.image10}
          alt={data.alt10}
          style={{
            width: "35%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
      {data.subTitle11 ? <SubTitle>{data.subTitle11}</SubTitle> : ""}
      {data.text11 ? <Text>{data.text11}</Text> : ""}
      {data.image11 && (
        <img
          src={data.image11}
          alt={data.alt11}
          style={{
            width: "35%",
            display: "block",
            margin: "auto auto 16px auto",
          }}
        />
      )}
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
