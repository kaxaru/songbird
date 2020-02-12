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
       console.log("===========")
       console.log(this.props)
       console.log("===========")
       let el = e.currentTarget.children[0]
       if(el.classList.contains('eye') && !this.props.immutable) {
           el.classList.remove('eye')
           if (check) 
                el.classList.add('calendar', 'check')
            else
                el.classList.add('calendar', 'times')
       }
       this.setState({ activeItem: name, id: id})   
    } 

    item = () => {
        const { activeItem } = this.state
        let { store, stage } = this.props
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