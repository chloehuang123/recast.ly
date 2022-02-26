/* eslint-disable */

import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    youtube_api_key: YOUTUBE_API_KEY,
    q: query
  }).done((items) => {
    if (callback) {
      callback(items);
    }
  }).fail(({ responseJSON }) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

export default searchYouTube;
