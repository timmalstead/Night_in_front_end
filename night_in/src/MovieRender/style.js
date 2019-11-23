import styled from 'styled-components';

const RenderStyle = styled.div`

    color : #979797;
    display : flex;
    align-items : center;
    flex-direction : column;
    width : 100%;
    height : 100%;

    .movie-holder {
        display : inherit;
        align-items : inherit;
        flex-direction : inherit;
        justify-content : center;
        width : inherit;
        height : inherit;
    }

    a {
        display : inherit;
        align-items : inherit;
        flex-direction : inherit;
        justify-content : inherit;
        width : 70%;
        height : inherit;
    }

    img {
        max-width : auto;
        min-width : 80%;
        max-height : 30em;
        min-height : 80%;
        // overflow : hidden;
        margin : 1em 0 0 0;
        border-radius : 1em;
    }

    details {
        max-width : 80%;
        text-align : center;
      }

    summary {
        outline : none;
    }
    h2 {
        margin : .5em 0 .5em 0;
        text-align : center;
    }

    h3 {
        margin : .5em 0 2em 0;
        text-align : center;
    }
`

export default RenderStyle