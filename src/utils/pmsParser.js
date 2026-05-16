export function parsePMSData(rows = []) {

  const totalRevenue =
    rows.reduce(
      (sum, row) =>
        sum + Number(row.TOTAL_REVENUE || 0),
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

  return {
    totalRevenue,
    occupancy,
    vipGuests,
  }
}
