import React, {Component} from 'react';
import './MainPage.css';
import './Config';
import ProjectPage from './ProjectPage';
import CommentForm from './CommentForm';
import {Segment} from 'semantic-ui-react';

export default class MyMainPage_3 extends Component{
    render(){
        return(
            <div>
                <img className="page_02.png" src={global.constants.website+"page_02.png"} style={{position:"absolute",top:"-80px",zIndex:"-1",maxWidth:"1000px"}}/>
                    <ProjectPage/>
            </div>
        )
    }
}