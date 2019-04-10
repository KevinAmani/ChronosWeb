import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class BlogLeftMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact icon='github' vertical>
        <Menu.Item name='github' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          <Icon name='big github' />
        </Menu.Item>

        <Menu.Item
          name='video camera'
          active={activeItem === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='big video camera' />
        </Menu.Item>

        <Menu.Item
          name='linkify'
          active={activeItem === 'linkify'}
          onClick={this.handleItemClick}
        >
          <Icon name='big linkify' />
        </Menu.Item>
      </Menu>
    )
  }
}