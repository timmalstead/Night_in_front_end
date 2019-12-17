import styled from "styled-components"

const RenderStyle = styled.div`

    color : white;
    display : flex;
    align-items : center;
    flex-direction : column;
    height : 100%;
    z-index: 1;

    .recipe-holder {
        display : inherit;
        align-items : inherit;
        flex-direction : inherit;
        justify-content : center;
        
        
    }

    .meal-details {
        justify-self : flex-end;
        align-items : center;
        justify-content : inherit;
    }

    img {
        height : 26em;
        margin : 1em 0 0 0;
        border-radius : 1em;
    }

    details {
        width : 30em;
        text-align : center;
      }

    summary, h2 {
        text-align : center;
        outline : none;
        margin : 1.0em 0 .5em 0;
    }
 
    @media (max-width: 1200px) {
      
        details {
            width : 20em;
        }
        
`

export default RenderStyle
