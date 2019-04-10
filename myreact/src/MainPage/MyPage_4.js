import React, {Component} from 'react';
import './MainPage.css';
import './Config';
import CommentForm from './CommentForm';
import {Segment} from 'semantic-ui-react';

export default class MyPage_4 extends Component{
    render(){
        return(
            <div className="App">
                    <CommentForm/>
            </div>
        )
    }
}