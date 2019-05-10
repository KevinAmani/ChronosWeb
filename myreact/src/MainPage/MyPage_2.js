import React, {Component} from 'react';
import './MainPage.css';
import DataList from './GetData';
import ThePersonalCard from './PersonCard';
import { Header, Icon } from 'semantic-ui-react';
import ProjectPage from './ProjectPage';

export default class MyMainPage_2 extends Component{
    render(){
        return(
            <div className="App" >
                    <ProjectPage/>
                <img className="page_01.png" src={global.constants.website+"page_01.png"} style={{position:"absolute",right:"-80px",bottom:"-20px",zIndex:"-1",maxWidth:"1000px"}}/>
            </div>
        )
    }
}