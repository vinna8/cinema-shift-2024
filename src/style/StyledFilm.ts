import styled from 'styled-components';

export const CurrentFilmContainer = styled.div`
    margin-top: 24px;
    margin-bottom: 48px;
    display: flex;
    flex-direction: row;
    gap: 32px;
`

export const FilmInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const TimeTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const DataTab = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    width: 700px;
    height: 44px;
    background-color: #F5F5F8;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
`

export const ItemTab = styled.div`
    margin-top: 8px; 
    margin-bottom: 8px; 
    padding: 10px 16px; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    border-right: 1px solid #CED2DA;
    color: #637083;

    &.active {
        margin: 2px;
        background-color: #ffffff;
        color: #141C24;
        border: 1px solid #ffffff;
        border-radius: 14px;
    }
`

export const TimeSessionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const TimeSessions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const TimeLabel = styled.label`
    padding: 10px 16px 10px 16px;
    border: 1px solid #CED2DA;
    border-radius: 14px;
`

export const PlaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
`

export const Screen = styled.div`
    width: 409px;
    height: 3px;
    border: 1px solid #CED2DA;
    border-radius: 16px;
    background-color: #CED2DA;
`

export const SelectedPlaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`