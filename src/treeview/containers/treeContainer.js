import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

import 'react-sortable-tree/style.css';
import * as treeBuilderActions from '../actions/index';
import Search from '../components/searchComponent';
import axios from '../../services/index';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as treeMethods from './treeMethods';

class Tree extends Component {

  state = {
    searchString: null,
    searchFocusIndex: 0,
    searchFoundCount: 0,
    tree: null,
    clickedNode: null
  };

  componentDidMount () {
    this.setState({
      tree: this.props.tree
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tree: nextProps.tree
    })
    //treeMethods.findCurrentRouteActions (this.props.currentRoute);
  }

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

  disableOrEnableDrag = (data) => {
    return data.node.type === 'REGION'
  }

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
            treeData={this.state.tree}
            onChange={treeData => {
              this.props.onDropTree(treeData)}
            }
            theme={FileExplorerTheme}
            searchQuery={this.state.searchString}
            searchFocusOffset={this.state.searchFocusIndex}
            canDrag={(clickedNode) => this.disableOrEnableDrag(clickedNode)}
            searchFinishCallback={matches =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex: matches.length > 0 ? this.state.searchFocusIndex % matches.length : 0
              })
            }
            generateNodeProps={clickedNode => ({
              onClick: (event) => { 
                this.props.onExpandNode(clickedNode, this.props.routeParams);
              },
            })}
          />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tree: state.treeviewData.tree,
    routeParams: state.treeviewData.routeParams,
    currentRoute: state.headerData.currentRoute
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDropTree: (tree) => dispatch(treeBuilderActions.dropTree(tree)),
    onExpandNode: (clickedNode, routeParams) => dispatch(treeBuilderActions.expandNode(clickedNode, routeParams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Tree, axios));
