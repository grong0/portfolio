import {motion} from 'framer-motion';
import Home from './Home';

const wrapperMotion = {
    from: {
        scale: 3,
        opacity: 0,
        gap: "125px",
        // y: 125
    },
    to: {
        scale: 1,
        opacity: 1,
        gap: "50px",
        // y: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exit: {
        scale: 3,
        opacity: 0,
        gap: "125px",
        // y: 125,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}

function Home2() {
    return (
        <motion.div className="home"
            variants={wrapperMotion}
            initial={"from"}
            animate={"to"}
            exit={"exit"}
        >
            <Home />
        </motion.div>
    );
}

export default Home2;