/**
 * Created by blaise on 2017.02.28..
 */
import React from 'react';
import { Tabs, Tab } from 'material-ui';
import Link from '../Link/Link';
import { connect } from 'react-redux';
import css from './Header.css';

const buttons = [
  { key: 0, label: 'About us', path: 'about' },
  { key: 1, label: 'Projects', path: 'projects' },
  { key: 2, label: 'Team', path: 'team' },
  { key: 3, label: 'Contact us', path: 'contact' },
  { key: 4, label: 'Blog', path: 'blog' },
];

const HeaderButtons = (props) => {
  const basePath = props.activePath.path.split('/')[1];
  const initSelIndex = buttons.findIndex(buttonConf => buttonConf.path === basePath);
  return (
    <Tabs className={css.headerTabs} initialSelectedIndex={initSelIndex}>
      {buttons.map(buttonConf => <Tab key={buttonConf.key} className={css.headerTab} label={buttonConf.label} containerElement={<Link to={`/${buttonConf.path}`} />} />)}
    </Tabs>
  );
};

export default connect(state => ({ activePath: state.path }))(HeaderButtons);
