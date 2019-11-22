import styled from 'styled-components';

const Nav = styled.nav`


main {
    display : flex;
    justify-content : space-between;
    background-color : #FEDC3D;
    color : #323232;
    font-weight : 800;
    box-shadow: .5em 10px 1em #28667d;
}

div {
    display : flex;
    flex-direction : column;
}

section {
    margin :  0 2em;
}

p {
    cursor : pointer;
    margin : inherit 1em inherit 1em;
}
`

export default Nav