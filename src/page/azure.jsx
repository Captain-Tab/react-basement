import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAzureList } from '../store/azure/action';

class Azure extends Component {
  componentDidMount() {
    this.props.getAzureList();
    this.timerId = setInterval(this.fetchListData, 600000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  fetchListData = () => {
    this.props.getAzureList();
  };
  render() {
    const { azureList } = this.props;
    console.log(azureList);
    return (
      <div>
        <h2>Services list and their statuses</h2>
        {azureList.length &&
          azureList.map((item, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '20px' }}>
              <div>name: {item.name}</div>
              <div>status: {item.status ? '✔️' : 'X'}</div>
              <div>description: {item.description}</div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    azureList: state.azureList.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAzureList: () => dispatch(getAzureList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Azure);
