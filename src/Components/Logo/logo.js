import React from 'react'
import { Image } from 'semantic-ui-react'
import songbird from './LogoSongBird.jpg'

const Logo = () =>  (
    <div className='logo'>
        <Image src={songbird} size='medium' rounded />
    </div>
    );

export default Logo;