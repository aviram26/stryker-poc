import assert from 'assert';
import {myFunc} from '../src/js/sample'

describe('The sample', () => {
    it("is returns ok", () => {
        assert.equal(myFunc(), 'ok');
    });
});
