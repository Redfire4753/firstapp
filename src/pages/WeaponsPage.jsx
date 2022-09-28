import { BodyWrapper } from "../components/styled/divs";
import { SelectAllWeapons } from "../components/weapons/weaponsSlice";
import WeaponCard from "../components/weapons/WeaponCard";
import { useSelector } from "react-redux";

const WeaponsPage = () => {
    const weapons = useSelector(SelectAllWeapons);

    return ( 
        <BodyWrapper>
            {weapons.map(weapon => <WeaponCard name={weapon.name} />)}
        </BodyWrapper>
     );
}
 
export default WeaponsPage;