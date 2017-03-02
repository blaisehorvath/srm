/**
 * Created by blaise on 2017.03.01..
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// eslint-disable-next-line no-alert
import scss from './projects.scss';  // eslint-disable-line no-alert
import ProjectCard from './components/ProjectCard';
import WebDev from './components/WebDev';
import Embedded from './components/Embedded';
import IOT from './components/IOT';


const cardSettings = [
  {
    title: 'Web Application Development',
    titleIcon: 'programming.svg',
    children: <WebDev />,
  },
  {
    title: 'Embedded systems design',
    titleIcon: 'microchip.svg',
    img: 'es.jpg',
    children: <Embedded />,
  },
  {
    title: 'IOT Software Development',
    titleIcon: 'cloud-computing.svg',
    img: 'es.jpg',
    children: <IOT />,
  },

];

class ProjectView extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <div className={scss.root}>
        <div className={scss.container}>
          <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ProjectCard key={1} {...cardSettings[0]} />
            <ProjectCard key={2} {...cardSettings[1]} />
            <ProjectCard key={3} {...cardSettings[2]} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(scss)(ProjectView);
