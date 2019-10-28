import { GET_DATADOG_LIST } from './action-type';

export const getDatadogList = () => {
  return (dispatch) => {
    return fetch('/mock/data-dog.json')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_DATADOG_LIST,
            data: res,
          });
        }
      });
  };
};
