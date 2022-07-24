import React, {useState} from 'react';
import './App.css';
import SongKeys from './component/SongKeys/SongKeys'
import Controls from './component/Controls/Controls'
import Playlist1 from './Playlist/Playlist1'
import Playlist2 from './Playlist/Playlist2'



function App() {
  const Playlists = {
  heaterKit: Playlist1,
  smoothPianoKit: Playlist2
}

  const onStyle = {
    color: 'white',
    backgroundColor: 'gray'
  }

  const offStyle = {
    color: 'black',
    backgroundColor: '#4dff4d'
  }

  const [volume, setVolume] = useState(1)
    const volumeFunction = e => {
    setVolume(e.target.value)
  }
  
  const [soundGroup, setSoundGroup] = useState(Playlist1)
  const [power, setPower] = useState(false)
  const [listName, setListName] = useState("Heater Kit")
  const [currentStyle, setCurrentStyle] = useState(onStyle)
  const [newSound, setNewSound] = useState("")
  const playSound = (name, src) => {
    setNewSound(name)
    const audio = new Audio(src)
    audio.volume = volume
    audio.play()
  }

  const changeSounds = () => {
    if(soundGroup === Playlist1){
      setSoundGroup(Playlists.smoothPianoKit)
      setListName("Smooth Piano Kit")
    }
    if(soundGroup === Playlist2){
      setSoundGroup(Playlists.heaterKit)
      setListName("Heater Kit")
    }
  }
  const changePower = () => {
    setPower(!power)
    setVolume(1)
    if(power){
      setCurrentStyle(onStyle)
    }else{
      setCurrentStyle(offStyle)
    }
  }

  return (
    <div className="container">
      <div className="drum-machine">
      <SongKeys
        sounds={soundGroup} 
        isPower={power}
        playSound={playSound}
      />
      <Controls 
        buttonFunction={changeSounds} 
        powerSetting={changePower}
        isPower={power}
        currentList={listName}
        currentSound={newSound}
        volume={volume}
        volumeFunction={volumeFunction}
        currentStyle={currentStyle}
      />
      </div>
    </div>
  );
}

export default App;