import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SelectWeaponByName } from "../components/weapons/weaponsSlice";
import WeaponDetail from '../components/weapons/WeaponDetail';

const WeaponWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px red solid;
`;

const WeaponDetailPage = () => {
  const { weaponName } = useParams();
  const weapon = useSelector(SelectWeaponByName(weaponName));

  return (
    <WeaponWrapper>
      <WeaponDetail weapon={weapon} />
    </WeaponWrapper>
  );
};

export default WeaponDetailPage;