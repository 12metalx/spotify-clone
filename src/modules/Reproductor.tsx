import {useAudio} from 'react-use'
interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Porps{
    song: Song;
}
const Reproductor = ({song}:Porps) => {
    const [audio,state,controls] = useAudio({
        src: song.previewURL,
        autoPlay: true
    })

    return (
        <div id="rep">
            {audio}
            <h3>
                {song.name}-{song.albumName}
            </h3>
                <progress id="file" value={Math.floor(state.time)} max={Math.floor(state.duration)}/>
                <label> {Math.floor(state.time)} </label>       
                <input type="range"  step="0.1" value={state.volume} max="1" min="0" onChange={(e) => controls.volume(Number(e.target.value))}/>
            
            <button onClick={state.paused ? controls.play : controls.pause}>
                {state.paused ? 'Play' : 'Pause'}
                </button>
        </div>
    )
}

export default Reproductor
