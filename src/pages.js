/* eslint-disable react/jsx-one-expression-per-line */
'use strict'

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { First, Page } from './components';
import '../css/normalize.css';
import '../css/style.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    const dataAPI = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json());

    this.setState({
      data: dataAPI,
    });
  }

  render() {
    const { data } = this.state;
    const { match } = this.props;
    return (
      <div className="post">
        <main>
          <Switch>
            {data.map(e => (
              <Route
                key={e.id}
                path={`${match.path}/${e.id}`}
                render={() => <Page dataItem={e} />}
              />
            ))}
            <Route
              path={`${match.path}`}
              data={data}
              render={() => <First data={data} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <main>
      <section>
        <article>
          <p>
            寫點東西吧...
          </p>
        </article>
      </section>
    </main>
  </div>
);

const About = () => (
  <div className="about">
    <main>
      <h1 className="main-title">About Me</h1>
      <section>
        <article>
          <p>
            SPA 練習作品
          </p>
          <p>
            Yeah
          </p>
        </article>
      </section>
    </main>
  </div>
);

export {
  Home,
  About,
  Post,
};