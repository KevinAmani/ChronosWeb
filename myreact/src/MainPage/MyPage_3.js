import React, {Component} from 'react';
import './MainPage.css';
import './Config';
import ProjectPage from './ProjectPage';
import {Segment} from 'semantic-ui-react';
import ThePersonalCard from './PersonCard';

export default class MyMainPage_3 extends Component{
    render(){
        return(
            <div>
                <div >
                <ThePersonalCard/>
                </div>
                <img className="page_02.png" src={global.constants.website+"page_02.png"} style={{position:"absolute",top:"0px",zIndex:"-1",maxWidth:"1000px"}}/>
                
            </div>
        )
    }
}