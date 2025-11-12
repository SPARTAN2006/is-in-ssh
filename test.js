import test from 'node:test';
import assert from 'node:assert/strict';
import isInSsh from './index.js';

test('returns boolean', () => {
	assert.equal(typeof isInSsh, 'boolean');
});
