import styled from 'styled-components';

const RecipeStyle = styled.div`

    display : flex;
    align-items : center;
    width : 50%;
    flex-direction : column;

    main {
        display : inherit;
        align-items : inherit;
        flex-direction : inherit;
        background-color : #181818;
        width : 95%;
        height : 41em;
        border-radius : 3em;
        overflow : scroll;
    }
`

export default RecipeStyle