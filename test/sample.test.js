import assert from 'assert';
import {myFunc} from '../src/js/sample'

describe('The sample', () => {
    it("returns ok", () => {
        assert.equal(myFunc(1, 3), 3);
    });
});
