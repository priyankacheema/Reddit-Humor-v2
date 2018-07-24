import {expect} from 'code';
import * as types from './actions-list'


describe('action list', () => {

    it('should use a unique value for each action', () => {
        const sortedActionValues = Object.values(types).sort();

        sortedActionValues.reduce((previous, current) => {
            expect(current).not.equal(previous);

            return current;

        });

    });

});