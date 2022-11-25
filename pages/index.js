import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRepeat,
  ChevronDown,
  PauseFill,
  Shuffle,
  SkipBackwardFill,
  SkipForwardFill,
  VolumeDownFill,
  VolumeUpFill,
} from "react-bootstrap-icons";
import Songs from "../components/Songs";

export default function Home() {

  const [playerVisiblity, setPlayerVisiblity] = useState(true);


  function showPlayer (e) {
    setPlayerVisiblity(true);
  }
  function hidePlayer (e) {
    setPlayerVisiblity(false);
    // window.scrollTo(0, document.body.scrollHeight);
  }

  //player 

  let songs_list = [
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "https://picsum.photos/50/50",
      path: "Enthusiast.mp3"
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "https://picsum.photos/50/50",
      path: "Shipping_Lanes.mp3",
    },
    {
      name: "Night Owl",
      artist: "Broke For Free",
      image: "https://picsum.photos/50/50",
      path: "Night_Owl.mp3"
    },
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "https://picsum.photos/50/50",
      path: "Enthusiast.mp3"
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "https://picsum.photos/50/50",
      path: "Shipping_Lanes.mp3",
    },
  ];

  function playSong(e) {
    console.log(e.currentTarget.id);
  }

  return (
    <>
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Music Player" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>

      <div className="w-screen h-screen -mt-10 sm:mt-0 flex items-center relative text-lg  dark:bg-slate-900">
        
        
        {/* //container */}
        <div className="w-full flex sm:max-h-[30rem] h-full max-h-[40rem] relative mx-auto sm:w-[40rem] flex-row overflow-hidden sm:rounded-lg ring-1 ring-slate-800">
          
          {/* //home menu */}
          <div className="relative z-10 w-full h-full">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r transform-gpu from-slate-400 to-slate-300 opacity-80 backdrop-blur-2xl"></div>

            <Songs songs={songs_list} playSong={playSong} />

          </div>
          
          {/* //player */}
          <div className={`w-full -bottom-2 duration-500 ${playerVisiblity ? "" : "!h-0 -mb-20"} h-full py-10 sm:w-[40rem] mx-auto absolute z-20 flex-row shadow-lg ring-1 ring-slate-800`}>
            <div className="flex items-center px-1 -mt-8 w-full h-12 relative z-10 top-0">
              <div className="text-2xl stroke-slate-900 stroke-1 p-2 active:bg-slate-800/30 duration-75 shadow-mg rounded-full cursor-pointer" onClick={hidePlayer}><ChevronDown /> </div>
            </div>

            {/* //mid section */}
            {/* //bg blur */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r transform-gpu bg-white/40 backdrop-blur-xl"></div>
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r transform-gpu from-slate-400 to-slate-300 opacity-70 backdrop-blur-2xl ${playerVisiblity ? "" : "bg-opacity-0"} `}></div>
            
            {/* //top section */}
            <div className="flex justify-center">
              <div className="text-center">
                <div className="rounded-full w-48 h-48 bg-slate-500/40 ring-1 ring-slate-600 shadow-md drop-shadow-md"></div>
                <h2 className="relative mt-2 mb-5 text-xl text-slate-900 dark:text-slate-100 font-medium">
                  Song Name here
                </h2>
              </div>
            </div>

            {/* //bottom section */}
            <div className={`text-center mx-auto w-[96%] h-auto mt-4 bg-slate-500/40 py-3 transform-gpu backdrop-blur-md rounded-lg ring-1 ring-slate-500 drop-shadow-md  ${playerVisiblity ? "" : "duration-100 absolute -top-44 sm:-top-38 left-1/2 -translate-x-1/2"} `}>
              <div className={`w-full h-full absolute top-0 left-0 rounded-md z-0 ${playerVisiblity ? "" : "cursor-pointer"} `} onClick={showPlayer}></div>
              
              <div className="px-2">
             
                {/* //time slider */}
                <div className="flex relative z-10 mb-1">
                  <p className="font-medium text-sm pr-1">00:00</p>
                  <input
                    type="range"
                    className="slider w-full h-1 hover:-top-[2px] hover:shadow-mg duration-100 transition-shadow hover:h-[10px] relative cursor-pointer mt-2 bg-slate-800/60 rounded-md shadow-sm appearance-none"
                    min="0"
                    max="100"
                  />
                  <p className="font-medium text-sm pl-1">00:00</p>
                </div>

                {/* volume slider */}
                <div className="flex w-80 items- mx-auto relative z-10 mb-1 sm:mb-3">
                  <p className="font-medium text-2xl -mt-0.5 dark:text-slate-100 pr-1"><VolumeDownFill /></p>
                  <input
                    type="range"
                    className="slider w-full h-1 hover:-top-[2px] hover:shadow-mg duration-100 transition-shadow hover:h-[10px] relative cursor-pointer mt-2 bg-slate-800/60 rounded-md shadow-sm appearance-none"
                    min="0"
                    max="100"
                  />
                  <p className="font-medium text-2xl -mt-0.5 dark:text-slate-100 pl-1"><VolumeUpFill /></p>
                </div>

                {/* //buttons */}
                <div className="p-2 flex justify-evenly items-center sm:justify-center">
                  <button className="ring-1 ring-slate-700 sm:mr-10 bg-slate-700/10 transform-gpu backdrop-blur-mg mx-1 drop-shadow-md shadow-md active:bg-slate-700/30 text-2xl duration-75 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-3 sm:p-2 w-12 h-12 sm:w-10 sm:h-10  sm:hover:bg-slate-700/30 sm:active:bg-slate-700/50 ">
                    <Shuffle />
                  </button>

                  <div className="">
                    <button className="ring-1 ring-slate-700 bg-slate-800/30 transform-gpu backdrop-blur-mg mx-1 drop-shadow-md shadow-md active:bg-slate-800/60 text-2xl duration-75 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-4 sm:p-3 sm:hover:bg-slate-700/50 sm:active:bg-slate-700/80 ">
                      <SkipBackwardFill />
                    </button>
                    <button className="ring-1 ring-slate-700 bg-slate-800/30 transform-gpu backdrop-blur-mg mx-1 drop-shadow-md shadow-md active:bg-slate-800/60 text-2xl duration-75 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-4 sm:p-3 sm:hover:bg-slate-700/50 sm:active:bg-slate-700/80 ">
                      <PauseFill />
                    </button>
                    <button className="ring-1 ring-slate-700 bg-slate-800/30 transform-gpu backdrop-blur-mg mx-1 drop-shadow-md shadow-md active:bg-slate-800/60 text-2xl duration-75 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-4 sm:p-3 sm:hover:bg-slate-700/50 sm:active:bg-slate-700/80 ">
                      <SkipForwardFill />
                    </button>
                  </div>

                  <button className="ring-1 ring-slate-700 sm:ml-10 bg-slate-700/10 transform-gpu backdrop-blur-mg mx-1 drop-shadow-md shadow-md active:bg-slate-700/30 text-2xl duration-75 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-3 sm:p-2 w-12 h-12 sm:w-10 sm:h-10  sm:hover:bg-slate-700/30 sm:active:bg-slate-700/50 ">
                    <ArrowRepeat />
                  </button>
                </div>

              </div>
            </div>
            
          </div>
        </div>


      </div>
    </>
  );
}
