import React from "react";
import {
  Location,
  PageTitle,
  SubTitle,
  RouteInfo,
  Text,
} from "../../Constants/OverallStyles";
import * as S from "./styles";

export default function Route({ props }) {
  return (
    <>
      <PageTitle>{props.title}</PageTitle>
      <Location style={{ marginBottom: "16px" }}>{props.location}</Location>
      <Text>{props.introtext}</Text>
      {props.text1 && <SubTitle>Dag 1</SubTitle>}
      {props.text1 && <Text>{props.text1}</Text>}
      {props.slapen1 && (
        <S.Links to={props.link1}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen1}</Text>
          </S.routeTips>
        </S.Links>
      )}
      {props.todo1 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo1}</Text>
        </S.routeTips>
      )}
      {props.tip1 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip1}</Text>
        </S.routeTips>
      )}
      {props.image1 && (
        <img src={props.image1} alt={props.alt1} style={{ width: "400px" }} />
      )}

      {props.text2 && <SubTitle>Dag 2</SubTitle>}
      {props.text2 && <Text>{props.text2}</Text>}
      {props.slapen2 && (
        <S.Links to={props.link1}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen2}</Text>
          </S.routeTips>
        </S.Links>
      )}
      {props.todo2 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo2}</Text>
        </S.routeTips>
      )}
      {props.tip2 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip2}</Text>
        </S.routeTips>
      )}
      {props.image2 && (
        <img src={props.image2} alt={props.alt2} style={{ width: "400px" }} />
      )}
    </>
  );
}
