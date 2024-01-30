import { useState } from "react"
import { MenuButton } from "./MenuButton"
import { MenuDropDown } from "./MenuDropDown"

export const Menu = () => {
    
    const [menuState, setMenuState] = useState(false)

    const handleClick = () => {
        if (menuState) {
            setMenuState(false)
        } else {setMenuState(true)}
    }
    return (
        <>
            <div className="menu-container">
                <MenuButton handleMenuClick={handleClick} menuState={menuState}/>
                <MenuDropDown menuState={menuState}/>
            </div>
        </>
    )
}