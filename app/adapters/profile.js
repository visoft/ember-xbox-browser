import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL(type, id, snapshot, requestType, query) {
    var host = this.get('host');
    var url = [];
    if (host) {
      url.push(host);
    }
    url.push(id);
    url.push('profile')
    return url.join('/');
  }
});
