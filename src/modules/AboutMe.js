import '../styles/AboutMe.css';
import tempImg from '../assets/tempImg.png';
import { motion } from 'framer-motion';

const descMotion = {
    from: {
        x: "-100%",
        rotateY: 0,
        opacity: 0
    },
    to: {
        x: 0,
        rotateY: 10,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.3,
            type: "spring"
        }
    },
    exit: {
        x: "-100%",
        rotateY: 0,
        opacity: 0,
        transition: {
            duration: 2.5,
            delay: 0,
            type: "spring"
        }
    }
}
const actMotion = {
    from: {
        x: "100%",
        rotateY: 0,
        opacity: 0
    },
    to: {
        x: 0,
        rotateY: -10,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.3,
            type: "spring"
        }
    },
    exit: {
        x: "100%",
        rotateY: 0,
        opacity: 0,
        transition: {
            duration: 2.5,
            delay: 0,
            type: "spring"
        }
    }
}

function AboutMe() {
    return (
        <motion.div className="aboutme">
            <motion.div className="wrapper-desc backdrop-blur" 
                variants={descMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <img id="pfp" src={tempImg} alt="pfp"/>
                <ul id="status">
                    <li>Full Time Student</li>
                    <li>Mineola High School</li>
                </ul>
                <div className="desc_wrapper"><p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum itaque ducimus possimus libero ex dolore vel pariatur, placeat expedita dolorem temporibus voluptate non repudiandae dicta. Blanditiis hic facere quas modi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolore nisi quaerat eveniet obcaecati atque modi quo iste, eius est praesentium dignissimos doloribus et libero enim ab blanditiis recusandae cum.</p></div>
                {/* <!-- My name is Garrett Tupper and my graduation year is 2023. I'm a hard working student when I'm given a big assignment. I'm reliable and I'm happy to help other students around me when they need help. In the future I'm thinking of getting a job centered around coding or computer since those are my strong suits. I'm a laid back person who is optimistic about the future and my digital portfolio is going to show what I'm capable of. --> */}
            </motion.div>
            <motion.div className="wrapper-activities backdrop-blur" 
                variants={actMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <div className="wrapper-img" id="robo">
                    <img src={tempImg} alt="robotics"/>
                    <div id="text-wrap"><p id="img-desc">Robotics in 9th grade, to me, was a gateway into coding and engineering. I thought of it was a way to learn something new and learn about something that I was interested in. I joined their FRC team in 11th grade where I coded a scouting script to get more information on teams. In the 12th grade, I was the lead developer for the mineola robotics website.</p></div>
                </div>
                <div className="wrapper-img" id="code">
                    <img src={tempImg} alt="coding club"/>
                    <div id="text-wrap"><p id="img-desc">I joined the Coding Club in 11th grade - the grade when it first started. Due to my dedication to the club, I was awarded the activity award.</p></div>
                </div>
                <div className="wrapper-img" id="math">
                    <img src={tempImg} alt="mathletes"/>
                    <div id="text-wrap"><p id="img-desc">Mathletes was the next step in 9th grade since I was apart if Matholimpiads in 8th grade. It was a good way to practice my math skills as well as develop them and learn something new. After 3 years of being apart of the club, I became the Co-President of the club along with 3 of my peers in 12th grade.</p></div>
                </div>
                <div className="wrapper-img" id="cham">
                    <img src={tempImg} alt="chamber ensemble"/>
                    <div id="text-wrap"><p id="img-desc">I joined Chamber Ensemble in 9th grade and I plan on joining again in 11th grade since I couldn't in 10th grade because of Covid conditions. I very much enjoy Orchestra and I wanted to play more songs as the ones in Chamber Ensemble were more difficult as well.</p></div>
                </div>
                <div className="wrapper-img" id="fabl">
                    <img src={tempImg} alt="fablab"/>
                    <div id="text-wrap"><p id="img-desc">I starting going to the FAB LAB in 9th grade with practicing how to use AutoDesk Inventor. I also learned how to use the 3D printer and the laser cutter. I used my time in the Fab Lab to work on personal projects where I would need to take advantage of all the machinery we have in the Fab Lab.</p></div>
                </div>
                <div className="wrapper-img" id="game">
                    <img src={tempImg} alt="esports club"/>
                    <div id="text-wrap"><p id="img-desc">I initially joined the E-Sports club in 9th grade where I was on a League of Legends team. I later join in 11th grade where I was on the Rocket League team.</p></div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default AboutMe;