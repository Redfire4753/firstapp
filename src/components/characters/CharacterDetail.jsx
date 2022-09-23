import { Descriptions } from "antd";
import { NavLink } from "react-router-dom";
import { BodyWrapper } from "../../pages/HomePage";


const CharacterDetail = ({character}) => {
    const { name, weapon, passive, unlock, cost } = character;
    return (
        <BodyWrapper>
            <Descriptions title='Character Details'>
                <Descriptions.Item label='Name'>{name}</Descriptions.Item>
                <Descriptions.Item label='Weapon'><NavLink to={`/Weapons/${weapon}`}>{weapon}</NavLink></Descriptions.Item>
                <Descriptions.Item label='Passive'>{passive}</Descriptions.Item>
                <Descriptions.Item label='Unlock'>{unlock}</Descriptions.Item>
                <Descriptions.Item label='Cost'>{cost}</Descriptions.Item>
            </Descriptions>
        </BodyWrapper>
     );
}
 
export default CharacterDetail;