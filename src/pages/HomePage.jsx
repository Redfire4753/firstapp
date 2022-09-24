import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { SelectAllPages } from "./pagesSlice";
import { BodyWrapper } from "../components/styled/divs";
import { PageLinks } from "../components/styled/divs";



const HomePage = () => {
    const pages = useSelector(SelectAllPages);

    return (
        <BodyWrapper>
                {pages.map(page => <NavLink to={`/${page}`} key={page}><PageLinks>{page}</PageLinks></NavLink>)}
        </BodyWrapper>
    );
}
 
export default HomePage;