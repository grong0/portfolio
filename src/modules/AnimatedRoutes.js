import { Routes, Route, useLocation } from 'react-router-dom';
import Home1 from './Home1.js'
import AboutMe from "./AboutMe.js";
import Back from './Back.js';
import Home2 from './Home2.js';
import Achievements from './Achievements.js';
import BestWorks from './BestWorks.js';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home1 />}/>
                <Route path="/_" element={<Home2 />}/>
                <Route path="/aboutme" element={<><Back /><AboutMe /></>}/>
                <Route path="/bestworks" element={<><Back /><BestWorks /></>}/>
                <Route path="/achievements" element={<><Back /><Achievements /></>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;