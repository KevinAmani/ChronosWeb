import React , { Component, createRef } from 'react'
import { Container, Divider,Header,Icon,Rail,Segment,Grid,Sticky,Ref } from 'semantic-ui-react'
import './BlogStyle.css'
import './BlogCitation'
import BlogCitation from './BlogCitation'
import BlogLeftMenu from './BlogLeftMenu'
import { Z_FIXED } from 'zlib';

export default class BlogContent extends Component {
    contextRef = createRef()
    render() {
      return (
        <div className='blog_div'>
        <Grid>

        <Grid.Column width={3}>
        <div style={{position:'fixed',top:'35%'}}>
        <BlogLeftMenu/>
        </div>
        </Grid.Column>

        <Grid.Column width={10}>

                
        
        <Container className="blog_date" textAlign='left'>May,13 2018</Container>
        <Container textAlign='center'>
            <Header className='blog_head'  textAlign='center'>
            <Header.Content className="blog_title" as='h1' size='huge'>Account Settings
            <Header.Subheader className="blog_subtitle">Manage your preferences</Header.Subheader>
            </Header.Content>
            </Header>
        </Container>
        <Container className="blog_author" textAlign='left'>Kaiwen Zhu  May,14 2019 3:00pm</Container>

        <Container className="blog_abstract" textAlign='justified'>
            gilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, 
        </Container>

        <Container className='blog_article' textAlign='justified'>
        
        <div >
          <p>
            <br/>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
            pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
            augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </div>
        </Container>
        
        <Container className="blog_citation" textAlign='left'>>
          <BlogCitation/>
        </Container>

        </Grid.Column>
        <Grid.Column width={2}>
        
        
        </Grid.Column>
        </Grid>
      </div>
      );
    }
  }
  
  


