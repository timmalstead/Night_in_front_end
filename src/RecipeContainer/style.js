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
        padding: 3em;
        width : 95%;
        height : 41em;
        overflow : scroll;
        margin: -6px
    
    }

    main::-webkit-scrollbar {
        width : 0px;
        height : 0px;
        background : transparent;
    }

    @media (max-width: 900px) {
      
        width : 100%;
        
        main {
            margin : 3em 0 1em 0;
        }
        
      }
`

export default RecipeStyle