# Easy-Numeral

A javascript library for formatting and manipulating numbers. It is fully tested and has no dependencies. And it is fully compatible with **TypeScript** and **Bun**.

## Installation

```bash
bun add easy-numeral
```

## Examples

### bytes
format bytes to human readable string

```js
describe('bytes', () => {
  test('normal usage', () => {
    expect(bytes({ bytes: 0 })).toEqual('0 B')
    expect(bytes({ bytes: 1 })).toEqual('1 B')
    expect(bytes({ bytes: 1000 })).toEqual('1000 B')
    expect(bytes({ bytes: 1024 })).toEqual('1 KB')
    expect(bytes({ bytes: 2048 })).toEqual('2 KB')
    expect(bytes({ bytes: 2560 })).toEqual('2.5 KB')
    expect(bytes({ bytes: 1111 })).toEqual('1.08 KB')

    expect(bytes({ bytes: 2560000 })).toEqual('2.44 MB')
    expect(bytes({ bytes: 1024 ** 3 })).toEqual('1 GB')
    expect(bytes({ bytes: 1024 ** 4 })).toEqual('1 TB')
    expect(bytes({ bytes: 1024 ** 5 })).toEqual('1 PB')
    expect(bytes({ bytes: 1024 ** 6 })).toEqual('1 EB')
    expect(bytes({ bytes: 1024 ** 7 })).toEqual('1 ZB')
    expect(bytes({ bytes: 1024 ** 8 })).toEqual('1 YB')
    expect(bytes({ bytes: 1024 ** 9 })).toEqual('1024 YB')
    expect(bytes({ bytes: 1024 ** 10 })).toEqual('1048576 YB')
  })
})
```

### currency
format amount to currency string

```js
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
```

### percentage
format number to percentage string

```js
describe('percentage', () => {
  test('normal usage', () => {
    expect(percentage({ value: 1 })).toEqual(100)
    expect(percentage({ value: 0.974878234 })).toEqual(97.4878234)
    expect(percentage({ value: -0.43 })).toEqual(-43)
    expect(percentage({ value: 0.43 })).toEqual(43)
  })

  test('edge cases', () => {
    expect(percentage({ value: 0.974878234, precision: 2 })).toEqual(97.49)
    expect(percentage({ value: 0.974878234, precision: 0 })).toEqual(97)
    expect(percentage({ value: 0.974878234, precision: 1 })).toEqual(97.5)
    expect(percentage({ value: -0.43, precision: 1 })).toEqual(-43)
  })
})

describe('percentageToString', () => {
  test('normal usage', () => {
    expect(percentageToString({ value: 0.974878234 })).toEqual('97.4878234')
    expect(percentageToString({ value: 0.974878234, precision: 2 })).toEqual('97.49')
    expect(percentageToString({ value: 0.974878234, precision: 0 })).toEqual('97')
    expect(percentageToString({ value: 0.974878234, precision: 1 })).toEqual('97.5')
  })

  test('edge cases', () => {
    expect(percentageToString({ value: -0.43, precision: 1 })).toEqual('-43.0')
    expect(percentageToString({ value: 0.43, precision: 0 })).toEqual('43')
  })
})
```
