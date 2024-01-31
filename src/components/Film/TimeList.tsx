import Time from './Time';
import * as StyledFilm from '../../style/StyledFilm';

const TimeList = () => {
    return (
        <>
            <StyledFilm.DataTab>
                <StyledFilm.ItemTab className="active">
                    Tab Item
                </StyledFilm.ItemTab>
                <StyledFilm.ItemTab>
                    Tab Item
                </StyledFilm.ItemTab>
            </StyledFilm.DataTab>
            <StyledFilm.TimeSessionsContainer>
                <Time />
                <Time />
            </StyledFilm.TimeSessionsContainer>
        </>
    )
}

export default TimeList;