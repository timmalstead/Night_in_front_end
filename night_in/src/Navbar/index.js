import React  from 'react';
import Nav from './style.js'

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
                {/* <div >
                    <a href="/">Home</a>
                    <a href="/movie">Movies</a>
                </div> */}
                <div>
                    LOGO
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