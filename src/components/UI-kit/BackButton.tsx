import BackIcon from '../../assets/back-icon.svg';
import styled from 'styled-components';

interface ButtonProps {
    onClick?: () => void;
}

const BackButton: React.FC<ButtonProps> = ({onClick}) => {
    return (
        <ReturnBackButton onClick={onClick}>
            <img src={ BackIcon } alt="Back Icon"/>
            <div>Назад</div>
        </ReturnBackButton>
    )
}

export default BackButton;

export const ReturnBackButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    color: #637083;
    cursor: pointer;
`