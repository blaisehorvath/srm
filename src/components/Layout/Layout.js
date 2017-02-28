/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { connect, } from 'react-redux'

const muiTheme = getMuiTheme(null, {
  userAgent: false,
})

// Material-ui components use react-tap-event-plugin to listen for touch events
// because onClick is not fast enough
injectTapEventPlugin()

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    user: PropTypes.object.isRequired,
  }

  componentDidMount () {
    this.forceUpdate()
  }

  render () {
    const { children, } = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header/>
          {React.Children.only(children)}
        </div>
      </MuiThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

const mapStateToProps = (state) => {
  const user = state.user
  return {
    user,
  }
}

export default withStyles(s)(connect(mapStateToProps)(Layout))

// class Layout extends React.Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired,
//   };
//
//   componentDidMount() {
//     // Needed for onTouchTap
//     // http://stackoverflow.com/a/34015469/988941
//     console.log("NAGY REDVAS FASZ");
//   }
//
//   render() {
//     return (
//       <MuiThemeProvider>
//         <div>
//           <Header />
//           {this.props.children}
//           <Footer />
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
//
// export default withStyles(s)(Layout);
