export interface EasyNumeralPercentage {
  value: number
  precision?: number
}

export function percentage({ value, precision }: EasyNumeralPercentage): number {
  let result = value * 100
  if (precision !== undefined) {
    result = Math.round(result * 10 ** precision) / 10 ** precision
  }
  return result
}

export function percentageToString({ value, precision }: EasyNumeralPercentage): string {
  if (precision === undefined) {
    return percentage({ value }).toString()
  }
  return percentage({ value, precision }).toFixed(precision)
}
