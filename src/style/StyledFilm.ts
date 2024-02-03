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
    width: 675px;
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
    cursor: pointer;

    &:last-child {
        border-right: none; 
    }

    &:hover {
        margin: 2px;
        background-color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 14px;
    }

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

export const SmallText = styled.div`
    font-size: 12px;
    color: #344051;
`

export const TimeSessions = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const TimeLabel = styled.label`
    padding: 10px 16px 10px 16px;
    border: 1px solid #CED2DA;
    border-radius: 14px;
    cursor: pointer;

    &:hover {
        background-color: #97A1AF;
    }

    &.active {
        background-color: #97A1AF;
    }
`

export const ChoicePlaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 87px;
`

export const ScreenText = styled.div`
    margin-bottom: 8px;
    font-size: 12px;
    text-align: center;
    color: #344051;
`

export const Screen = styled.div`
    margin-left: 15px;
    height: 3px;
    border: 1px solid #CED2DA;
    border-radius: 16px;
    background-color: #CED2DA;
    text-align: center;
`

export const RowsAndPlacesContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

export const RowText = styled.div`
    margin-bottom: 24px;
    font-size: 12px;
    color: #344051;
`

export const PlaceContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

export const Place = styled.div<{type: string}>`
    width: 18px;
    height: 18px;
    border-radius: 4px;
    color: ${(props) => props.type === 'BLOCKED' ? '#CED2DA' : '#712D9C'};
    background-color: ${(props) => props.type === 'BLOCKED' ? '#CED2DA' : '#712D9C'};
    
    &:hover {
        transform: ${(props) => (props.type !== 'BLOCKED' ? 'scale(2)' : 'none')};
        width: ${(props) => (props.type !== 'BLOCKED' ? '20px' : '18px')};
        height: ${(props) => (props.type !== 'BLOCKED' ? '20px' : '18px')};
        color: ${(props) => (props.type !== 'BLOCKED' ? '#ffffff' : '#CED2DA')};
        text-align: center;
        cursor: ${(props) => (props.type !== 'BLOCKED' ? 'pointer' : '')};
    }

    &.active {
        transform: ${(props) => (props.type !== 'BLOCKED' ? 'scale(2)' : 'none')};
        width: ${(props) => (props.type !== 'BLOCKED' ? '18px' : '18px')};
        height: ${(props) => (props.type !== 'BLOCKED' ? '18px' : '18px')};
        color: ${(props) => (props.type !== 'BLOCKED' ? '#ffffff' : '#CED2DA')};
        text-align: center;
    }
`

export const SelectedPlaceContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const TotalText = styled.div`
    font-size: 20px;
    color: #141C24;
`