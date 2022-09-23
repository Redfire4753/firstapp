import styled from "styled-components";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { SelectAllPages } from "./pagesSlice";

export const BodyWrapper = styled.div`
  background-color: rgba(132,32,22,255);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
`;

export const PageLinks = styled.div`
    padding: 20px;
    border: 2px solid yellow;
    border-radius: 5px;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
`;

const HomePage = () => {
    const pages = useSelector(SelectAllPages);

    return (
            <BodyWrapper>
                    {pages.map(page => <NavLink to={`/${page}`} key={page}><PageLinks>{page}</PageLinks></NavLink>)}
            </BodyWrapper>
    );
}
 
export default HomePage;