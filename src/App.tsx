import { useState, useEffect } from "react";

import styled from "styled-components";
import ListItem from "./components/ListItem";
import { useRecoilState } from "recoil";
import { countryListState } from "./atoms";
import { useForm } from "react-hook-form";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0px;
  background-color: #535353;
`;

const MainTitle = styled.h1`
  margin: 10px 0px;
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
  max-width: 500px;
`;

const SectionTitle = styled.h2`
  margin: 15px 0px;
  color: #dadada;
  font-size: 1.25rem;
`;

const ListContainer = styled.ul`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  background-color: #e0dede56;
  width: 100%;
  height: 100%;
`;

const InputContainerForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyleInput = styled.input`
  border: none;
  width: 70%;
  border-radius: 3px;
`;

const StyleButton = styled.button`
  border: none;
  margin-left: 5px;
  padding: 10px 20px;
  border-radius: 3px;
`;

function App() {
  const [counrtryList, setCountryList] = useRecoilState(countryListState);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("countryList"))) return;

    setCountryList(JSON.parse(localStorage.getItem("countryList")));
  }, []);

  const updateLocalStorge = (newList) => {
    localStorage.setItem("countryList", JSON.stringify(newList));
  };
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    console.log(data.newList);
    const newListItems = {
      id: Date.now(),
      contents: data.newList,
      type: "want",
    };

    setCountryList((oldList) => {
      updateLocalStorge([...oldList, newListItems]);
      return [...oldList, newListItems];
    });
  };

  return (
    <>
      <MainContainer>
        <MainTitle>나만의 여행지 리스토</MainTitle>

        <SectionContainer>
          <SectionTitle>가고싶은 나라를 써보아요.</SectionTitle>

          <InputContainerForm onSubmit={handleSubmit(onSubmitHandler)}>
            <StyleInput
              {...register("newList", {
                required: true,
              })}
            />
            <StyleButton>끼양</StyleButton>
          </InputContainerForm>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>가고싶은 나라</SectionTitle>

          <ListContainer>
            {counrtryList
              .filter((data) => data.type === "want")
              .map((data) => {
                return <ListItem data={data} key={data.id} />;
              })}
          </ListContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle>가본 나라들</SectionTitle>

          <ListContainer>
            {counrtryList
              .filter((data) => data.type === "went")
              .map((data) => {
                return <ListItem data={data} key={data.id} />;
              })}
          </ListContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionTitle> 나라민수야 고마워</SectionTitle>

          <ListContainer>
            {counrtryList
              .filter((data) => data.type === "good")
              .map((data) => {
                return <ListItem data={data} key={data.id} />;
              })}
          </ListContainer>
        </SectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
