import React,{Component}from 'react'
import { Image, Item,Label,Button,Icon,Segment,Card} from 'semantic-ui-react'
import './MainPage.css'
import MyProject from './MyProject'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />



export default class ProjectPage extends Component{
  
    render(){
        return(

          <Card.Group style={{position:"fixed",left:"55%",transform:"translate(-50%,0)",top:"20%",height:"500px",width:"1500px"}}>
            <MyProject project_name="project_1" project_description="hahahahahahkhakfhafk hkadfkad hfkaheufkadjfhaf" project_id="1"/>
            <MyProject project_name="project_2" project_description="hahahahahahkhakfhafk hkadfkad hfkaheufkadjfhaf" project_id="2"/>
            <MyProject project_name="project_3" project_description="hahahahahahkhakfhafk hkadfkad hfkaheufkadjfhaf" project_id="3"/>
            <MyProject project_name="project_4" project_description="hahahahahahkhakfhafk hkadfkad hfkaheufkadjfhaf" project_id="4"/>
          </Card.Group>
        )
    }
}
