
interface MenuDropDownProps {
    menuState: boolean
}

export const MenuDropDown = ({menuState}: MenuDropDownProps) => {
    

    return (
        menuState ? 
            <>
                <nav className="border-element nav-menu">
                    <a className="border-element menu-item">Project 1</a>
                    <a className="border-element menu-item">Project 2</a>
                    <a className="border-element menu-item">Project 3</a>
                    <a className="border-element menu-item">Project 4</a>
                </nav>
            </> 
            : null
    )

}