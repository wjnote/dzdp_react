import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from '../containers';
import Home from '../containers/Home';
import List from '../containers/List';
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';

export default class RouteMap extends React.Component {
  updateHandle() {
    // 路由变化的时触发函数
    // console.log(' 每次路由变化后触发');
  }
  render() {
    return (
      <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					{/*<Route path="list" component={List}/>
					<Route path="detail/:id" component={Detail}/>
					<Route path="*" component={NotFound}/>*/}
				</Route>
			</Router>
    );
  }
}
