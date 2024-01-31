import BackIcon from '../../assets/back-icon.svg';
import * as StyledUIKit from '../../style/StyledUIKit';

const BackButton = () => {
    return (
        <StyledUIKit.BackButton>
            <img src={ BackIcon } alt="Back Icon"/>
            <div>Назад</div>
        </StyledUIKit.BackButton>
    )
}

export default BackButton;