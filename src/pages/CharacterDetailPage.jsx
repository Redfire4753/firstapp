import { useParams } from "react-router-dom";
import { SelectCharacterByName } from "../components/characters/charactersSlice";
import { useSelector } from "react-redux";
import CharacterDetail from "../components/characters/CharacterDetail";

const CharacterDetailPage = () => {
    const { characterName } = useParams();
    const character = useSelector(SelectCharacterByName(characterName));

    return ( 
        <>
            <CharacterDetail character={character} />
        </>
     );
}
 
export default CharacterDetailPage;