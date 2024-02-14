import styled from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => (
    <ButtonMain onClick={onClick}>{ children }</ButtonMain>
)

export default Button;

export const ButtonMain = styled.button`
    width: 300px;
    height: 56px;
    border: none;
    border-radius: 16px;
    background-color: #9534D2;
    color: #ffffff;
    font-weight: 600;
    size: 16px;
    cursor: pointer;
`