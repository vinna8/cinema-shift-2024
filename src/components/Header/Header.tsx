import cinemaLogo from '../../assets/cinema-logo.svg';
import exitIcon from '../../assets/exit-icon.svg';
import * as StyledHeader from './StyledHeader';

const Header = () => {
    return (
        <>
            <StyledHeader.HeaderNavigation>
                <StyledHeader.HeaderNavigationItemLeft>
                    <img src={ cinemaLogo } alt="Cinema Logo"/>
                    <div>Профиль</div>
                    <div>Билеты</div>
                </StyledHeader.HeaderNavigationItemLeft>
                <StyledHeader.HeaderNavigationItemRight>
                    <img src={ exitIcon } alt="Exit Icon"/>
                    <div>Выйти</div>
                </StyledHeader.HeaderNavigationItemRight>
            </StyledHeader.HeaderNavigation>
            <StyledHeader.Line></StyledHeader.Line>
        </>
    )
}

export default Header;