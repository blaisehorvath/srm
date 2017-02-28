/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import AppBar from 'material-ui/AppBar'
import HeaderButtons from './HeaderButtons'

const appbarOptions = {
  iconElementLeft: <HeaderButtons/>,
  style: {
    color: 'blue'
  }
}

class Header extends React.Component {
  render() {
    return (
      <AppBar {...appbarOptions}  />
    );
  }
}

export default withStyles(s)(Header);
