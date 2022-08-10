import styled from "styled-components";
import React, { Component } from 'react';

const BodyWrapper = styled.div`
  background-image: url('/img/Vampire Survivors logo.jpg');
  background-color: rgba(132,32,22,255);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  gap: 10px;
  padding-top: 100px;

`;

const pagesArray = ['Characters', 'Weapons', 'Passive Items', 'Arcanas','Relics'];
const PageLinks = styled.div`
    border: 2px solid yellow;
    border-radius: 5px;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class HomeBody extends Component {
   
    render() { 
        return (
                <BodyWrapper>
                    {pagesArray.map(page => <PageLinks>{page}</PageLinks>)}
                </BodyWrapper>
        );
    }
}
 
export default HomeBody;