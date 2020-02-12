import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './level.css'

const levels = ['Разминка', 'Воробьиные', 'Лесные', 'Певчие', 'Хищные', 'Морские']

export default class Level extends Component {

  item = () => {
    return levels.map((el, id) => {
      return (
          <Menu.Item key={id} name={el} active={this.props.stage === id} >
            {el}
          </Menu.Item>
      )
    }) 
  }

  render() {
    return (
      <Menu stackable>
        {this.item()}
      </Menu>
    )
  }
}
