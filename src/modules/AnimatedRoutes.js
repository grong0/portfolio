import { Routes, Route, useLocation } from 'react-router-dom';
import Home1 from './Home1.js'
import AboutMe from "./AboutMe.js";
import Back from './Back.js';
import Home2 from './Home2.js';
import Achievements from './Achievements.js';
import BestWorks from './BestWorks.js';

import { AnimatePresence } from 'framer-motion';
import TestScroll from './testScroll.js';

function AnimatedRoutes() {
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/portfolio/" element={<Home1 />}/>
                <Route path="/portfolio/_" element={<Home2 />}/>
                <Route path="/portfolio/aboutme" element={<><Back /><AboutMe /></>}/>
                <Route path="/portfolio/bestworks" element={<><Back /><BestWorks /></>}/>
                <Route path="/portfolio/achievements" element={<><Back /><Achievements /></>}/>
                <Route path="/portfolio/testScroll" element={<TestScroll />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;