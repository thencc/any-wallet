import { assert, describe, expect, test } from 'vitest'

import { AnyWalletState } from '../dist/index'; // use dist not src (otherwise theres import order errs re circular imports)

describe('AnyWalletState', () => {
    test('activeAddress testo', () => {
        // console.log('AnyWalletState', AnyWalletState);
        expect(AnyWalletState.activeAddress).toBe('');
    })
});
