import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowRepeat,
  ChevronDown,
  PauseFill,
  Shuffle,
  SkipBackwardFill,
  SkipForwardFill,
} from "react-bootstrap-icons";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("blue");
  }, []);

  return (
    <>
      <Head>
        <title>Music Player</title>
        <meta name="description" content="Music Player" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <div className="w-screen h-screen sm:h-[90%] relative text-lg  dark:bg-slate-900">
        {/* //container */}
        <div className="w-full h-full py-10 sm:w-96 mx-auto relative flex-row overflow-hidden sm:rounded-lg shadow-lg ring-1 ring-slate-800">
          <div className="flex items-center border-t border-slate-600/30 drop-shadow-lg shadow-top border-solid rounded-t-lg px-1 -mt-8 mb-5 w-full h-12 relative z-10 top-0">
            <div className="text-2xl stroke-slate-900 stroke-1 p-2 active:bg-slate-800/30 duration-150 shadow-mg rounded-full"><ChevronDown /> </div>
          </div>
          {/* //mid section */}
          {/* //bg blur */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r bg-white/40 backdrop-blur-xl"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-400 to-slate-300 opacity-70 backdrop-blur-2xl"></div>
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
          <div className="text-center mx-auto w-[96%] h-auto mt-4 bg-slate-500/40 py-3 backdrop-blur-md rounded-lg ring-1 ring-slate-500 drop-shadow-md relative">
            <div className="px-2">
              {/* //time slider */}
              <div className="flex">
                <p className="font-medium text-sm pr-1">00:00</p>
                <input
                  type="range"
                  className="slider w-full h-1 mt-2 bg-slate-800/60 rounded-sm appearance-none"
                  min="0"
                  max="100"
                />
                <p className="font-medium text-sm pl-1">00:00</p>
              </div>

              {/* //buttons */}
              <div className="p-2 flex justify-evenly">
                <button className="ring-1 ring-slate-700 bg-slate-700/10 backdrop-blur-mg mx-1 drop-shadow-md active:bg-slate-700/30 text-2xl duration-150 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-2 w-10 h-10 ">
                  <Shuffle />
                </button>
                <div className="">
                  <button className="ring-1 ring-slate-700 bg-slate-800/30 backdrop-blur-mg mx-1 drop-shadow-md active:bg-slate-800/60 text-2xl duration-150 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-2">
                    <SkipBackwardFill />
                  </button>
                  <button className="ring-1 ring-slate-700 bg-slate-800/30 backdrop-blur-mg mx-1 drop-shadow-md active:bg-slate-800/60 text-2xl duration-150 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-2">
                    <PauseFill />
                  </button>
                  <button className="ring-1 ring-slate-700 bg-slate-800/30 backdrop-blur-mg mx-1 drop-shadow-md active:bg-slate-800/60 text-2xl duration-150 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-2">
                    <SkipForwardFill />
                  </button>
                </div>
                <button className="ring-1 ring-slate-700 bg-slate-700/10 backdrop-blur-mg mx-1 drop-shadow-md active:bg-slate-700/30 text-2xl duration-150 text-slate-900 dark:text-slate-100 text-opacity-90 rounded-full p-2 w-10 h-10 ">
                  <ArrowRepeat />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
