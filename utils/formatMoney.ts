export const formatMoney = (
  value: number | bigint,
  currency = 'NGN',
  locale = 'en-NG'
): string => {
  value = Number(value)
  const formatter = new Intl.NumberFormat(locale)
  return formatter.format(value)
}
