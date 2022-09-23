import styled from "styled-components";

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
const PressMe = styled.button`

`;

const CharacterCards = ({name = '', onPress}) => {
    return (
            <CardWrapper>
                <CardTitle>{name}</CardTitle>
                <PressMe onClick={() => onPress()}>Hello</PressMe>
            </CardWrapper>
    )
};

export default CharacterCards