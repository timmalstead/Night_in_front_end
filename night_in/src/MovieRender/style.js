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
        justify-content : flex-end;
        width : inherit;
        height : inherit;
    }

    a {
        display : inherit;
        align-items : inherit;
        flex-direction : inherit;
        justify-content : flex-start;
        width : 70%;
        height : inherit;
    }

    img {
        max-height : 100%;
        min-height : 80%;
        margin : 1em 0 0 0;
        border-radius : 1em;
        // justify-self : flex-end;
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
        justify-self : flex-end;
    }
`

export default RenderStyle