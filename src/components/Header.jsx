import styled from "styled-components";
const HeaderText = styled.h1`
    margin: 0;
    color: rgba(255, 202, 53, 255);
    text-shadow: 2px 2px 3px brown;
`;
const HeaderWrapper = styled.header`
    background: linear-gradient(
        45deg,
        rgba(28, 17, 24, 255) 0%,
        rgba(29, 17, 21, 255) 50%,
        rgba(132, 32, 22, 255) 100%
    );
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;
const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderText>Vampire Survivors</HeaderText>
        </HeaderWrapper>
    );
};

export default Header;
