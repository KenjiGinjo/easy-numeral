import { describe, expect, test } from 'bun:test'
import { bytes } from './bytes'

describe('bytes', () => {
  test('normal usage', () => {
    expect(bytes({ value: 0 })).toEqual('0 B')
    expect(bytes({ value: 1 })).toEqual('1 B')
    expect(bytes({ value: 1000 })).toEqual('1000 B')
    expect(bytes({ value: 1024 })).toEqual('1 KB')
    expect(bytes({ value: 2048 })).toEqual('2 KB')
    expect(bytes({ value: 2560 })).toEqual('2.5 KB')
    expect(bytes({ value: 1111 })).toEqual('1.08 KB')

    expect(bytes({ value: 2560000 })).toEqual('2.44 MB')
    expect(bytes({ value: 1024 ** 3 })).toEqual('1 GB')
    expect(bytes({ value: 1024 ** 4 })).toEqual('1 TB')
    expect(bytes({ value: 1024 ** 5 })).toEqual('1 PB')
    expect(bytes({ value: 1024 ** 6 })).toEqual('1 EB')
    expect(bytes({ value: 1024 ** 7 })).toEqual('1 ZB')
    expect(bytes({ value: 1024 ** 8 })).toEqual('1 YB')
    expect(bytes({ value: 1024 ** 9 })).toEqual('1024 YB')
    expect(bytes({ value: 1024 ** 10 })).toEqual('1048576 YB')
  })
})
