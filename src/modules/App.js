import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes.js';
import Background from './Background.js';
import NewBackground from "./NewBackground.js";
import NavBar from './NavBar.js';

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <AnimatedRoutes />
            <Background />
            {/* <NewBackground /> */}
        </Router>
    )
}

export default App;