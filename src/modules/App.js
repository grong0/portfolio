import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes.js';
import Background from './Background.js';

import Home from './Home.js'
import AboutMe from "./AboutMe.js";
import Back from './Back.js';
import Home2 from './Home2.js';
import Achievements from './Achievements.js';
import BestWorks from './BestWorks.js';
import NavBar from './NavBar.js';


function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <AnimatedRoutes />
            <Background />
        </Router>
    )
}

export default App;