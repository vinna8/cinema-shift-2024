import cinemaLogo from '../../assets/cinema-logo.svg';
import exitIcon from '../../assets/exit-icon.svg';

import * as StyledHeader from '../../style/StyledHeader';

const Header: React.FC = () => (
    <>
        <StyledHeader.Navigation>
            <StyledHeader.NavigationItemLeft>
                <img src={ cinemaLogo } alt="Cinema Logo"/>
                <StyledHeader.Link to='/profile'>Профиль</StyledHeader.Link>
                <StyledHeader.Link to='/tickets'>Билеты</StyledHeader.Link>
            </StyledHeader.NavigationItemLeft>
            <StyledHeader.NavigationItemRight>
                <img src={ exitIcon } alt="Exit Icon"/>
                <div>Выйти</div>
            </StyledHeader.NavigationItemRight>
        </StyledHeader.Navigation>
        <StyledHeader.Line></StyledHeader.Line>
    </>
)

export default Header;