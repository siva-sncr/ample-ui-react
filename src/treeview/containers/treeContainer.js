import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

import 'react-sortable-tree/style.css';
import * as treeBuilderActions from '../actions/index';
import Aux from '../../hoc/aux';
import Search from '../components/searchComponent';
import ContextMenu from '../components/contextMenuComponent';
import axios from '../../services/index';
import withErrorHandler from '../../hoc/withErrorHandler';
import * as treeMethods from './treeMethods';
import TreeOptions from './treeOptionsContainer';

class Tree extends Component {

  state = {
    searchString: null,
    searchFocusIndex: 0,
    searchFoundCount: 0,
    tree: [],
    clickedNode: null,
    contextMenu: {
      display: "none",
      top: 0,
      left: 0
    },
    openModal: false,
    action: ""
  };

  componentDidMount() {
    this.setState({
      tree: this.props.tree
    })

    document.addEventListener('mousedown', (evt) => {
      if (evt.target.outerHTML.indexOf("<li>") !== 0) {
        this.setState({
          contextMenu: {
            display: 'none'
          }
        })
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tree: nextProps.tree
    })
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
    return data.node.type === 'SITE'
  }

  loadNextLevel = (clickedNode) => {
    if (!clickedNode.node.expanded) {
      let routeParams = treeMethods.updateRouteParams(clickedNode, this.props.tree)
      this.props.onExpandNode(clickedNode, routeParams);
    }
  }

  openContextMenu = (event, clickedNode) => {
    this.setState({
      clickedNode: clickedNode,
      contextMenu: {
        display: 'block',
        top: event.target.offsetHeight + event.target.offsetTop + (clickedNode.treeIndex * 27) + 20,
        left: event.target.offsetLeft + event.target.offsetWidth + (clickedNode.lowerSiblingCounts.length * 15) + 70
      }
    })
  }

  callRespectiveAction = (action) => {
    this.setState({
      action: action,
      openModal: true,
      contextMenu: {
        display: 'none'
      }
    })
  }

  closeModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    return (
      <Aux>
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
                this.props.onDropTree(treeData)
              }
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
                  this.loadNextLevel(clickedNode);
                },
                onContextMenu: (event) => {
                  event.preventDefault();
                  this.openContextMenu(event, clickedNode)
                }
              })}
            />
          </div>
        </div>
        <ContextMenu clicked={(action) => this.callRespectiveAction(action)} context={this.state.contextMenu} />
        <TreeOptions show={this.state.openModal} clickedNode={this.state.clickedNode} closeModal={this.closeModal} />
      </Aux>
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
