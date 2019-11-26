import styled from 'styled-components';

const Nav = styled.nav`


main {
    display : flex;
    justify-content : space-between;
    background-color : #FEDC3D;
    font-weight : 800;
    box-shadow: 0 .05em 1em #28667d;
    width: 100vw;
}

div {
    display : flex;
    flex-direction : column;
}

section {
    margin :  0 2em;
    display : flex;
    // flex-direction : row;
    justify-content : center;
}

span {
    display : flex;
}

p {
    cursor : pointer;
    margin : 1em;
    font-size : 2em;
}
`

export default Nav