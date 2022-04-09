import { useLastFM } from 'use-last-fm';

export const Music = () => {
    const apikey = process.env.REACT_APP_LAST_FM_API_KEY;
    console.log(apikey);
    const lastFM = useLastFM('tvut', apikey);
    return (
        <>
            {lastFM.status === "playing" && (
                <>
                    <div className='music-container'>
                        <img src={lastFM.song.art}/>
                        <p>I'm listening to {lastFM.song.name} by {lastFM.song.artist} on Spotify.</p>
                    </div>
                </>
            )}
        </>
    )
}
export default Music