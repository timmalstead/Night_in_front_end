import styled from 'styled-components';

const Nav = styled.nav`


main {
    display : flex;
    justify-content : space-between;
    background-color : #FEDC3D;
    font-weight : 800;
    box-shadow: 0 .05em 1em #28667d;
}

div {
    display : flex;
    flex-direction : column;
}

section {
    margin :  0 2em;
    display : flex;
    flex-direction : column;
    justify-content : center;
}

p {
    cursor : pointer;
    margin : inherit 1em inherit 1em;
}
`

export default Nav