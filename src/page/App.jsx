import React from 'react';
import './style.scss';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Azure from './azure';
import Datadog from './dataDog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  render() {
    const { isActive } = this.state;
    return (
      <Router>
        <div className="layout">
          <div className="silder">
            <ul>
              <li
                className={isActive ? 'active' : 'no-active'}
                onClick={() => this.setState({ isActive: !isActive })}
              >
                <NavLink to="/azure">Azure</NavLink>
              </li>
              <li
                className={!isActive ? 'active' : 'no-active'}
                onClick={() => this.setState({ isActive: !isActive })}
              >
                <NavLink to="/datadog">Datadog</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/azure" component={Azure} />
              <Route exact path="/datadog" component={Datadog} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
