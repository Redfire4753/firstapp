import styled from "styled-components";
import {
    NavLink
} from 'react-router-dom'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;  
`;
const NavWrapper = styled.div`
    position: absolute;
    top: 100px;
    background-color: orange;
`;

const Navbar = () => {
    return ( 
        <NavContainer>
            <NavWrapper>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Characters'>Characters</NavLink>
                <NavLink to='/Weapons'>Weapons</NavLink>
                <NavLink to='/Passive-Items'>Passive-Items</NavLink>
                <NavLink to='/Arcanas'>Arcanas</NavLink>
                <NavLink to='/Relics'>Relics</NavLink>
            </NavWrapper>
        </NavContainer>
     );
}
 
export default Navbar;