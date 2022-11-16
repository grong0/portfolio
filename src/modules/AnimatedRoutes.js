import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home.js';
import Home1 from './Home1.js'
import AboutMe from "./AboutMe.js";
import Back from './Back.js';
import Home2 from './Home2.js';
import Achievements from './Achievements.js';
import BestWorks from './BestWorks.js';

import { AnimatePresence } from 'framer-motion';
import TestScroll from './testScroll.js';

function AnimatedRoutes() {
    var location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* <Route exact path="/portfolio/" element={<Home1 />}/>
                <Route exact path="/portfolio/_" element={<Home2 />}/> */}
                <Route exact path={"/portfolio/"}     element={<Home />}/>
                <Route path="/portfolio/bestworks"    element={<BestWorks />}/>
                <Route path="/portfolio/aboutme"      element={<AboutMe />}/>
                <Route path="/portfolio/achievements" element={<Achievements />}/>
                <Route path="/portfolio/testScroll"   element={<TestScroll />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;