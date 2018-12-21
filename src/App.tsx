import React, { Component } from 'react';

import { IState } from './interfaces/IState'
import { Content } from './components/Content/content'
import { getNews } from './components/Api/api'
import { TabMenu } from './components/TabMenu/tabMenu'
import { themes } from './app-data/app-data'
import './App.css';

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state  = {
      themes: themes,
      content: [],
      activeTab: 0,
    };
  }

  onTabClick: (id: number) => void = (id) => {
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
        <Content articles={this.state.content} />
      </>
    );
  }
}

export default App;