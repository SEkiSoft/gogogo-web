import $ from 'jquery';

export default function request(url, opts, dispatch) {
  const requestURL = URL + url;
  let args = {};
  const headers = {
    'Content-Type': 'application/json',
    Authorization: getAuthToken(),
    Accept: 'application/json'
  };
  args = Object.assign({
    method: 'get',
    headers,
    type: 'json'
  }, opts, { url: requestURL });
  args = Object.assign({
    method: 'get',
    headers,
    type: 'json'
  }, opts, { url: requestURL });

  return new Promise((resolve, reject) => {
    $.ajax(args).then((data) => {
      resolve(data);
    }).fail((jqXHR, textStatus, errorThrown) => {
      const error = (jqXHR && jqXHR.responseJSON) ?
                      jqXHR.responseJSON.message :
                      'Error Making Request';
      reject(error);
    });
  });
}
