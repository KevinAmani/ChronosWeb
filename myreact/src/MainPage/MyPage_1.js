import React, {Component} from 'react';
import './MainPage.css';
import MyHeader from './MyHead';


export default class MyMainPage_1 extends Component{
    render(){
        return(
            <div>
                <MyHeader/>
                <div className="center_block">
                
                    <img className="tittle_img" src={global.constants.website+"tittle.png"} style={{top:"20%"}}/>
                </div>
            </div>
        )
    }
}