import './Projects.css'
import projectI from "../assets/pictures/projects.png"
import { useNavigate } from 'react-router-dom';
import angelusLogo from "../assets/pictures/angelusLogo.png";
import cross from "../assets/pictures/cross.png";
const Projects = () => {
    const navigate=useNavigate();
    const home =()=>{
        navigate('/')
    }
    const git=()=>{
        window.location.href="https://github.com/MilosGrebec";
    }
    return ( 
        <div className="projects">
            <div className='projectsImage'>
                <img src={projectI} onClick={home}/>
            </div>
            <div className="projectsCointainer">
                <div className="Projectcontainer">
                    <p className='projectTitle'>Angelus</p>
                    <div className="ProjectContent">
                        <img src={angelusLogo} alt='angelusLogo' className='AngelusLogo'/>
                        <p className='AngelusContent'>Angelus is software for creating and testing custom computer vision models. Angelus was made in Python using TensorFlow and CustomTkinter for UI, models are from the TensorFlow model zoo.</p>
                    </div>
                    <div className='more'>
                        <p onClick={git}>More about Angelus on GitHub</p>
                    </div>
                </div>
                <div className="Projectcontainer">
                    <p className='projectTitle'>Bible Quotes</p>
                    <div className="ProjectContent">
                        <img src={cross} alt='angelusLogo' className='AngelusLogo'/>
                        <p className='AngelusContent'>Bible Quotes is an mobile app that is made as React Native Expo app project.</p>
                    </div>
                    <div className='more'>
                        <p onClick={git}>More about Angelus on GitHub</p>
                    </div>
                </div>
                <div className="Projectcontainer">
                    s
                </div>
                <div className="Projectcontainer">
                    s
                </div>
            </div>
        </div>
    );
}
 
export default Projects;