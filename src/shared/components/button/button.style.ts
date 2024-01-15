import styled from "styled-components/native";


interface ButtonContainerProps{
    margin?: string
}
export const ButtonContainer = styled.TouchableOpacity
`
width: 100%;
height: 48px;
border-radius: 4px;
background: blue;
align-items: center;
justify-content:center;
${(props: { margin: any; }) => (props.margin ? `margin: ${props.margin};` : '')}

 `