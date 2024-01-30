import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNavigation = styled.div`
    margin: auto;
    max-width: 1200px; 
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #344051;
`;

export const HeaderNavigationItemLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

export const HeaderNavigationItemRight = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

//вынести в глобальный
export const HeaderNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    cursor: pointer;
`

export const Line = styled.div`
    border-bottom: 1px solid #CED2DA;
`