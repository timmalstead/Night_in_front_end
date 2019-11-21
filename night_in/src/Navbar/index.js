import React  from 'react';
// import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    const handleLogout = async (e) =>  {
        console.log('this logout')
        const logout = await fetch(`${process.env.REACT_APP_API_URL}/user/logout`,{
             method: 'GET',
             credentials: 'include',  
        })
        console.log('this is message', logout)
    }

    return( 
        <nav>
            <main>
                <div >
                    <a href="/">Home</a>
                    <a href="/movie">Movies</a>
                </div>
                <article >
                </article>
                <section>
                    <a href="/Home">Account</a>
                    
                    <p onClick={()=> handleLogout() }>Logout</p>
                    
                </section>
            </main>
        </nav>
    )
};

export default Navbar;