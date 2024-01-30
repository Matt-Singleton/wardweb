import { useState } from "react"
import { MenuButton } from "./MenuButton"
import { Title } from "./Title"
import { MenuDropDown } from "./MenuDropDown"
import { Menu } from "./Menu"


export const Header = () => {


    return (
        <>
            <div className="border-element header">
                <Menu/>
                <Title titleText='welcome to wardweb'/>
            </div>
        </>
    )
}