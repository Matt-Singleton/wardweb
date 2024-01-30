import { useState } from "react"

export interface MenuButtonProps {
    handleMenuClick: () => void,
    menuState: boolean
}

export const MenuButton = ({handleMenuClick, menuState}: MenuButtonProps) => {


    return (
        <>
            <button onClick={handleMenuClick} className="border-element menu-button">{menuState ? 'Close Menu' : 'Open Menu'}</button>
        </>
    )
}