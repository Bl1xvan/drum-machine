import "./SongKeys.css"
import SongKey from './SongKey'
import {v4} from 'uuid'

const SongKeys = ({sounds, isPower, playSound}) => {
    return(
    <div className="keypad">
      {isPower ? sounds.map((sound) => <SongKey sound={sound} playSound={playSound} key={v4()} />) : sounds.map((sound) => <SongKey playSound={playSound} sound={{...sound, url: '#'}} key={v4()} />)}
    </div>)
  }

export default SongKeys