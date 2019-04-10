import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import MyPage_1 from './MyPage_1';
import MyPage_2 from './MyPage_2';
import MyPage_3 from './MyPage_3';
import MyPage_4 from './MyPage_4';

function Container({ location }) {
  return (
    <Wrapper className="App">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 200 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={MyPage_1} />
              <Route path="/page_2" component={MyPage_2} />
              <Route path="/page_3" component={MyPage_3} />
              <Route path="/page_4" component={MyPage_4} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
    height:100%;
  }

  section.route-section {
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Container);