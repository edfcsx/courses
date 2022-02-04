import { API_URL } from './config';
import { toJson } from './utils';

import album from './album';
import search from './search';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  // eslint-disable-next-line class-methods-use-this
  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(toJson);
  }
}
