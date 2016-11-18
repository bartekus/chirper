import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: config.apiURL,
  authorizer: 'authorizer:oauth2' // ...and and this!
});
