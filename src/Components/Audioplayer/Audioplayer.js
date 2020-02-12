import React from 'react'
import Player from 'react-modular-audio-player'

let playlist = [
    { src: "/music.mp3",
      title: "Song",
      artist: "Singer" },
    { src: "/moreMusic.mp3",
      title: "Another Song",
      artist: "Another Singer" }
];

const AudioPlayer = (props) => {
  let { curBird , stage } = props
  let audio = []; 
  let src = () => curBird === undefined ? 'unknown' : curBird.audio

  audio.push({
    src: src(),
    title: 'unknown bird',
    artist: `stage ${stage}`
  })

  return (
    <Player audioFiles={audio} />
)}


export default AudioPlayer
