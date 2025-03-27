import "./NewProject.css";
import picture1 from "../assets/pictures/newCover2.png";
import { useNavigate } from "react-router-dom";
import linkedInP from "../assets/pictures/circle-linkedin-512.png";
import mailP from "../assets/pictures/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png";
import githubP from "../assets/pictures/github-icon-2.png";
const Contact = () => {
    const navigation = useNavigate();
    const home = ()=>{
        navigation("/");
    }
    const Li= ()=>{
        window.location.href="https://www.linkedin.com/in/milo%C5%A1-grebec-0117862a6/";
    }
    const git=()=>{
        window.location.href="https://github.com/MilosGrebec";
    }
    const mail=()=>{
        window.location.href="grebecmilos0@gmail.com";
    }
    return (  
        <div className="newproject">
            <img className="NPPicture" src={picture1} onClick={home} alt="slika1"/>
            <div className="container">
                <p>Every great journey begins with a single step. Share your idea below, and let us forge it into something extraordinary.</p>
                <div className="form">
                    <label>Email: </label>
                    <input type="text" className="Email"/>
                    <label>Name: </label>
                    <input type="text" className="Name"/>
                    <label>Your Project: </label>
                    <textarea type="text" className="pinput"></textarea>
                    <button>Send</button>
                </div>
                <p>Or you can contact me via:</p>
                <div className="cImages">
                    <img src={linkedInP}/>
                    <p onClick={Li}>Grebec Milos</p>
                    <img src={githubP}/>
                    <p onClick={git}>Grebec Milos</p>
                    <img src={mailP}/>
                    <p onClick={mail}>grebecmilos0@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;