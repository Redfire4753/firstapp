import { useParams } from "react-router-dom";
import { SelectCharacterByName } from "../components/characters/charactersSlice";
import { useSelector } from "react-redux";
import CharacterDetail from "../components/characters/CharacterDetail";
import styled from "styled-components";

const CharacterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterDetailPage = () => {
  const { characterName } = useParams();
  const character = useSelector(SelectCharacterByName(characterName));

  return (
    <CharacterWrapper>
      <CharacterDetail character={character} />
    </CharacterWrapper>
  );
};

export default CharacterDetailPage;
