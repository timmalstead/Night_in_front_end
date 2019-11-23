import styled from 'styled-components';

const FormStyle = styled.form`
    
    width : 100%;
    display : flex;
    justify-content : space-evenly;

    button, select {
        background-color : #383838;
        border : none;
        color : #979797;
        min-width : 70%;
        font-size : 1.3em;
        font-weight : 700;
        outline : none;
        border-radius : .25em;
    }

    button {
        min-width : 40%;
    }

`

export {FormStyle}