import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

import 'react-sortable-tree/style.css';
import * as treeBuilderActions from '../actions/index';
import Search from '../components/search';
import axios from '../../services/index';
import withErrorHandler from '../../hoc/withErrorHandler';

class Tree extends Component {
  componentDidMount() {
    this.props.onInitTree();
  }

  state = {
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
            treeData={this.props.tree}
            onChange={treeData => treeData}
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

const mapStateToProps = state => {
  return {
    tree: state.treeviewData.tree
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInitTree: () => dispatch(treeBuilderActions.initTree())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Tree, axios));
