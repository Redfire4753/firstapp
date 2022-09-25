import styled from "styled-components";
import {
    NavLink
} from 'react-router-dom'

const NavWrapper = styled.div`
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    background-color: orange;
`;

const Navbar = () => {
    return ( 
        <NavWrapper>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Characters'>Characters</NavLink>
            <NavLink to='/Weapons'>Weapons</NavLink>
            <NavLink to='/Passive-Items'>Passive-Items</NavLink>
            <NavLink to='/Arcanas'>Arcanas</NavLink>
            <NavLink to='/Relics'>Relics</NavLink>
        </NavWrapper>
     );
}
 
export default Navbar;