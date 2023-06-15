import { assert, describe, expect, test } from 'vitest'

// works but vscode doesnt like it...
import { AnyWalletState } from '@thencc/any-wallet'; // alias in vite config
// import { AnyWalletState } from '../src/state/index';

describe('AnyWalletState', () => {
    test('activeAddress testo', () => {
        // console.log('AnyWalletState', AnyWalletState);
        expect(AnyWalletState.activeAddress).toBe('');
    })
});


// test('JSON', () => {
//   const input = {
//     foo: 'hello',
//     bar: 'world',
//   }

//   const output = JSON.stringify(input)

//   expect(output).eq('{"foo":"hello","bar":"world"}')
//   assert.deepEqual(JSON.parse(output), input, 'matches original')
// })
