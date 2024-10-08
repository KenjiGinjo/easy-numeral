export interface EasyNumeralBytes {
  value: number
  decimals?: number
}

export function bytes({ value, decimals = 2 }: EasyNumeralBytes): string {
  if (value === 0)
    return '0 B'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(value) / Math.log(k))

  if (i > sizes.length - 1) {
    return `${Number.parseFloat((value / k ** (sizes.length - 1)).toFixed(dm))} ${sizes[sizes.length - 1]}`
  }

  return `${Number.parseFloat((value / k ** i).toFixed(dm))} ${sizes[i]}`
}
