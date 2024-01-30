import styled from 'styled-components';

export const FilmContainer = styled.div`
    position: relative;
`
export const FilmImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 8px; 
    border-bottom-right-radius: 0;  
`

export const FilmInfo = styled.div`
    margin-bottom: 5px;
    padding: 8px 16px;
    background-color: #F5F5F8;
    border-top-left-radius: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    text-align: center;
`

export const FilmGenre = styled.div`
    margin-bottom: 4px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 14px;
    color: #141C24;
`

export const FilmContry = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    color: #141C24;
`