import * as StyledUIKit from '../../style/StyledUIKit';
import TimeList from './TimeList';

const Timetable: React.FC = () => {
    return (
        <div>
            <StyledUIKit.Title>Расписание</StyledUIKit.Title>
            <TimeList />
        </div>
    )
}

export default Timetable;