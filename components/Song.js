import Image from "next/image";
import { useState, useEffect } from "react"

export default function Song(props) {

    const [animationStatus, setAnimationStatus] = useState(false);
    const [count, setCount] = useState(0);//animation timer
    const [mouseOut, setMouseOut] = useState(true);//onMouseOut
    
    useEffect(() => {

        //delay 
        if (!animationStatus) {

            const delayCounter = setInterval(() => {
                
                setCount(count + 1);
                
            }, 1000);

            
            if (count >= 1 && !mouseOut) {
                setAnimationStatus(true);
                setCount(0);

            }else if(mouseOut){
                setCount(0);
            }
            
            return () => clearInterval(delayCounter);
            
        }else{
                //increase counter
                const counter = setInterval(() => {
                    
                    setCount(count + 1);
                    
                }, 1000);

                //if counter reached amount and mouse is out disable animation and reset counter
                if (count >= 11 && mouseOut){
                    setAnimationStatus(false);
                    setCount(0);
                }
        
                return () => clearInterval(counter);
        }
        

    }, [animationStatus, count, mouseOut])

    function hoverSong(e){
        const length = props.title.length * 10;
        if (length > e.currentTarget.offsetWidth){
            setMouseOut(false);
        }
    }

    function hoverOutSong(){
        setMouseOut(true);
    }

return (
    
    <li className="" id="songid" onMouseOver={hoverSong} onMouseOut={hoverOutSong} onClick={props.playSong}>
        <div className="px-2 py-1 antialiased select-none items-center mb-1 active:bg-slate-400/40 sm:hover:bg-slate-400/40 duration-75 cursor-pointer transform-gpu bg-slate-50/30 bg-gradient-to-br from-slate-50/40 to-slate-300/60 backdrop-blur-md flex rounded-md shadow-md ring-1 ring-slate-500">
            <div className="mr-1">
                <Image width={40} height={40} alt={"img alt"} className="rounded-md pointer-events-none h-10 w-12 z-10" src={props.imageUrl} />
            </div>
            <div className="w-full pr-2 whitespace-nowrap animated-banner overflow-hidden">
                <div className={`text-lg font-medium ${animationStatus ? "banner" : ""} `}>{props.title}</div>
                <div className="text-sm ml-1">{props.author}</div>
            </div>
        </div>
    </li>
)


}