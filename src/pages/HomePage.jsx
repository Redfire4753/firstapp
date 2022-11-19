import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { SelectAllPages } from "./pagesSlice";
import { BodyWrapper } from "../components/styled/divs";
import { PageLinks } from "../components/styled/divs";



const HomePage = () => {
    const pages = useSelector(SelectAllPages);

    return (
        <BodyWrapper>
                <div>
                    <h1>Welcome to the wiki for Vampire Survivors</h1>
                    <p>A well beloved game for only $4.99 on steam</p>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    {pages.map(page => <NavLink to={`/${page}`} key={page}><PageLinks>{page}</PageLinks></NavLink>)}
                </div>
        </BodyWrapper>
    );
}
 
export default HomePage;