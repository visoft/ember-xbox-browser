import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL(type, id, snapshot, requestType, query) {
    var host = this.get('host');
    var url = [];
    if (host) {
      url.push(host);
    }
    url.push(query.xuid);
    url.push('xboxonegames')
    return url.join('/');
  }
});