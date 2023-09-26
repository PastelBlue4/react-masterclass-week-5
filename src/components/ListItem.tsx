import styled from "styled-components";
import { countryListState } from "../atoms";
import { useRecoilState } from "recoil";

const ListItemsContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0px;
  color: #1f1f1f;
`;

const ListContents = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const TwoButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const StyledButton = styled.button`
  background-color: #6e6e6e;
  border: none;
  padding: 7px 15px;
  border-radius: 4px;

  color: #ececec;
`;

export default function ListItem({ data }: any) {
  const { contents, id, type } = data;

  const updateLocalStorge = (newList) => {
    localStorage.setItem("countryList", JSON.stringify(newList));
  };

  const [counrtryList, setCountryList] = useRecoilState(countryListState);

  const onDelete = () => {
    setCountryList((oldList) => {
      const targetIndex = oldList.findIndex((item: any) => item.id === id);

      console.log(oldList);

      updateLocalStorge([
        ...oldList.slice(0, targetIndex),
        ...oldList.slice(targetIndex + 1),
      ]);

      return [
        ...oldList.slice(0, targetIndex),
        ...oldList.slice(targetIndex + 1),
      ];
    });
  };

  const onTyping = (to: string) => {
    setCountryList((oldList): any => {
      const targetIndex = oldList.findIndex((item: any) => item.id === id);

      const newListItem = { id, contents, type: to };

      updateLocalStorge([
        ...oldList.slice(0, targetIndex),
        newListItem,
        ...oldList.slice(targetIndex + 1),
      ]);

      return [
        ...oldList.slice(0, targetIndex),
        newListItem,
        ...oldList.slice(targetIndex + 1),
      ];
    });
  };

  const onRecommnded = () => {
    return;
  };

  return (
    <ListItemsContainer>
      <ListContents>{contents}</ListContents>
      <ButtonContainer>
        {type === "want" ? (
          <TwoButtonContainer>
            <StyledButton
              onClick={() => {
                onTyping("went");
              }}
            >
              가봄
            </StyledButton>
            <StyledButton
              onClick={() => {
                onDelete();
              }}
            >
              생각해보니 별로네
            </StyledButton>
          </TwoButtonContainer>
        ) : type === "went" ? (
          <TwoButtonContainer>
            <StyledButton
              onClick={() => {
                onDelete();
              }}
            >
              구라임 ㅋ
            </StyledButton>
            <StyledButton
              onClick={() => {
                onTyping("good");
              }}
            >
              ㄹㅇ 밥도둑밥도둑
            </StyledButton>
          </TwoButtonContainer>
        ) : (
          <StyledButton
            onClick={() => {
              onTyping("went");
            }}
          >
            사실 별로였음
          </StyledButton>
        )}
      </ButtonContainer>
    </ListItemsContainer>
  );
}
