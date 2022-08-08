import styled from "styled-components";
const HeaderText = styled.h1`
    margin: 0;
    color: rgba(255,202,53,255);
    text-shadow: 2px 2px 3px brown;
`;
const Header = () => {
    return (
        <div>
            <HeaderText>
                Vampire Survivors
            </HeaderText>
        </div>
    )
}

export default Header;