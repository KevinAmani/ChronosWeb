import React,{Component} from 'react';
import {Card,Icon,Label,Menu,Tab,List} from 'semantic-ui-react';
import axios from 'axios';
import './Config';
import './MainPage.css'



export default class ThePersonalCard extends Component{
    state = {
        picture:"",
        header:"",
        meta:"",
        description:"",
        email:"",
        object:{},
    }

    extra = (
        <List>

            <List.Item>
            <List.Icon name='university'/>
            <List.Content><a href='https://en.nuist.edu.cn/'>Nanjing University of Information Science & Technology</a></List.Content>
            </List.Item>


            <List.Item>
            <List.Icon name='university'/>
            <List.Content><a href='https://www.gwu.edu/'>George Washington University</a></List.Content>
            </List.Item>

            <List.Item>
            <List.Icon name='address card'/>
            <List.Content><a href={global.constants.website+'resume.pdf'}>Resume</a></List.Content>
            </List.Item>
            

            <List.Item>
            <List.Icon name='marker' />
                <List.Content>Arington, VA</List.Content>
            </List.Item>

            <List.Item>
            <List.Icon name='mail' />
            <List.Content>
                <a href='mailto:5712254681kw@gamil.com'>5712254681kw@gmail.com</a>
            </List.Content>
            </List.Item>
            
            <List.Item>
                <List.Icon name='github'/>
                <List.Content>
                    <a href='https://github.com/KevinAmani'>KevinAmani</a>
                </List.Content>
            </List.Item>
        </List>
    )


    constructor(props){
        super(props);
        axios.get(global.constants.mainsite+"developer_profile")
        .then(res =>{
            const data = res.data;
            const message = data.objects[0];
            this.setState({
                object:message,
                picture:message.image,
                header:message.header,
                meta:message.meta,
                description:message.description,
                email:message.email,
            });
        })
    }

    render(){

        const {picture,header,meta,description,email,object} = this.state
        
        return(
            <div className="card_div" >
                {console.log(picture)}
                <Card
                    image = {global.constants.website+"KaiwenZhu/"+picture}
                    header = {header}
                    meta={meta}
                    description = {description}
                    extra = {this.extra}
                    raised={true}
                    style={{marginTop:"150px", position:"relative",left:"-50%",textAlign:"initial"}}
                />
            </div>
        ) 

    }
}
