import { Descriptions } from "antd";
import { NavLink } from "react-router-dom";
import { BodyWrapper } from "../styled/divs";


const CharacterDetail = ({weapon}) => {
    const { name, description, unlock, evolution, evolutionNeeds } = weapon;

    return (
        <BodyWrapper>
            <Descriptions title='Character Details'>
                <Descriptions.Item label='Name'>{name}</Descriptions.Item>
                <Descriptions.Item label='Description'>{description}</Descriptions.Item>
                <Descriptions.Item label='Unlock'>{unlock}</Descriptions.Item>
                {evolution && <Descriptions.Item label='Items Needed for Evolution'>{evolutionNeeds}</Descriptions.Item>}
            </Descriptions>
        </BodyWrapper>
     );
}
 
export default CharacterDetail;