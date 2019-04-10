//prop-types for checking the property
import PropTypes from 'prop-types';
import MyPage_1 from './MyPage_1';
import MyPage_2 from './MyPage_2';
import MyPage_3 from './MyPage_3';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Container from './Container';
//The component of react, every component need to import it
import React, {Component} from 'react';
import './MainPage.css';
import './Config';
import MyHeader from './MyHead';
//The components of semantic-ui
import {
    Transition,
    Menu,
    Sidebar,
} from 'semantic-ui-react';



//For changing the statement in the html, we need to make it as an const and use => function

//Define the type of the property



export default class SidebarExampleTransitions extends Component {
    //state
    state = {
        animation: 'push',
        direction: 'left',
        visible:false,
        visible_1:false,
        page:1,
    }
    //function that control state
    handleAnimationChange = () =>() => {this.setState({visible:!this.state.visible});};


    render(){
        const {animation,direction,visible} = this.state
        
        return(
        <Router className="App">
        <Sidebar.Pushable as="div" style={{height:"100%"}}>
        
        <Sidebar as={Menu} animation={animation} direction={direction} icon='lableled' inverted vertical visible={visible} 
            style={{position:"sticky",height:"100%",float:"left",width:"255px"}}>
            <Menu.Item as='div' style={{height:"255px",border:"30px"}}>
                <img src={global.constants.website+"logo4.png"} alt="logo" style={{top:"40px",height:"180px",left:"40px",position:"absolute"}}/>
            </Menu.Item>
            <Menu.Item as={Link} style={{fontSize:"1.3em"}} to="/">Home</Menu.Item>
            <Menu.Item as={Link} style={{fontSize:"1.3em"}} to="/page_2">Developers</Menu.Item>
            <Menu.Item as={Link} style={{fontSize:"1.3em"}} to="/page_3">Projects</Menu.Item>
            <Menu.Item as={Link} style={{fontSize:"1.3em"}} to="/page_4">Comment</Menu.Item>
            </Sidebar>

        <Sidebar.Pusher style={{width:"100%",position:"absolute",overflow:"sroll",height:"100%"}}>
                <img className="menu_button" onClick={this.handleAnimationChange()} src={global.constants.website+"menu_button.png"}/>
                <MyHeader/>
                <Container/>
                
        </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Router>
        )
    }
}