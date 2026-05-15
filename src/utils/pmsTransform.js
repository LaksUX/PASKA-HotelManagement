export function transformPMSData(rows = []) {
  const totalRevenue = rows.reduce((sum, row) => sum + Number(row.TOTAL_REVENUE || 0), 0);
  const roomRevenue = rows.reduce((sum, row) => sum + Number(row.ROOM_REVENUE || 0), 0);
  const foodRevenue = rows.reduce((sum, row) => sum + Number(row.FOOD_REVENUE || 0), 0);

  const occupancy = Math.round(
    (rows.filter((r) => r.RESV_STATUS === 'CHECKED IN').length /
      Math.max(rows.length, 1)) * 100,
  );

  const channelMap = {};
  rows.forEach((row) => {
    const key = row.CHANNEL || 'Unknown';
    channelMap[key] = (channelMap[key] || 0) + 1;
  });

  const channels = Object.entries(channelMap).map(([name, value]) => ({
    name,
    value,
  }));

  return {
    totalRevenue,
    roomRevenue,
    foodRevenue,
    occupancy,
    channels,
  };
}
