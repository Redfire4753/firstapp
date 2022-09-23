import { useSelector } from "react-redux";
import CharacterCard from "../components/characters/CharacterCard";
import { SelectAllCharacters } from "../components/characters/charactersSlice";
import styled from "styled-components";

const CharacterWrapper = styled.div`
       width: 100vw;
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
    background-color: pink;
    gap: 28px;
    padding: 56px 0px;
`

const CharacterPage = () => {
    const characters = useSelector(SelectAllCharacters);

    return ( 
        <CharacterWrapper>
            <CardContainer>
                {characters.map(character => <CharacterCard key={character.name} name={character.name} />)}
            </CardContainer>
        </CharacterWrapper>
        
     );
}
 
export default CharacterPage;