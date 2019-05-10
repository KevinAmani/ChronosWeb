import React,{Component}from 'react'
import { Form, Input, TextArea, Button, Segment, Message} from 'semantic-ui-react'
import './MainPage.css'
import axios from 'axios';
import './Config';



export default  class CommentForm extends Component{ 

    state = {
        
        name:"",
        email:"",
        content:"",
        success:false
    }

    handleChange = (e,{name,value}) => this.setState({[name]:value})

    handleSubmit = () => {
        console.log(this.state);
        axios.post(global.constants.mainsite+'comment', {
                
                name:this.state.name,
                email:this.state.email,
                content:this.state.content
        })
        this.setState({name:"",email:"",content:"",success:true});
    }

    render(){

        const {name,email,content,success} = this.state;
        
        return(
          
          <Segment inverted style={{width:"700px", positon:"absolute", left:"50%",transform:"translate(-50%,0)",textAlign:"initial",top:"20%"}}>
            <Form id="maincommentform" inverted onSubmit={this.handleSubmit} success={success}>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Name' name='name'  placeholder='Name' value={name} onChange={this.handleChange}/>
                <Form.Input fluid label='Email' name='email' placeholder='Email' value={email} onChange={this.handleChange}/>
              </Form.Group>
              <Form.TextArea label='Content' name='content' placeholder='Content...' value={content} style={{height:"300px"}} onChange={this.handleChange}/>
              <Message success header="Send successfully"/>
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        
        )
    }
}
