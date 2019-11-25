import React  from 'react';
import Nav from './style.js'
import '../../public/NightInLogo.svg'
import '../../public/HorizontalNightInLogo.svg'

function Navbar(props) {

    const handleLogout = async (e) =>  {
        console.log('this logout')
        const logout = await fetch(`${process.env.REACT_APP_API_URL}/user/logout`,{
             method: 'GET',
             credentials: 'include',  
        })
        console.log('this is message', logout)
        props.logoutCurrentUser()
    }
    
    return( 
        <Nav>
            <main>
                <div>
                    <picture>
                        <source media="(min-width: 700px)" srcSet="HorizontalNightInLogo.svg"/>
                        <img alt="Night In Logo" src='NightInLogo.svg' style={{'margin' : '1em 3em'}}/>
                    </picture>
                </div>
                <section>
                    {props.isLogged ? <p onClick={()=> handleLogout() }>LOGOUT</p> : <p onClick={() => props.logIn()}>LOGIN</p>}
                </section>
            </main>
        </Nav>
    )
};

export default Navbar;