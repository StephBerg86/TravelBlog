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
      {props.text1 && <SubTitle>Dag 1</SubTitle>}
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
        {props.image1 && (
          <img
            src={props.image1}
            alt={props.alt1}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image2 && (
          <img
            src={props.image2}
            alt={props.alt2}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image3 && (
          <img
            src={props.image3}
            alt={props.alt3}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text2 && <SubTitle>Dag 2</SubTitle>}
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

      {props.text3 && <SubTitle>Dag 3</SubTitle>}
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
        {props.image4 && (
          <img
            src={props.image4}
            alt={props.alt4}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image5 && (
          <img
            src={props.image5}
            alt={props.alt5}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image6 && (
          <img
            src={props.image6}
            alt={props.alt6}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text4 && <SubTitle>Dag 4</SubTitle>}
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
        {props.image7 && (
          <img
            src={props.image7}
            alt={props.alt7}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image8 && (
          <img
            src={props.image8}
            alt={props.alt8}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image9 && (
          <img
            src={props.image9}
            alt={props.alt9}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text5 && <SubTitle>Dag 5</SubTitle>}
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
        {props.image10 && (
          <img
            src={props.image10}
            alt={props.alt10}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
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
      </div>

      {props.text6 && <SubTitle>Dag 6</SubTitle>}
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

      {props.text7 && <SubTitle>Dag 7</SubTitle>}
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
        {props.image13 && (
          <img
            src={props.image13}
            alt={props.alt13}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image14 && (
          <img
            src={props.image14}
            alt={props.alt14}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image15 && (
          <img
            src={props.image15}
            alt={props.alt15}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text8 && <SubTitle>Dag 8</SubTitle>}
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

      {props.text9 && <SubTitle>Dag 9</SubTitle>}
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
        {props.image16 && (
          <img
            src={props.image16}
            alt={props.alt16}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image17 && (
          <img
            src={props.image17}
            alt={props.alt17}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image18 && (
          <img
            src={props.image18}
            alt={props.alt18}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text10 && <SubTitle>Dag 10</SubTitle>}
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
        {props.image19 && (
          <img
            src={props.image19}
            alt={props.alt19}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image20 && (
          <img
            src={props.image20}
            alt={props.alt20}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image21 && (
          <img
            src={props.image21}
            alt={props.alt21}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text11 && <SubTitle>Dag 11</SubTitle>}
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
        {props.image24 && (
          <img
            src={props.image24}
            alt={props.alt24}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text12 && <SubTitle>Dag 12</SubTitle>}
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
        {props.image25 && (
          <img
            src={props.image25}
            alt={props.alt25}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image26 && (
          <img
            src={props.image26}
            alt={props.alt26}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image27 && (
          <img
            src={props.image27}
            alt={props.alt27}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
      </div>

      {props.text13 && <SubTitle>Dag 13</SubTitle>}
      {props.text11 && <Text>{props.text13}</Text>}
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

      {props.text14 && <SubTitle>Dag 14</SubTitle>}
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
        {props.image28 && (
          <img
            src={props.image28}
            alt={props.alt28}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image29 && (
          <img
            src={props.image29}
            alt={props.alt29}
            style={{ width: "30%", marginBottom: "16px" }}
          />
        )}
        {props.image30 && (
          <img
            src={props.image30}
            alt={props.alt30}
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
