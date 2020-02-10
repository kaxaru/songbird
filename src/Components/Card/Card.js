import React from 'react'
import { Item } from 'semantic-ui-react'
import AudioPlayer from '../Audioplayer/Audioplayer'

import bird from './bird.png'
import './card.css'

const Card = () => (
    <Item.Group>
        <Item>
        <Item.Image size='small' src={bird} />
        <Item.Content>
            <Item.Header as='a'>Птица</Item.Header>
            <Item.Meta><AudioPlayer /></Item.Meta>
            <Item.Description>
            <p>Many people also have their own barometers for what makes a cute
                dog.</p>
            <p>
                Many people also have their own barometers for what makes a cute
                dog.
            </p>
            </Item.Description>
        </Item.Content>
        </Item>
    </Item.Group>
)

export default Card