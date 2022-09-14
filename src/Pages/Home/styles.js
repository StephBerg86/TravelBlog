import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  align-content: center;
  gap: 24px;
  overflow: hidden;

  &.a {
    max-height: 500px;
  }
  &.b {
    max-height: 1000px;
  }
  &.c {
    max-height: 1400px;
  }
  &.d {
    max-height: 1700px;
  }
  &.e {
    max-height: 2100px;
  }
  &.f {
    max-height: 2400px;
  }
  &.g {
    max-height: 1400px;
  }
  &.h {
    max-height: 1400px;
  }
  &.i {
    max-height: 1400px;
  }
  &.j {
    max-height: 1400px;
  }
  &.k {
    max-height: 1400px;
  }
  &.l {
    max-height: 1400px;
  }
  &.m {
    max-height: 1400px;
  }
  &.verylong {
    max-height: 2800px; // moet genoeg zijn om alle stories te showen
  }
`;
