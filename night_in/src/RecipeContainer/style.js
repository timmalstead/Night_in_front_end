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

    @media (max-width: 900px) {
      
        width : 100%;
        
        main {
            margin : 0 0 1em 0;
        }
        
      }
`

export default RecipeStyle