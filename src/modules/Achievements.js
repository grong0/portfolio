import '../styles/Achievements.css';
import { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import Image from './Image';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

const cardsMotion = {
    from: {
        opacity: 0,
        scale: "30%"
    },
    to: {
        opacity: 1,
        scale: "100%",
        transition: {
            duration: 1,
            delay: 0.5,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        scale: "30%",
        transition: {
            duration: 1,
            delay: 0,
            type: "spring"
        }
    }
}

// initPage = false;

function Achievements() {

    const options = {
        glare: true,
        "max-glare": 0.2,
        speed: 400,
        scale: 1.5,
        max: 10,
        perspective: 1200
    }
    const vertOpt = {
        glare: true,
        "max-glare": 0.2,
        speed: 400,
        scale: 1.5,
        max: 10,
        perspective: 1200
    }

    return (
        <div className="achievements">
            <motion.div className="card_wrapper backdrop-blur"
                variants={cardsMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <Tilt id="ncshs" className="card" options={ options }> <button> <Image src={process.env.PUBLIC_URL + '/assets/achievements/ncshs.webp'} fallback={process.env.PUBLIC_URL + '/assets/achievements/ncshs.jpg'} alt={"ncshs"}/> </button> </Tilt>
                <Tilt id="nhra" className="card" options={ options }> <button> <Image src={process.env.PUBLIC_URL + '/assets/achievements/nhra.webp'} fallback={process.env.PUBLIC_URL + '/assets/achievements/nhra.png'} alt={"nhra"}/> </button> </Tilt>
                <Tilt id="njhs" className="card" options={ vertOpt }> <button> <Image src={process.env.PUBLIC_URL + '/assets/achievements/njhs.webp'} fallback={process.env.PUBLIC_URL + '/assets/achievements/njhs.jpg'} alt={"njhs"}/> </button> </Tilt>
                <Tilt id="act" className="card" options={ options }> <button> <Image src={process.env.PUBLIC_URL + '/assets/achievements/act.webp'} fallback={process.env.PUBLIC_URL + '/assets/achievements/act.jpg'} alt={"act"}/> </button> </Tilt>
                <Tilt id="appre" className="card" options={ options }> <button> <Image src={process.env.PUBLIC_URL + '/assets/achievements/appre.webp'} fallback={process.env.PUBLIC_URL + '/assets/achievements/appre.jpg'} alt={"appre"}/> </button> </Tilt>
                {/* <button class="card" data-tilt data-tilt-glare="true" data-tilt-max-glare="0.2" data-tilt-speed="400" data-tilt-scale="1.5" data-tilt-max="10" data-tilt-perspective="1200"><div></div></button> */}
            </motion.div> 
        </div>
    );
}

export default Achievements;