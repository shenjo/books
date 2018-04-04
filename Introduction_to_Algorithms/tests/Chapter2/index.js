import test from 'ava';

import funcs from '../../Chapter2'

function sortTesting(sortMethod, assert, message) {
    assert.deepEqual(sortMethod([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], message);
    assert.deepEqual(sortMethod([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5], message);
    assert.deepEqual(sortMethod([3, 7, 4, 15, 34, 58, 24, 4, 1, 90]), [1, 3, 4, 4, 7, 15, 24, 34, 58, 90], message);
}

test('insert sort testing', t => {
    sortTesting(funcs.INSERT_SORT, t, 'insert sort');
});


test('insert sort(DESC) testing', t => {
    t.deepEqual(funcs.INSERT_SORT_DESC([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    t.deepEqual(funcs.INSERT_SORT_DESC([5, 4, 3, 2, 1]), [5, 4, 3, 2, 1]);
    t.deepEqual(funcs.INSERT_SORT_DESC([3, 7, 4, 15, 34, 58, 24, 4, 1, 90]), [1, 3, 4, 4, 7, 15, 24, 34, 58, 90].reverse());
});

test('two number add testing', t => {
    t.deepEqual(funcs.TWO_NUMBER_ADD([1, 1, 0], [1, 1, 1, 1, 1, 1]), [1, 0, 0, 0, 1, 0, 1]); //6+63 === 69
    t.deepEqual(funcs.TWO_NUMBER_ADD([1, 1, 1, 1, 1, 1], [1, 1, 0]), [1, 0, 0, 0, 1, 0, 1]); //63+6 === 69
    t.deepEqual(funcs.TWO_NUMBER_ADD([1, 1], [1, 1, 0]), [1, 0, 0, 1]) //3+6===9

});


test('Merge sort testing', t => {
    sortTesting(funcs.MERGE_SORT, t, 'Merge sort testing');
});

test('Check sum ', t => {
    t.deepEqual(funcs.CHECK_SUMS([3, 4, 5, 6, 7, 8, 9], 9), [[1, 2],[0, 3]])
});



