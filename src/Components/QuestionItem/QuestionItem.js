import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import './QuestionItem.css'

export default class QuestionItem extends Component {
    state = { 
        activeItem: null,
        id: null
    }

    itemClick = (e, { id, name }) => {
       const check = this.props.checkAnswer(id) 
       console.log(check, "Target")
       let el = e.currentTarget.children[0]
       if(el.classList.contains('eye')) {
           el.classList.remove('eye')
           if (check) 
                el.classList.add('calendar', 'check')
            else
                el.classList.add('calendar', 'times')
       }
       this.setState({ activeItem: name, id: id}, /*() => {
           const check = this.props.checkAnswer(this.state.id)   
           console.log(check, "click")
       }*/)   
    } 

    item = () => {
        const { activeItem } = this.state
        let { store, stage } = this.props
        console.log(`currant stage ${stage}`)
        return store[stage].map((el) => {
            return (
                <Menu.Item key={el.id * (++stage)} id={el.id} name={el.name} active={activeItem === el.name} onClick={this.itemClick} ><Icon name='eye' />{el.name}</Menu.Item>
            )
        })
    }

    render() {
        return (
            <Menu inverted vertical>
                {this.item()}
            </Menu>
        )
    }
}