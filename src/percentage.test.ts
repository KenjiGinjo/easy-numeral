import { describe, expect, test } from 'bun:test'
import { percentage, percentageToString } from './percentage'

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
