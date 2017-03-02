/**
 * Created by blaise on 2017.03.02..
 */
import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import scss from '../projects.scss';

const titleStyle = {
  fontSize: 20,
  fontFamily: 'Fira Sans',
  fontWeight: 500,
};

export default class ProjectCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({ expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          className={scss.cardAvatar}
          title={this.props.title}
          avatar={this.props.titleIcon}
          actAsExpander
          showExpandableButton
          titleStyle={titleStyle}
        />

        <CardText className={scss.cardContent} expandable>
          {this.props.children}
        </CardText>

        <CardActions>
          {
            this.state.expanded ?
              <FlatButton label="Close" onTouchTap={this.handleReduce} />
            :
              <FlatButton label="Read more" onTouchTap={this.handleExpand} />
          }
        </CardActions>
      </Card>
    );
  }
}
