import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Schedule, Seance } from '../../types/types';
import { setSelectedSeance } from '../../redux/action/scheduleFilm';

import * as StyledFilm from '../../style/StyledFilm';

interface ScheduleProps {
    schedule: Schedule;
}

const Time: React.FC<ScheduleProps> = ({ schedule }) => {
    const dispatch = useDispatch();
    const [activeTimeLabel, setActiveTimeLabel] = useState<{ [key: string]: boolean }>({});
    const halls: { [hallName: string]: Seance[] } = {};

    useEffect(() => {
        if (schedule.seances.length > 0) {
            const firstSeance = schedule.seances[0];
            setActiveTimeLabel({
                [firstSeance.hall.name + 0]: true,
            });
            dispatch(setSelectedSeance(firstSeance));
        }
    }, [schedule.seances]);

    schedule.seances.forEach((seance) => {
        const hallName = seance.hall.name;

        if (!halls[hallName]) {
            halls[hallName] = [];
        }

        halls[hallName].push(seance);
    });

    const handleLabelClick = (seance: any, index: number) => {
        setActiveTimeLabel((prevActiveTimeLabel) => ({
            [seance.hall.name + index]: !prevActiveTimeLabel[seance.hall.name + index],
        }));
        dispatch(setSelectedSeance(seance));
    }

    return (
        <>
            {Object.entries(halls).map(([hallName, seances]) => (
                    <div key={hallName}>
                        <StyledFilm.SmallText>Зал {hallName}</StyledFilm.SmallText>
                        <StyledFilm.TimeSessions>
                            {seances.map((seance, index) => (
                                <StyledFilm.TimeLabel 
                                    key={index} 
                                    onClick={() => handleLabelClick(seance, index)}
                                    className={activeTimeLabel[seance.hall.name + index] ? 'active' : ''}>
                                        {seance.time}
                                </StyledFilm.TimeLabel>
                            ))}
                        </StyledFilm.TimeSessions>
                    </div>
                ))}
        </>
    )
}

export default Time;