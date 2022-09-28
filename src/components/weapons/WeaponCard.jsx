import { PageLinks } from "../styled/divs";
import { NavLink } from "react-router-dom";


const WeaponCard = ({name}) => {
    return (
        <PageLinks>
            <NavLink to={`/Weapons/${name}`} key={name} >{name}</NavLink>
        </PageLinks>
    )
};

export default WeaponCard;