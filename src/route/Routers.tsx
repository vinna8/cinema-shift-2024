import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Profile from '../components/Profile/Profille';
import Tickets from '../components/Tickets/Tickets';

const Routers = () => {
    return (
        <Routes>
            <Route path='/tickets' element={<Tickets />}/>
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    )
}

export default Routers