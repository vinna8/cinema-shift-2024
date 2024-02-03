import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Film from '../components/Film/Film';
import PosterContent from '../components/Poster/PosterContent';
import Profile from '../components/Profile/Profille';
import Tickets from '../components/Tickets/Tickets';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<PosterContent />}/>
            <Route path='/poster' element={<PosterContent />}/>
            <Route path='/tickets' element={<Tickets />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/film/:id' element={<Film />}/>
        </Routes>
    )
}

export default Routers