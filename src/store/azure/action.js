import { GET_AZURE_LIST } from './action-type';

export const getAzureList = () => {
  return (dispatch) => {
    return fetch('/mock/azure-list.json')
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_AZURE_LIST,
            data: res,
          });
        }
      });
  };
};
