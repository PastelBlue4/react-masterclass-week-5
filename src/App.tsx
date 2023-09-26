import { useState } from "react";

import styled from "styled-components";
import ListItem from "./components/ListItem";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100svh;
  background-color: #535353;
`;

const MainTitle = styled.h1`
  margin: 30px 0px 10px 0px;
  color: #e9e9e9;
  font-size: 1.5rem;
  font-weight: 600;
`;

const SectionContainer = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #999999;
  height: 300px;
  margin-top: 15px;
  border-radius: 1.25%;
`;

const SectionTitle = styled.h2`
  margin: 20px 0px;
  color: #e9e9e9;
  font-size: 1.25rem;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e0dede56;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <MainContainer>
        <MainTitle>나만의 여행지 리스토</MainTitle>

        <SectionContainer>
          <SectionTitle>가고싶은 나라</SectionTitle>

          <ListContainer>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </ListContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>가본 나라들</SectionTitle>

          <ListContainer>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </ListContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle> 나라민수야 고마워</SectionTitle>

          <ListContainer>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </ListContainer>
        </SectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
