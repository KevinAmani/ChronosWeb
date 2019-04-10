import React,{Component} from 'react';
import { Input, Menu } from 'semantic-ui-react'

export default class MyHeader extends Component{
    //state

    //function of controling

    //render
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <Menu secondary>
        <Menu.Menu position="left">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
            />
        </Menu.Menu>
      </Menu>
    )
  }
}