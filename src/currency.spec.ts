import { describe, expect, test } from 'bun:test'
import { currency } from './currency'

describe('currency', () => {
  test('normal usage', () => {
    expect(currency({ amount: 2 })).toEqual('$ 0.02')
    expect(currency({ amount: 100 })).toEqual('$ 1.00')
    expect(currency({ amount: 999 })).toEqual('$ 9.99')

    expect(currency({ amount: 2, options: { decimals: 0 } })).toEqual('$ 0')
    expect(currency({ amount: 100, options: { decimals: 0 } })).toEqual('$ 1')
    expect(currency({ amount: 999, options: { decimals: 0 } })).toEqual('$ 10')

    expect(currency({ amount: 2, options: { symbol: '¥' } })).toEqual('¥ 0.02')
    expect(currency({ amount: 100, options: { symbol: '£' } })).toEqual('£ 1.00')
    expect(currency({ amount: 999, options: { symbol: '' } })).toEqual('9.99')

    expect(currency({ amount: 2, options: { sign: true } })).toEqual('$ +0.02')
    expect(currency({ amount: 100, options: { sign: true } })).toEqual('$ +1.00')
    expect(currency({ amount: 999, options: { sign: true } })).toEqual('$ +9.99')

    expect(currency({ amount: -2, options: { sign: true } })).toEqual('$ -0.02')
    expect(currency({ amount: -100, options: { sign: true } })).toEqual('$ -1.00')
    expect(currency({ amount: -999, options: { sign: true } })).toEqual('$ -9.99')
  })
})
