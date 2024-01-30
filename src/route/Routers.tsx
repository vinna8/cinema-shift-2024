import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Posters from '../components/Poster/Posters';
import Profile from '../components/Profile/Profille';
import Tickets from '../components/Tickets/Tickets';

const Routers = () => {
    return (
        <Routes>
            <Route path='/poster' element={<Posters />}/>
            <Route path='/tickets' element={<Tickets />}/>
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    )
}

export default Routers