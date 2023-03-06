import React from 'react'
import styles from './styles/Dropdown.module.css'
import { NavLink } from 'react-router-dom'
export const Dropdown = ({select,setSelect}) => {
    const [isActive, setIsActive] = React.useState(false)
    const options = ["ControleInterno", "INFRA",  "Angular"]

    return (
        <div className={styles.dropdown}>
            <div className={styles.drowpdownBtn}
             onClick={e =>{setIsActive(!isActive)}}>
                 SECRETARIAS
                 </div>
                {isActive && (
                <div className={styles.dropdownContent}>
                    {options.map(options =>(
                    <NavLink to={select} onClick={(e) => {
                    setSelect(options)
                    setIsActive(false)
                        } 
                    }className={styles.dropdownItem}>
                        {options}
                        </NavLink>
                    ))}
                </div>
                )}
            </div>
    );
}
export default Dropdown
