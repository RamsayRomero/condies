export function formatDay(index, { abbreviated = false } = {}) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  if (abbreviated) {
    return days[index].slice(0, 3);
  }
  return days[index];
}
