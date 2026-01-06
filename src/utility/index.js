import { useTimer } from 'react-timer-hook'

export const FlashTimer = () => {
  // Set flash sale end time (example: ends in 3 days)
  const expiry = new Date()
  expiry.setDate(expiry.getDate() + 4) // 4 days from now

  return useTimer({
    expiryTimestamp: expiry,
    onExpire: () => console.log('Flash sale ended'),
  })
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
