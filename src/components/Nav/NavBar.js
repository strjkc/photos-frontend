import React from 'react'
import { css} from 'aphrodite'
import { useSelector} from 'react-redux'
import NavItem from './NavItem'

const NavBar = ({styling}) => {
    const user = useSelector(store => store.user)

    return (
            <div className={css(styling)}>
                <NavItem text={'featured'} />
                <NavItem text={'overview'} />
                <NavItem text={'equipment'} />
                <NavItem text={'about'} />
                {
                    user 
                    ?   <NavItem text={'upload'} />
                    :   <NavItem button={true} text={'login'} />
                }
            </div>
    )
}

export default NavBar