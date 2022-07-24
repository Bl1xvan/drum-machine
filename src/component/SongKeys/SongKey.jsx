const SongKey = ({playSound, sound: {id, ltr, url}}) => {

    return(
      <button id={id} className="onekey" disabled={url==='#'} onClick={() => {playSound(id, url)}}>
          {ltr}
      </button>
    )
  }

export default SongKey