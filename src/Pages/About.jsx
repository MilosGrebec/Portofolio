import "./About.css";
import about1 from "../assets/pictures/about2.png";
import about3 from "../assets/pictures/about3.png";
import { useNavigate } from "react-router-dom";
import linkedInP from "../assets/pictures/circle-linkedin-512.png";
import mailP from "../assets/pictures/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png";
const About = () => {
    const navigate=useNavigate();
    const home = ()=>{
        navigate('/');
    }
    return ( 
        <div className="about">
            <img className="lore" src={about3} alt="" onClick={home}/>
            <div className="aboutCont">
                <div className="AboutImage">
                    <img src={about1}/>
                </div>
                <div className="aboutText">
                    <p>Hello, I am Miloš Grebec. I am from Serbia, living in the small town of Kikinda.</p>
                    <p>I have been into computers since I was a kid, and I first gained interest in programming when I was in 5th grade in elementary school, where we learned Python. Since then, I have learned a lot of interesting technologies and programming languages.</p>
                    <p>Now for over 3 years, I have been working as a freelance software engineer, making various websites and softwares for local businesses and making my own personal projects.</p>
                    <p>Education-wise, currently I am in the last year of high school, and I am planning to go to the Faculty of Technical Sciences, University of Novi Sad.</p>
                    <p>IF you are intersted in working with me, full-time, part-time or on one project, you can always contact me, via mail or LinkedIn:</p>
                    <div className="aboutImages">
                        <img src={linkedInP}/>
                        <p onClick={""}>Grebec Milos</p>
                        <img src={mailP}/>
                        <p onClick={""} className="mailAbout">grebecmilos0@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default About;