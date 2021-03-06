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
import * as treeViewUtility from '../../utility/treeViewUtility';

class Tree extends Component {

  state = {
    searchString: null,
    searchFocusIndex: 0,
    searchFoundCount: 0,
    tree: [],
    clickedNode: null,
    contextClass: "",
    openModal: false,
    action: ""
  };

  componentDidMount() {
    this.setState({
      tree: this.props.tree
    })
  }

  componentWillMount() {
    document.addEventListener('mousedown', (evt) => {
      if (evt.target.outerHTML.indexOf("<li>") !== 0) {
        this.setState({
          contextClass: ""
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

  setStateselectPrevMatch = () => {
    this.setState({
      searchFocusIndex: this.state.searchFocusIndex !== null ? (this.state.searchFoundCount + this.state.searchFocusIndex - 1) % this.state.searchFoundCount : this.state.searchFoundCount - 1,
    });
  }

  selectNextMatch = () => {
    this.setState({
      searchFocusIndex: this.state.searchFocusIndex !== null ? (this.state.searchFocusIndex + 1) % this.state.searchFoundCount : 0,
    });
  }

  disableOrEnableDrag = (data) => {
    return data.node.type === 'SITE'
  }

  loadNextLevel = (clickedNode) => {
    treeMethods.removeShadow();
    if (!clickedNode.node.expanded) {
      let routeParams = treeMethods.updateRouteParams(clickedNode, this.props.tree)
      this.props.onExpandNode(clickedNode, routeParams);
      treeMethods.updateShadow(clickedNode);
    } else {
      this.props.onCloseNode(clickedNode);
    }
  }

  openContextMenu = (event, clickedNode) => {
    this.setState({
      clickedNode: clickedNode,
      contextClass: "context" + clickedNode.node.type + clickedNode.node.name
    })
  }

  callRespectiveAction = (event, action) => {
    event.stopPropagation();
    this.setState({
      action: action,
      openModal: true,
      contextClass: ""
    })
  }

  closeModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    return (
      <Aux>
        <div className="left-nav">

          <Search
            searchFoundCount={this.state.searchFoundCount}
            selectPrevMatch={this.selectPrevMatch}
            selectNextMatch={this.selectNextMatch}
            searchFocusIndex={this.state.searchFocusIndex}
            inputChangedHandler={evt => this.setState({ searchString: evt.target.value })}
          />

          <div className="tree" >
            <SortableTree
              treeData={this.state.tree}
              onChange={treeData => { this.props.onDropTree(treeData) }}
              theme={FileExplorerTheme}
              searchQuery={this.state.searchString}
              searchFocusOffset={this.state.searchFocusIndex}
              canDrag={(clickedNode) => this.disableOrEnableDrag(clickedNode)}
              searchFinishCallback={matches => this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex: matches.length > 0 ? this.state.searchFocusIndex % matches.length : 0
              })}
              generateNodeProps={clickedNode => ({
                onClick: (event) => { this.loadNextLevel(clickedNode) },
                onContextMenu: (event) => {
                  event.preventDefault();
                  this.openContextMenu(event, clickedNode)
                },
                buttons: [
                  <span>{treeViewUtility.fontIcon[clickedNode.node.type]}</span>,
                  <div style={{ paddingLeft: (clickedNode.node.name.length * 6), display: this.state.contextClass === "context" + clickedNode.node.type + clickedNode.node.name ? 'block' : 'none' }}>
                    <ContextMenu clicked={(event, action) => this.callRespectiveAction(event, action)} />
                  </div>
                ],
                className: clickedNode.node.arrow === 'right' ? `glyphicon glyphicon-menu-right shadow${clickedNode.node.type + clickedNode.node.name.replace(/ /g,'')}` : (clickedNode.node.arrow === 'down' ? `glyphicon glyphicon-menu-down shadow${clickedNode.node.type + clickedNode.node.name.replace(/ /g,'')}` : ''),
              })}
            />

          </div>
        </div>
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
    onExpandNode: (clickedNode, routeParams) => dispatch(treeBuilderActions.expandNode(clickedNode, routeParams)),
    onCloseNode: (clickedNode) => dispatch(treeBuilderActions.onCloseNode(clickedNode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Tree, axios));
