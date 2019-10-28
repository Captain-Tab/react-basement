import { combineReducers } from 'redux';
import azureList from './azure/reducer';
import datadogList from './datadog/reducer';

export default combineReducers({
  azureList,
  datadogList,
});
