import styled from "styled-components";
import { PageLinks } from "../../pages/HomePage";
import { NavLink } from "react-router-dom";

const CardWrapper = styled.div`
    width: 150px;
    height: 150px;
    border: 3px solid #e6c177;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const CardTitle = styled.p`
    padding: 0;
    margin: 0;
`;

const CharacterCard = ({name}) => {
    return (
            <PageLinks>
                <NavLink to={`/Characters/${name}`} key={name} >{name}</NavLink>
            </PageLinks>
    )
};

export default CharacterCard