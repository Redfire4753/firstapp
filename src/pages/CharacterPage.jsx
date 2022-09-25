import { useSelector } from "react-redux";
import CharacterCard from "../components/characters/CharacterCard";
import { SelectAllCharacters } from "../components/characters/charactersSlice";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    background-color: orange;
`;

const CardContainer = styled.div`
    max-width: 1600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(132, 32, 22, 255);
    gap: 28px;
    padding: 56px 0px;
    box-shadow: 10px 0px 5px rgba(29, 17, 21, 255),
        -10px 0px 5px rgba(29, 17, 21, 255);
`;

const CharacterPage = () => {
    const characters = useSelector(SelectAllCharacters);

    return (
        <CharacterWrapper>
            <CardContainer>
                <p>Base Characters</p>
                {characters
                    .filter((character) => character.secret === false)
                    .map((character) => (
                        <CharacterCard
                            key={character.name}
                            name={character.name}
                        />
                    ))}
                <p className="block">Secret Characters</p>
                {characters
                    .filter((character) => character.secret === true)
                    .map((character) => (
                        <CharacterCard
                            key={character.name}
                            name={character.name}
                        />
                    ))}
            </CardContainer>
        </CharacterWrapper>
    );
};

export default CharacterPage;
