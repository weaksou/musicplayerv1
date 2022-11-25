import { Heart, List, MusicNoteList, PencilSquare, Trash } from "react-bootstrap-icons";
import Song from "./Song";

export default function Songs(props) {


    return (
        <div className="relative flex">
            <div className="h-full min-h-[19.6rem] w-16 relative z-10 text-center px-1">
                <button className="bg-slate-500/40 active:bg-slate-800/40 duration-75 my-2 rounded-md sm:hover:bg-slate-800/40 shadow-sm border border-solid border-slate-800/50 p-2 text-2xl w-full flex justify-center items-center"><Heart /> </button>
                <button className="bg-slate-500/40 active:bg-slate-800/40 duration-75 my-2 rounded-md sm:hover:bg-slate-800/40 shadow-sm border border-solid border-slate-800/50 p-2 text-2xl w-full flex justify-center items-center"><PencilSquare /> </button>
                <button className="bg-slate-500/40 active:bg-slate-800/40 duration-75 my-2 rounded-md sm:hover:bg-slate-800/40 shadow-sm border border-solid border-slate-800/50 p-2 text-2xl w-full flex justify-center items-center"><MusicNoteList /> </button>
                <button className="bg-slate-500/40 active:bg-slate-800/40 duration-75 my-2 rounded-md sm:hover:bg-slate-800/40 shadow-sm border border-solid border-slate-800/50 p-2 text-2xl w-full flex justify-center items-center"><Trash /> </button>
                <button className="bg-slate-500/40 active:bg-slate-800/40 duration-75 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-md sm:hover:bg-slate-800/40 shadow-sm border border-solid border-slate-800/50 p-2 text-2xl flex justify-center items-center"><List /> </button>
            </div>
            <ul className="p-2 pb-40 h-full min-h-[30rem] w-full block overflow-hidden overflow-y-auto shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] custom-scrollbar">

            {props.songs.length === 0 ? "No songs found" : ""}

            {
                props.songs.map((song, id) => {
                    return <Song key={id} title={song.name} author={song.artist} imageUrl={song.image} playSong={props.playSong} />
                })
            }

            <div className="h-42 -mt-40 sm:-mt-80 w-full bg-blue-400 block"></div>
            </ul>
        </div>
    )
}