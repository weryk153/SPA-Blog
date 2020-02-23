/* eslint-disable react/jsx-one-expression-per-line */
'use strict'

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <Link className="logo btn" to="/">
      Kuren
    </Link>

    <ul className="nav-group">
      <li className="nav-li btn">
        <Link className="nav-link" to="/posts">
          文章列表
        </Link>
      </li>
      <li className="nav-li btn">
        <Link className="nav-link" to="/about">
          關於我
        </Link>
      </li>
    </ul>
  </nav>
);


function First(props) {
  const { data } = props;
  return (
    <section>
      {data.map(e => (
        <Link key={e.id} className="list link" to={`/posts/${e.id}`}>
          <div className="list-title">
            {e.title}
          </div>
        </Link>
      ))}
    </section>
  );
}

function Page(props) {
  const { dataItem } = props;

  return (
    <section className="page">
      <article className="list">
        <h2 className="">
          {dataItem.title}
        </h2>
        <p>
          {dataItem.body}
        </p>
      </article>
    </section>
  );
}

export { Navbar, First, Page };