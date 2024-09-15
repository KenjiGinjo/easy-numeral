interface EasyNumeralCurrency {
  amount: number
  options?: { decimals?: number, symbol?: string, sign?: boolean }
}

export function currency({ amount, options }: EasyNumeralCurrency): string {
  const { decimals = 2, symbol = '$', sign = false } = options || {}

  const dm = decimals < 0 ? 0 : decimals

  let num = (amount / 100).toFixed(dm)

  if (sign) {
    const _sign = amount > 0 ? '+' : ''
    num = _sign + num
  }

  if (symbol) {
    num = `${symbol} ${num}`
  }

  return num
}
