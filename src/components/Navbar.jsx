import { useEffect, useState } from "react";
import onP from "../assets/pictures/volume.png";
import off from "../assets/pictures/mute.png";
import sound from "../assets/sound/Dark Souls III OST 1 - Main Theme.mp3";

const Navbar = () => {
    const [sPic,setSPic] = useState(onP);
    const soundPicture = ()=>{
        if (on){
            setSPic(off);
            setOn(false);
            if (audio){
                audio.pause();
            }
            
        }
        else{
            setSPic(onP);
            setOn(true);
            if (audio){
                audio.play().catch((error)=>{ console.error("Error:", error)});
            }
            
        }
    }
    const [on, setOn] = useState(true);
    const [audio,setAudio] = useState(null);
    useEffect(() => {
        const images = [onP, off];
        images.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }, []);
    useEffect(()=>{
        const audioInstantce = new Audio(sound);
        audioInstantce.loop=true;
        setAudio(audioInstantce);
        audioInstantce.play().catch((error)=>{console.error("Error", error)});
        return()=>{
            audioInstantce.pause();
            audioInstantce.src="";
        }
    },[])
    return ( 
        <div className="button" onClick={soundPicture}>
        <img src={sPic} alt="on"/>
        </div>
     );
}
 
export default Navbar;