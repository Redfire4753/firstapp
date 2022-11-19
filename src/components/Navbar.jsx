import styled from "styled-components";
import {
    NavLink
} from 'react-router-dom'


const NavWrapper = styled.div`
    position: absolute;
    top: 100px;
    background-color: orange;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px;
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