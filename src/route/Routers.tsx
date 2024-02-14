import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Film from '../components/Film/Film';
import PosterContent from '../components/Poster/PosterContent';
import Profile from '../components/Profile/Profille';
import Tickets from '../components/Tickets/Tickets';
import { ROUTES } from '../utils/constants/router';

const Routers = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN} element={<PosterContent />}/>
            <Route path={ROUTES.POSTER} element={<PosterContent />}/>
            <Route path={ROUTES.TICKETS} element={<Tickets />}/>
            <Route path={ROUTES.PROFILE} element={<Profile />}/>
            <Route path={ROUTES.FILM} element={<Film />}/>
        </Routes>
    )
}

export default Routers