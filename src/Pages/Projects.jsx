import './Projects.css'
import projectI from "../assets/pictures/projects.png"
import { useNavigate } from 'react-router-dom';
const Projects = () => {
    const navigate=useNavigate();
    const home =()=>{
        navigate('/')
    }

    return ( 
        <div className="projects">
            <div className='projectsImage'>
                <img src={projectI} onClick={home}/>
            </div>
            <div className="projectsCointainer">
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