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

const AudioPlayer = () => (
    <Player audioFiles={playlist} />
)

export default AudioPlayer
