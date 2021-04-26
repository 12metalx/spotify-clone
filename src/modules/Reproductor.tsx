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
        <div>
            {audio}
            <h2>
                {song.name}-{song.albumName}
            </h2>
            <button onClick={state.paused ? controls.play : controls.pause}>
                {state.paused ? 'Play' : 'Pause'}
                </button>
        </div>
    )
}

export default Reproductor
