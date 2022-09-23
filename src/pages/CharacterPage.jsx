import { useSelector } from "react-redux";
import CharacterCard from "../components/characters/CharacterCard";
import { SelectAllCharacters } from "../components/characters/charactersSlice";
import { BodyWrapper } from "./HomePage";

const CharacterPage = () => {
    const characters = useSelector(SelectAllCharacters);

    return ( 
        <BodyWrapper>
            {characters.map(character => <CharacterCard key={character.name} name={character.name} />)}
        </BodyWrapper>
     );
}
 
export default CharacterPage;