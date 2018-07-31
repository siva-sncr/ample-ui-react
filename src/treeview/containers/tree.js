import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

import 'react-sortable-tree/style.css';

import Search from '../components/search';

class Tree extends Component {
  state = {
    treeData: [{ title: 'Region', children: [{ title: 'Substation' }, { title: 'Substation1' }] }],
    searchString: null,
    searchFocusIndex: 0,
    searchFoundCount: 0
  };

  setStateselectPrevMatch = () =>
    this.setState({
      searchFocusIndex:
        this.state.searchFocusIndex !== null
          ? (this.state.searchFoundCount + this.state.searchFocusIndex - 1) % this.state.searchFoundCount
          : this.state.searchFoundCount - 1,
    });

  selectNextMatch = () =>
    this.setState({
      searchFocusIndex:
        this.state.searchFocusIndex !== null
          ? (this.state.searchFocusIndex + 1) % this.state.searchFoundCount
          : 0,
    });

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

        <Search
          searchFoundCount={this.state.searchFoundCount}
          selectPrevMatch={this.selectPrevMatch}
          selectNextMatch={this.selectNextMatch}
          searchFocusIndex={this.state.searchFocusIndex}
          inputChangedHandler={evt => this.setState({ searchString: evt.target.value })} 
        />

        <div style={{ flex: '1 0 50%', padding: '0 0 0 15px' }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            theme={FileExplorerTheme}
            searchQuery={this.state.searchString}
            searchFocusOffset={this.state.searchFocusIndex}
            searchFinishCallback={matches =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex: matches.length > 0 ? this.state.searchFocusIndex % matches.length : 0
              })
            }
          />
        </div>
        
      </div>
    );
  }
}

export default Tree;
