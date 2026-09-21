import React, { useContext } from 'react'
import Styles from '../../Styles/Mega_Menu.module.css'
import Mega_Menu_Data from './Mega_Menu_Data';
import { Mega_Headings } from '../../Store/Mega-menu-store';

const Mega_Menu = ({ type }) => {

    const {Experts , Clinick , Service , Conditions , Resources} = useContext(Mega_Headings);

    return (
        <>
            {type === "Experts" && <Mega_Menu_Data value={Experts} />}
            {type === "Clinick" && <Mega_Menu_Data value={Clinick}/>}
            {type === "Service" && <Mega_Menu_Data value={Service}/>}
            {type === "Conditions" && <Mega_Menu_Data value={Conditions}/>}
            {type === "Resources" && <Mega_Menu_Data value={Resources}/>}
        </>
    )
}

export default Mega_Menu;