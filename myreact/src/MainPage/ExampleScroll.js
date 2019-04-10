import React,{Component}from 'react'
import { Image, Item,Label,Button,Icon,Segment} from 'semantic-ui-react'
import './MainPage.css'
import MyProject from './MyProject'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />



export default class ExampleScroll extends Component{
  
    render(){
        return(
            <Segment style={{width:"900px",height:"570px",marginTop:"100px", position:"relative",left:"-50%",overflowX:"hidden",overflowY:"hidden"}}>
            <div style={{width:"1000px",height:"550px",overflow:"auto"}}>
            <Item.Group divided style={{width:"850px", height:"400px"}}> 

              <MyProject project_name="project_1" project_description="hahahahahahkhakfhafk hkadfkad hfkaheufkadjfhaf"/>
        
            <Item className='project_item'>
              <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        
              <Item.Content>
                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC Cinema</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Button primary floated='right'>
                    Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                  <Label>Limited</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
        
            <Item className='project_item'>
              <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        
              <Item.Content>
                <Item.Header as='a'>Watchmen</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Button primary floated='right'>
                    Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>

            <Item className='project_item'>
              <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        
              <Item.Content>
                <Item.Header as='a'>Watchmen</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Button primary floated='right'>
                    Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          </div>
          </Segment>
        )
    }
}
