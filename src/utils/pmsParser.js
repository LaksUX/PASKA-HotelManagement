export function parsePMSData(rows = []) {

  const totalRevenue =
    rows.reduce(
      (sum, row) =>
        sum + Number(row.TOTAL_REVENUE || 0),
      0
    )

  const roomRevenue =
    rows.reduce(
      (sum, row) =>
        sum + Number(row.ROOM_REVENUE || 0),
      0
    )

  const foodRevenue =
    rows.reduce(
      (sum, row) =>
        sum + Number(row.FOOD_REVENUE || 0),
      0
    )

  const occupancy =
    Math.round(
      (
        rows.filter(
          r => r.RESV_STATUS === 'CHECKED IN'
        ).length
        /
        Math.max(rows.length, 1)
      ) * 100
    )

  const vipGuests =
    rows.filter(r => r.VIP_STATUS).length

  const cancellations =
    rows.filter(
      r => Number(r.CANCELLED_ROOMS || 0) > 0
    ).length

  const noShows =
    rows.filter(
      r => Number(r.NO_SHOW_ROOMS || 0) > 0
    ).length

  const countryMap = {}

  rows.forEach(row => {

    const country = row.COUNTRY || 'Unknown'

    countryMap[country] =
      (countryMap[country] || 0) + 1
  })

  const countries =
    Object.entries(countryMap)
      .map(([name, value]) => ({
        name,
        value,
      }))
      .slice(0, 5)

  const channelMap = {}

  rows.forEach(row => {

    const channel = row.CHANNEL || 'Unknown'

    channelMap[channel] =
      (channelMap[channel] || 0) + 1
  })

  const channels =
    Object.entries(channelMap)
      .map(([name, value]) => ({
        name,
        value,
      }))

  return {
    totalRevenue,
    roomRevenue,
    foodRevenue,
    occupancy,
    vipGuests,
    cancellations,
    noShows,
    countries,
    channels,
  }
}
