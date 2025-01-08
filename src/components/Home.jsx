import picture1 from "../assets/pictures/cover3.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    
    return ( 
        <div className="homePage">

        <div className="home">
            <img src={picture1} className="coverPicture" alt="Milos Grebec"/>
        </div>
        <div className="menu">
            <ul>
                <li onClick={()=>{navigate('/newproject')}}>NEW PROJECT</li>
                <li onClick={()=>{navigate('/projects')}}>PROJECTS</li>
                <li onClick={()=>{navigate('about')}}>ABOUT ME</li>
            </ul>
        </div> 
        </div>
     );
}
 
export default Home;