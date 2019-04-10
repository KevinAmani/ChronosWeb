import React, {Component} from 'react';
import './MainPage.css';


export default class MyMainPage_1 extends Component{
    render(){
        return(
            <div className="center_block">
                <img className="tittle_img" src={global.constants.website+"tittle.png"}/>
            </div>
        )
    }
}