import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDatadogList } from '../store/datadog/action';

class DataDog extends Component {
  componentDidMount() {
    this.props.getDatadogList();
    this.timerId = setInterval(this.fetchListData, 600000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  fetchListData = () => {
    this.props.getDatadogList();
  };
  render() {
    const { datadogList } = this.props;
    console.log(datadogList);
    return (
      <div>
        <h2>List the five most recent service incidents</h2>
        {datadogList.length &&
          datadogList.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '20px' }}>
              <div>name: {item.name}</div>
              <div>time: {item.time}</div>
              <div>description: {item.description}</div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datadogList: state.datadogList.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getDatadogList: () => dispatch(getDatadogList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataDog);
