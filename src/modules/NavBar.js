import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const navMotion = {
    from: {
        "grid-template-columns": "auto auto 1fr",
        "grid-template-rows": "none",
        width: "100%",
        height: "50px"
    },
    to: {
        "grid-template-columns": "1fr auto 1fr",
        "grid-template-rows": "1fr auto auto 1fr",
        height: "100vh",
        width: "100vh",
    }
}
const gtMotion = {
    from: {
        "grid-col-start": 1,
        "grid-col-end": 2,
        "grid-row-start": 1,
        "grid-row-end": 2,

        width: "100px",
        "font-size": "13px"
    },
    to: {
        "grid-col-start": 2,
        "grid-col-end": 3,
        "grid-row-start": 2,
        "grid-row-end": 3,

        width: "auto",
        "font-size": "120px"
    },
    hover: {
        scale: 1.1
    }
}
const gridMotion = {
    from: {
        "grid-row-start": 1,
        "grid-row-end": 2,
        padding: "0px",
        height: "100%"
    },
    to: {
        "grid-row-start": 3,
        "grid-row-end": 4,
        padding: 20,
        height: "auto"
    }
}
const divMotion = {
    from: {
        "border-radius": "0px",
        background: "rgb(61, 61, 94)",
        border: "none"
    },
    to: {
        "border-radius": "50%",
        background: "rgb(53, 186, 207)",
        border: "solid skyblue 20px"
    },
    hover: {
        scale: 1.1
    }
}

function NavBar() {
    return(
        <motion.nav className='nav' variats={navMotion} layout initial={"from"} animate={"to"} transition={{ delay:1, repeat:Infinity}}>
            <motion.div id="gt" variants={gtMotion} layout initial={"from"} animate={"to"} whileHover={"hover"}><Link id="home" to='./_'>Garrett Tupper</Link></motion.div>
            <motion.div className="grid" variants={gridMotion} layout initial={"from"} animate={"to"}>
                <motion.div id="abou" variants={divMotion} layout initial={"from"} animate={"to"} whileHover={"hover"}><Link id="about" to='./aboutme'><p>About Me</p></Link></motion.div>
                <motion.div id="bes" variants={divMotion} layout initial={"from"} animate={"to"} whileHover={"hover"}><Link id="best" to='./bestworks'><p>Best Works</p></Link></motion.div>
                <motion.div id="achi" variants={divMotion} layout initial={"from"} animate={"to"} whileHover={"hover"}><Link id="achieve" to='./achievements'><p>Achievements</p></Link></motion.div>
            </motion.div>
        </motion.nav>
    )
}

export default NavBar;