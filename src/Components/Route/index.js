import React from "react";
import {
  Location,
  PageTitle,
  SubTitle,
  RouteInfo,
  Text,
  ListItem,
} from "../../Constants/OverallStyles";
import * as S from "./styles";

export default function Route({ props }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <PageTitle>{props.title}</PageTitle>
        </div>
        {props.period && (
          <div style={{ display: "flex", gap: "4px" }}>
            <Text style={{ fontWeight: "600" }}>Reisperiode:</Text>
            <Text>{props.period}</Text>
          </div>
        )}
      </div>
      <Location style={{ marginBottom: "16px" }}>{props.location}</Location>
      <Text>{props.introtext}</Text>
      {props.text1 && <SubTitle>{props.dagTitel1}</SubTitle>}
      {props.text1 && <Text>{props.text1}</Text>}
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
      {props.slapen1 && (
        <S.Links to={props.link1}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen1}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image11 && (
          <img
            src={props.image11}
            alt={props.alt11}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image12 && (
          <img
            src={props.image12}
            alt={props.alt12}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image13 && (
          <img
            src={props.image13}
            alt={props.alt3}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text2 && <SubTitle>{props.dagTitel2}</SubTitle>}
      {props.text2 && <Text>{props.text2}</Text>}
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
      {props.slapen2 && (
        <S.Links to={props.link2}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen2}</Text>
          </S.routeTips>
        </S.Links>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image21 && (
          <img
            src={props.image21}
            alt={props.alt21}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image22 && (
          <img
            src={props.image22}
            alt={props.alt22}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image23 && (
          <img
            src={props.image23}
            alt={props.alt23}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text3 && <SubTitle>{props.dagTitel3}</SubTitle>}
      {props.text3 && <Text>{props.text3}</Text>}
      {props.todo3 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo3}</Text>
        </S.routeTips>
      )}
      {props.tip3 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip3}</Text>
        </S.routeTips>
      )}
      {props.slapen3 && (
        <S.Links to={props.link3}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen3}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image31 && (
          <img
            src={props.image31}
            alt={props.alt31}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image32 && (
          <img
            src={props.image32}
            alt={props.alt32}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image33 && (
          <img
            src={props.image33}
            alt={props.alt33}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text4 && <SubTitle>{props.dagTitel4}</SubTitle>}
      {props.text4 && <Text>{props.text4}</Text>}
      {props.todo4 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo4}</Text>
        </S.routeTips>
      )}
      {props.tip4 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip4}</Text>
        </S.routeTips>
      )}
      {props.slapen4 && (
        <S.Links to={props.link4}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen4}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image41 && (
          <img
            src={props.image41}
            alt={props.alt41}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image42 && (
          <img
            src={props.image42}
            alt={props.alt42}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image43 && (
          <img
            src={props.image43}
            alt={props.alt43}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text5 && <SubTitle>{props.dagTitel5}</SubTitle>}
      {props.text5 && <Text>{props.text5}</Text>}
      {props.todo5 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo5}</Text>
        </S.routeTips>
      )}
      {props.tip5 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip5}</Text>
        </S.routeTips>
      )}
      {props.slapen5 && (
        <S.Links to={props.link5}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen5}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image51 && (
          <img
            src={props.image51}
            alt={props.alt51}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image52 && (
          <img
            src={props.image52}
            alt={props.alt52}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image53 && (
          <img
            src={props.image53}
            alt={props.alt53}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text6 && <SubTitle>{props.dagTitel6}</SubTitle>}
      {props.text6 && <Text>{props.text6}</Text>}
      {props.todo6 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo6}</Text>
        </S.routeTips>
      )}
      {props.tip6 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip6}</Text>
        </S.routeTips>
      )}
      {props.slapen6 && (
        <S.Links to={props.link6}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen6}</Text>
          </S.routeTips>
        </S.Links>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image61 && (
          <img
            src={props.image61}
            alt={props.alt61}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image62 && (
          <img
            src={props.image62}
            alt={props.alt62}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image63 && (
          <img
            src={props.image63}
            alt={props.alt63}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text7 && <SubTitle>{props.dagTitel7}</SubTitle>}
      {props.text7 && <Text>{props.text7}</Text>}
      {props.todo7 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo7}</Text>
        </S.routeTips>
      )}
      {props.tip7 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip7}</Text>
        </S.routeTips>
      )}
      {props.slapen7 && (
        <S.Links to={props.link7}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen7}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image71 && (
          <img
            src={props.image71}
            alt={props.alt71}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image72 && (
          <img
            src={props.image72}
            alt={props.alt72}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image73 && (
          <img
            src={props.image73}
            alt={props.alt73}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text8 && <SubTitle>{props.dagTitel8}</SubTitle>}
      {props.text8 && <Text>{props.text8}</Text>}
      {props.todo8 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo8}</Text>
        </S.routeTips>
      )}
      {props.tip8 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip8}</Text>
        </S.routeTips>
      )}
      {props.slapen8 && (
        <S.Links to={props.link8}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen8}</Text>
          </S.routeTips>
        </S.Links>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image81 && (
          <img
            src={props.image81}
            alt={props.alt81}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image82 && (
          <img
            src={props.image82}
            alt={props.alt82}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image83 && (
          <img
            src={props.image83}
            alt={props.alt83}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text9 && <SubTitle>{props.dagTitel9}</SubTitle>}
      {props.text9 && <Text>{props.text9}</Text>}
      {props.todo9 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo9}</Text>
        </S.routeTips>
      )}
      {props.tip9 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip9}</Text>
        </S.routeTips>
      )}
      {props.slapen9 && (
        <S.Links to={props.link9}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen9}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image91 && (
          <img
            src={props.image91}
            alt={props.alt91}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image92 && (
          <img
            src={props.image92}
            alt={props.alt92}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image93 && (
          <img
            src={props.image93}
            alt={props.alt93}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text10 && <SubTitle>{props.dagTitel10}</SubTitle>}
      {props.text10 && <Text>{props.text10}</Text>}
      {props.todo10 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo10}</Text>
        </S.routeTips>
      )}
      {props.tip10 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip10}</Text>
        </S.routeTips>
      )}
      {props.slapen10 && (
        <S.Links to={props.link10}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen10}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image101 && (
          <img
            src={props.image101}
            alt={props.alt101}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image102 && (
          <img
            src={props.image102}
            alt={props.alt102}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image103 && (
          <img
            src={props.image103}
            alt={props.alt103}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text11 && <SubTitle>{props.dagTitel11}</SubTitle>}
      {props.text11 && <Text>{props.text11}</Text>}
      {props.todo11 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo11}</Text>
        </S.routeTips>
      )}
      {props.tip11 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip11}</Text>
        </S.routeTips>
      )}
      {props.slapen11 && (
        <S.Links to={props.link11}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen11}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image111 && (
          <img
            src={props.image111}
            alt={props.alt111}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image112 && (
          <img
            src={props.image112}
            alt={props.alt112}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image113 && (
          <img
            src={props.image113}
            alt={props.alt113}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text12 && <SubTitle>{props.dagTitel12}</SubTitle>}
      {props.text12 && <Text>{props.text12}</Text>}
      {props.todo12 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo12}</Text>
        </S.routeTips>
      )}
      {props.tip12 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip12}</Text>
        </S.routeTips>
      )}
      {props.slapen12 && (
        <S.Links to={props.link12}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen12}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image121 && (
          <img
            src={props.image121}
            alt={props.alt121}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image122 && (
          <img
            src={props.image122}
            alt={props.alt122}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image123 && (
          <img
            src={props.image123}
            alt={props.alt123}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text13 && <SubTitle>{props.dagTitel13}</SubTitle>}
      {props.text13 && <Text>{props.text13}</Text>}
      {props.todo13 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo13}</Text>
        </S.routeTips>
      )}
      {props.tip13 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip13}</Text>
        </S.routeTips>
      )}
      {props.slapen13 && (
        <S.Links to={props.link13}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen13}</Text>
          </S.routeTips>
        </S.Links>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image131 && (
          <img
            src={props.image131}
            alt={props.alt131}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image132 && (
          <img
            src={props.image132}
            alt={props.alt132}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image133 && (
          <img
            src={props.image133}
            alt={props.alt133}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text14 && <SubTitle>{props.dagTitel14}</SubTitle>}
      {props.text14 && <Text>{props.text14}</Text>}
      {props.todo14 && (
        <S.routeTips>
          <RouteInfo>To do:</RouteInfo>
          <Text>{props.todo14}</Text>
        </S.routeTips>
      )}
      {props.tip14 && (
        <S.routeTips>
          <RouteInfo>Tip:</RouteInfo>
          <Text>{props.tip14}</Text>
        </S.routeTips>
      )}
      {props.slapen14 && (
        <S.Links to={props.link14}>
          <S.routeTips>
            <RouteInfo>Slapen:</RouteInfo>
            <Text>{props.slapen14}</Text>
          </S.routeTips>
        </S.Links>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {props.image141 && (
          <img
            src={props.image141}
            alt={props.alt141}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image142 && (
          <img
            src={props.image142}
            alt={props.alt142}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image143 && (
          <img
            src={props.image143}
            alt={props.alt143}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.important1 && (
        <>
          <Location style={{ marginTop: "36px" }}>
            Belangrijke tips voor {props.location}
          </Location>
          <ul>
            <li>
              <ListItem>{props.important1}</ListItem>
            </li>
            <li>
              <ListItem>{props.important2}</ListItem>
            </li>
            <li>
              <ListItem>{props.important3}</ListItem>
            </li>
            <li>
              <ListItem>{props.important4}</ListItem>
            </li>
            <li>
              <ListItem>{props.important5}</ListItem>
            </li>
            <li>
              <ListItem>{props.important6}</ListItem>
            </li>
            <li>
              <ListItem>{props.important7}</ListItem>
            </li>
            <li>
              <ListItem>{props.important8}</ListItem>
            </li>
          </ul>
        </>
      )}
    </>
  );
}
