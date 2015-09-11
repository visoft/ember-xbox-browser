import { moduleForModel, test } from 'ember-qunit';

moduleForModel('one-title', 'Unit | Serializer | one title', {
  // Specify the other units that are required for this test.
  needs: ['serializer:one-title']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
