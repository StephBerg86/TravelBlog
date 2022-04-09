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
      {data.subTitle7 ? <SubTitle>{data.subTitle7}</SubTitle> : ""}
      {data.text7 ? <Text>{data.text7}</Text> : ""}
      {data.subTitle8 ? <SubTitle>{data.subTitle8}</SubTitle> : ""}
      {data.text8 ? <Text>{data.text8}</Text> : ""}
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
