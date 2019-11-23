import React  from 'react';
import Nav from './style.js'
import '../../public/NightInLogo.svg'

function Navbar(props) {

    const handleLogout = async (e) =>  {
        console.log('this logout')
        const logout = await fetch(`${process.env.REACT_APP_API_URL}/user/logout`,{
             method: 'GET',
             credentials: 'include',  
        })
        console.log('this is message', logout)
    }
    // onClick={() => handleLogin()}
    return( 
        <Nav>
            <main>
                <div>
                    <img alt="Night In Logo" src='NightInLogo.svg' style={{'margin' : '1em'}}/>
                </div>
                <section>
                    <p onClick={() => props.logIn()}>LOGIN</p>
                    {/* <a href="/Home">Login</a> */}
                    <p onClick={()=> handleLogout() }>LOGOUT</p>
                </section>
            </main>
        </Nav>
    )
};

export default Navbar;