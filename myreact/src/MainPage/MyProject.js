import React,{Component}from 'react'
import { Image, List,Label,Button,Icon,Segment,Card, Tab} from 'semantic-ui-react'
import './MainPage.css'
import './Config'
import axios from 'axios'

export default class MyProject extends Component{

  state={
    object:{},
    project_tab:[],
    project_name:"",
    project_meta:"",
    project_description:"",
    project_image:"",
  }

  constructor(props){
    super(props);
    axios.get(global.constants.mainsite+"my_project",
    {
      params: {
        project_id: parseInt(props.project_id)
      }
    }
    )
    .then(res =>{
        const data = res.data;
        const message = data.objects[0];
        this.setState({
            object:message,
            project_tab:message.project_tab,
            project_name:message.project_name,
            project_meta:message.project_meta,
            project_description:message.project_description,
            project_image:message.project_image,
        });
        console.log(message);
    })
  }


    //get the data 
    render(){
      const tabs = this.state.project_tab;
      const tabsElements = [];
      for(let tab of tabs){
          tabsElements.push(
            <List.Item style={{textAlign:'left'}}><Label color={tab.labelColor} ribbon >{tab.labelName}</Label></List.Item>
          )
      }
      return(

            <Card style={{margin:"30px"}} >
                <Card.Content >
                <List floated='left' >
                {tabsElements}
                </List>
                <Image floated='right' size='small' src={global.constants.website+"project/"+this.state.project_image} />
                </Card.Content>
                <Card.Content textAlign="left" href="dfafl">
                <Card.Header>{this.state.project_name}</Card.Header>
                <Card.Meta>{this.state.project_meta}</Card.Meta>
                <Card.Description>
                    {this.state.project_description}
                </Card.Description>
                </Card.Content>
            </Card>
      )
    }
  }