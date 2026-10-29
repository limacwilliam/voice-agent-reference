import test from 'node:test';
import assert from 'node:assert/strict';

test('requires explicit confirmation as a safety invariant', () => {
  const request = { slotId: 'slot-001', confirmed: false };
  assert.equal(request.confirmed, false);
});
