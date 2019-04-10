import React,{Component}from 'react'
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'
import './MainPage.css'
import axios from 'axios';
import './Config';



export default  class CommentForm extends Component{ 

    state = {
        comment:"",
        SubmitComment:""
    }

    handleChange = (e,{name,value}) => this.setState({[name]:value})

    handleSubmit = () => {
        const{comment} = this.state
        this.setState({SubmitComment:comment})
        alert(comment)
        axios.post(global.constants.mainsite+'comment', {
                content: comment
        })
    }

    render(){

        const {comment,SubmitComment} = this.state

        return(
        
          <Segment inverted style={{width:"700px", positon:"absolute", left:"50%",transform:"translate(-50%,0)",textAlign:"initial",top:"100px"}}>
            <Form inverted >
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
              </Form.Group>
              <Form.TextArea label='About' placeholder='Tell us more about you...' style={{height:"300px"}}/>
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        
        )
    }
}
