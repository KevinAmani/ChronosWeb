import React, { Component } from 'react';
import './BlogHeader';
import BlogHeader from './BlogHeader';
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import BlogContent from './BlogContent';

export default class BlogPage extends Component {
  render() {
    return (
    <div >
      <BlogHeader/>
      <BlogContent/>
    </div>
    );
  }
}

