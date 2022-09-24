import { PageLinks } from "../styled/divs";
import { NavLink } from "react-router-dom";


const CharacterCard = ({name}) => {
    return (
        <PageLinks>
            <NavLink to={`/Characters/${name}`} key={name} >{name}</NavLink>
        </PageLinks>
    )
};

export default CharacterCard;