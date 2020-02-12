import React from 'react'
import { Item, Divider } from 'semantic-ui-react'
import AudioPlayer from '../Audioplayer/Audioplayer'

import bird from './bird.png'
import wtfbird from './wtfbird.jpg'
import './card.css'

const Card = (props) => {
    console.log(props, "Card")
    let { option, user, store } = props
    //fix
    let curBird;
    if (option.answer != null) {
        curBird = store[option.stage][option.answer]
        console.log(curBird, "answer")
    }

    const template = () => {
        if(user === undefined /*&& !option.isAnswered*/) { 
            return (
            <Item>
            <Item.Image size='small' src={!option.isAnswered ? wtfbird : store[option.stage][option.answer].image} />
            <Item.Content>
            <Item.Header>{!option.isAnswered ? '********' : store[option.stage][option.answer].name}</Item.Header>
            {(!option.isAnswered) ? null : <Divider /> }
                <Item.Meta><AudioPlayer className="abc meta" curBird={curBird} stage={option.stage} /></Item.Meta>
            </Item.Content>
            </Item>
            )             
        } else if (user !== undefined && option !== undefined && !user.isBirdClick) {
            return (
                <Item>
                <Item.Content>
                    <Item.Header ></Item.Header>
                    <Item.Description>Послушайте плеер и выберите птицу!</Item.Description>
                </Item.Content>
                </Item>
                )  
        }
        else {
            return (
                <Item>
            <Item.Image size='small' src={store[option.stage][user.id - 1].image} />
            <Item.Content>
                <Item.Header as='a'>{store[option.stage][user.id - 1].name}</Item.Header>
                <Divider />
                <Item.Meta>{store[option.stage][user.id - 1].species}</Item.Meta>
                <Divider />
                <Item.Meta><AudioPlayer className="meta" curBird={store[option.stage][user.id - 1]} stage={option.stage} /></Item.Meta>
                <Item.Description>
                    {store[option.stage][user.id - 1].description}
                </Item.Description>
            </Item.Content>
            </Item>
            )
        }
    }

    return (
        <Item.Group>
            {template()}
        </Item.Group>
    )
}

export default Card