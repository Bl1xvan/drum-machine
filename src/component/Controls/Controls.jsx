import React, {useState} from 'react'
import './Controls.css'



const Controls = ({buttonFunction, isPower, powerSetting, currentList, currentSound, volume, volumeFunction, currentStyle}) => {


    return(
      <div className="control-panel">
        <div className="panel-section">
          <button className="panel-button" id="power-button" style={currentStyle} onClick={powerSetting}>
            Power: {isPower ? "On" : "Off"}
          </button>
          <div className="panel-volume">
            <label id="volume">Volume {Math.round(volume * 100)}%</label>
            <input type="range" className="vol" name="vol" min="0" max="1" step='0.01' value={volume} onChange={volumeFunction} disabled={!isPower}/>
          </div>
        </div>

        <div className="panel-section">
          <div className="current" id="current-playlist">
             Playlist: {isPower ? <span id="listName">{currentList}</span> : "Turn Power On"}
          </div>
            <button className="panel-button" onClick={buttonFunction} disabled={!isPower}>
              Change Playlist
            </button>
            <div className="current" id="current-sound">
              Track: {isPower ? <span id="soundName">{currentSound}</span> : "Turn Power On"}
            </div>
        </div>
      </div>
    )
  }

export default Controls