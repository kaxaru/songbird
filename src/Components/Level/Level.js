import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './level.css'

export default class Level extends Component {

  render() {
    return (
      <Menu stackable>
        <Menu.Item
          name='features'
        >
          Разминка
        </Menu.Item>

        <Menu.Item
          name='features'
        >
          Воробьиные
        </Menu.Item>

        <Menu.Item
          name='testimonials'
        >
          Лесные
        </Menu.Item>

        <Menu.Item
          name='sign-in'

        >
          Певчие
        </Menu.Item>

        <Menu.Item
          name='sign-in'

        >
          Хищные
        </Menu.Item>

        <Menu.Item
          name='sign-in'

        >
          Морские
        </Menu.Item>

      </Menu>
    )
  }
}
