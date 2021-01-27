import React from 'react'
import { css} from 'aphrodite'
import { useSelector} from 'react-redux'
import NavItem from './NavItem'

const NavBar = ({styling}) => {
    const user = useSelector(store => store.user)

    return (
            <div className={css(styling)}>
                <NavItem text={'featured'} passedColor={"rgba(255,66,36)"} />
                <NavItem text={'overview'} passedColor={"rgba(39,187,229)"}/>
                <NavItem text={'equipment'} passedColor={"rgb(255,128,36)"}/>
                <NavItem text={'about'} passedColor={"rgba(255,189,36)"}/>
                {
                    user 
                    ?   <NavItem text={'upload'} passedColor={'fff'} />
                    :   <NavItem button={true} text={'login'} passedColor={'fff'}/>
                }
            </div>
    )
}

export default NavBar