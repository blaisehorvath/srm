/**
 * Created by blaise on 2017.03.02..
 */
import React from 'react';
import TechLogo from './TechLogo';

const buildLogos = [
  { key: 2, src: 'logo_webpack_1.png' },
  { key: 1, src: 'logo_babel.png' },
  { key: 3, src: 'logo_gulp.png' },
];

const backEndLogos = [
  { key: 1, src: 'logo_node.png' },
  { key: 3, src: 'logo_mongodb.png' },
  { key: 2, src: 'logo_graphql.png' },
];

const frontEndLogos = [
  { key: 2, src: 'logo_js.png' },
  { key: 4, src: 'logo_html.png' },
  { key: 0, src: 'logo_react.svg' },
  { key: 1, src: 'logo-redux.png' },
  { key: 3, src: 'logo_sass.png' },
];
const WebDev = () => <div>
  <h2>About</h2>
  <p>
    We have experience in building modern web applications with cutting edge technologies.
    We have used different languages for web application development, so we are familiar with different approaches
    like Apache or Nginx, and many JS frameworks. If you want to upgrade from legacy web code, we can help you with that because we have experience
    in PHP, Perl and Python.
  </p>
  <h2>Web Development Stack</h2>
  <p>
    In our most recent projects we use WebPack, React, Redux, MongoDB and GraphQl.
    We have built server side rendered (universal javascript) and purely client side rendered applications too.
  </p>
  <h2>Building</h2>
  <p>
    We mainly use Webpack for building. But we have experience with Gulp+Browserify too. We write
    our code in the latest ES standard so we use Babel for transpiling.
  </p>
  <div style={{ textAlign: 'center' }}>
    {buildLogos.map(item => <TechLogo key={item.key} src={item.src} />)}
  </div>
  <h2>Back-end</h2>
  <p>
    We have experience in designing RESTful APIs. For back and we are using Node.js with Express.
    For the persistence layer we use MongoDB. We also have experience with NoSQL databases,
    like MySql or SQlite. For our most recent projects we also use GraphQL.
  </p>
  <div style={{ textAlign: 'center' }}>
    {backEndLogos.map(item => <TechLogo key={item.key} src={item.src} />)}
  </div>
  <h2>Front-end</h2>
  <p>
    For front-end we use React Redux and Google's Material design. We also have experience with a lot of
    frameworks like: jQuery, Bootstrap.
  </p>
  <div style={{ textAlign: 'center' }}>
    {frontEndLogos.map(item => <TechLogo key={item.key} src={item.src} />)}
  </div>
  <h2>Cloud and deployment</h2>
  <p>
    We have experience with AWS and Heroku.
  </p>
</div>;

export default WebDev;
