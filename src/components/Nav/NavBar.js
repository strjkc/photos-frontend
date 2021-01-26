import React from 'react'
import { css} from 'aphrodite'
import { useSelector} from 'react-redux'
import NavItem from './NavItem'

const NavBar = ({styling}) => {
    const user = useSelector(store => store.user)

    return (
            <div className={css(styling)}>
                <NavItem text={'featured'} color={'#FF4224'} />
                <NavItem text={'overview'} color={'#27BBE5'}/>
                <NavItem text={'equipment'} color={'#FF8024'}/>
                <NavItem text={'about'} color={'#FFBD24'}/>
                {
                    user 
                    ?   <NavItem text={'upload'} />
                    :   <NavItem button={true} text={'login'} />
                }
            </div>
    )
}

export default NavBar