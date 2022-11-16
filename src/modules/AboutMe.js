import "../styles/AboutMe.css";
import { motion } from "framer-motion";
import Image from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const descMotion = {
	from: {
		x: "-100%",
		rotateY: 0,
		opacity: 0,
	},
	to: {
		x: 0,
		rotateY: 10,
		opacity: 1,
		transition: {
			duration: 1.5,
			delay: 0.5,
			type: "spring",
		},
	},
	exit: {
		x: "-100%",
		rotateY: 0,
		opacity: 0,
		transition: {
			duration: 1,
			delay: 0,
			type: "spring",
		},
	},
};
const actMotion = {
	from: {
		x: "100%",
		rotateY: 0,
		opacity: 0,
	},
	to: {
		x: 0,
		rotateY: -10,
		opacity: 1,
		transition: {
			duration: 1.5,
			delay: 0.5,
			type: "spring",
		},
	},
	exit: {
		x: "100%",
		rotateY: 0,
		opacity: 0,
		transition: {
			duration: 1,
			delay: 0,
			type: "spring",
		},
	},
};

// initPage = false;

function AboutMe() {
	return (
		<motion.div className="aboutme">
			<motion.div
				className="wrapper-desc backdrop-blur"
				variants={descMotion}
				initial={"from"}
				animate={"to"}
				exit={"exit"}
			>
				<div className="pfpContainer">
					<Image
						id="pfp"
						src={
							process.env.PUBLIC_URL +
							"/assets/aboutme/port_pfp.webp"
						}
						fallback={
							process.env.PUBLIC_URL +
							"/assets/aboutme/port_pfp.jpg"
						}
						alt="pfp"
					/>
				</div>
				<div id="status">
					<ul id="occ">
						<li>
							<strong>Full Time Student</strong>
						</li>
						<li>
							<ul>
								<li>Mineola High School</li>
								<li>Nassau Community College</li>
							</ul>
						</li>
					</ul>
					<ul id="con">
						<li>
							<FontAwesomeIcon icon={faLinkedin} />
							<a href="https://www.linkedin.com/in/garrett-tupper-0a0ab0254/">
								LinkedIn
							</a>
						</li>
						<li>
							<FontAwesomeIcon icon={faGithub} />
							<a href="https://github.com/grong0">Github</a>
						</li>
						<li>
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 256 308"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMidYMid"
							>
								<g>
									<path
										d="M0,19.2 C0,8.59648 8.59648,-2.13162821e-14 19.2,-2.13162821e-14 L108.8,-2.13162821e-14 C119.40352,-2.13162821e-14 128,8.59648 128,19.2 L128,102.4 L19.2,102.4 C8.59648,102.4 0,93.80352 0,83.2 L0,19.2 Z M128,102.4 L236.8,102.4 C247.40352,102.4 256,110.99648 256,121.6 L256,185.6 C256,196.20352 247.40352,204.8 236.8,204.8 L128,204.8 L128,102.4 Z M0,224 C0,213.39648 8.59648,204.8 19.2,204.8 L128,204.8 L128,288 C128,298.60352 119.40352,307.2 108.8,307.2 L19.2,307.2 C8.59648,307.2 0,298.60352 0,288 L0,224 Z"
										fill="#ffffff"
									></path>
								</g>
							</svg>
							<a href="https://replit.com/@Grongo?tab=repls">
								Replit
							</a>
						</li>
					</ul>
				</div>
				<p id="description">
					<span id="hi">Hi!</span>
					<br />
					My name is Garrett Tupper and I'm an aspiring Software
					Engineer and Web Developer. I'm a hardworking student and
					always ready to take on a challenge. I've taken as many
					Computer Science courses at my High School as I could where
					I was exposed to Web Development with HTML and CSS and
					Programming with Python. In my senior year at Mineola High
					School I had a dual enrollment at Nassau Community College,
					where I was introduced to the world of Information
					Techonology. Right now, I'm on track to graduate with an
					Advanced Regents Diploma at Mineola High School, and I'm
					excited to begin a new chapter in my life.
				</p>
				{/* <!-- My name is Garrett Tupper and my graduation year is 2023. I'm a hard working student when I'm given a big assignment. I'm reliable and I'm happy to help other students around me when they need help. In the future I'm thinking of getting a job centered around coding or computer since those are my strong suits. I'm a laid back person who is optimistic about the future and my digital portfolio is going to show what I'm capable of. --> */}
			</motion.div>
			<motion.div
				className="wrapper-activities backdrop-blur"
				variants={actMotion}
				initial={"from"}
				animate={"to"}
				exit={"exit"}
			>
				<div className="wrapper-img" id="robo">
					<Image
						src={
							process.env.PUBLIC_URL +
							"/assets/aboutme/robotics.webp"
						}
						fallback={
							process.env.PUBLIC_URL +
							"/assets/aboutme/robotics.jpg"
						}
						alt="robotics"
					/>
					<div>
						<p>
							Robotics in 9th grade, to me, was a gateway into
							coding and engineering. I thought of it as a way to
							learn something new and something that I was
							interested in. I joined their FRC team in 11th grade
							where I coded a scouting script to get more
							information on teams. In the 12th grade, I was the
							lead developer for the mineola robotics website.
						</p>
					</div>
				</div>
				<div className="wrapper-img" id="code">
					<Image
						src={
							process.env.PUBLIC_URL +
							"/assets/aboutme/coding_club.webp"
						}
						fallback={
							process.env.PUBLIC_URL +
							"/assets/aboutme/coding_club.jpg"
						}
						alt="coding club"
					/>
					<div>
						<p>
							I joined the Coding Club in 11th grade - the grade
							when it first started. It's a great environment to
							learn more about programming or if you just want to
							code in a nice place. Due to my dedication to the
							club, I was awarded the activity award.
						</p>
					</div>
				</div>
				<div className="wrapper-img" id="math">
					<Image
						src={
							process.env.PUBLIC_URL +
							"/assets/aboutme/mathletes.webp"
						}
						fallback={
							process.env.PUBLIC_URL +
							"/assets/aboutme/mathletes.jpg"
						}
						alt="mathletes"
					/>
					<div>
						<p>
							Mathletes was the next step in 9th grade since I was
							apart of Matholimpiads in 8th grade. It was a good
							way to practice my math skills as well as develop
							them and learn something new. After 3 years of being
							apart of this club, I became the Co-President of the
							club in 12th grade.
						</p>
					</div>
				</div>
				<div className="wrapper-img" id="cham">
					<Image
						src={
							process.env.PUBLIC_URL +
							"/assets/aboutme/chamber.webp"
						}
						fallback={
							process.env.PUBLIC_URL +
							"/assets/aboutme/chamber.jpg"
						}
						alt="chamber ensemble"
					/>
					<div>
						<p>
							I first joined Chamber Ensemble in 9th grade as I
							enjoyed playing my viola and wanted to improve. It
							was a great place for me to practice and learn new
							songs as we did 3 concerts a year.
						</p>
					</div>
				</div>
				<div className="wrapper-img" id="fabl">
					<Image
						src={
							process.env.PUBLIC_URL +
							"/assets/aboutme/fablab.webp"
						}
						fallback={
							process.env.PUBLIC_URL +
							"/assets/aboutme/fablab.jpg"
						}
						alt="fablab"
					/>
					<div>
						<p>
							I started going to my school's Fab Lab in 9th grade
							and started practicing how to use AutoDesk Inventor.
							I also learned how to use the 3D printer and the
							laser cutter. I used my time in the Fab Lab to work
							on personal projects where I would need to take
							advantage of all the machinery that was offered.
						</p>
					</div>
				</div>
				{/* <div className="wrapper-img" id="game">
                    <Image src={process.env.PUBLIC_URL + '/assets/tempImg.webp'} fallback={process.env.PUBLIC_URL + '/assets/tempImg.jpg'} alt="esports club"/>
                    <div id="text-wrap"><p id="img-desc">I initially joined the E-Sports club in 9th grade where I was on a League of Legends team. I later join in 11th grade where I was on the Rocket League team.</p></div>
                </div> */}
			</motion.div>
		</motion.div>
	);
}

export default AboutMe;
