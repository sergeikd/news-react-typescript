import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Content } from './components/Content/content'
import { getNews } from './components/Api/api'
import { TabMenu } from './components/TabMenu/tabMenu'
import { themes } from './app-data/app-data'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: themes,
      content: [],
      activeTab: 0,
    };
    this.onTabClick = this.onTabClick.bind(this);
  }

  static propTypes = {
    themes: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.arrayOf(PropTypes.object),
    activeTab: PropTypes.number,
  };

  onTabClick = (id) => {
    this.setState({ activeTab: id })
    getNews(this.state.themes[id])
      .then(data => this.setState({ content: data.articles }));
  }

  componentDidMount() {
    this.onTabClick(0);
  }

  render() {
    return (
      <>
        <TabMenu themes={this.state.themes} activeTab={this.state.activeTab} onTabClick={this.onTabClick} />
        <Content content={this.state.content} />
      </>
    );
  }
}

export default App;