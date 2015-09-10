import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  buildURL(type, id, record) {
    var host = this.get('host');
    var url = [];
    if (host) {
      url.push(host);
    }
    url.push('2698808883843161'); // TODO: Make this configurable
    url.push('xbox360games')
    return url.join('/');
  }
});
