import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'try-torii-mocha/tests/helpers/start-app';
import destroyApp from 'try-torii-mocha/tests/helpers/destroy-app';
import { stubValidSession } from 'try-torii-mocha/tests/helpers/torii'

describe('Acceptance | index', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit / (not authenticated)', function() {
    visit('/');

    return andThen(() => {
      expect(find('#is-not-authenticated').length).to.equal(1);
    });
  });

  it('can visit / (authenticated)', function() {
    stubValidSession(application);
    visit('/');

    return andThen(() => {
      expect(find('#is-authenticated').length).to.equal(1);
    });
  });
});
