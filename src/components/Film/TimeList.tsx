import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import * as selectors from "../../redux/selectors";

import Time from './Time';

import * as StyledFilm from '../../style/StyledFilm';

const TimeList: React.FC = () => {
    const schedules = useSelector(selectors.schedules);
    const [activeTab, setActiveTab] = useState<{ [key: string]: boolean }>({});
    const [selectedDate, setSelectedDate] = useState<any>(''); 

    useEffect(() => {
        if (schedules && schedules.length > 0) {
            setActiveTab({ [schedules[0].date]: true });
            setSelectedDate(schedules[0]);
        }
    }, [schedules]);

    const handleTabClick = (schedule: any) => {
        setActiveTab((prevActiveTab) => ({
            [schedule.date]: !prevActiveTab[schedule.date],
        }))
        setSelectedDate(schedule);
    }

    return (
        <>
            <StyledFilm.DataTab>
                {schedules && schedules.map((schedule: any) =>
                    <StyledFilm.ItemTab 
                        key={schedule.date} 
                        onClick={() => handleTabClick(schedule)} 
                        className={activeTab[schedule.date] ? 'active' : ''}
                    >
                        {schedule.date}
                    </StyledFilm.ItemTab>
                )}
            </StyledFilm.DataTab>
            <StyledFilm.TimeSessionsContainer>
                {selectedDate && <Time schedule={selectedDate}/>}
            </StyledFilm.TimeSessionsContainer>
        </>
    )
}

export default TimeList;