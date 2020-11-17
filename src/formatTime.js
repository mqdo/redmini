let periods = {
  year: 365 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
};

export function formatTime(timeCreated) {
  const diff = Date.now() - timeCreated * 1000;
  if (diff > periods.year) {
    let differ = diff / periods.year;
    let s = differ < 2 ? "" : "s";
    return Math.floor(differ) + ` year${s} ago`;
  } else if (diff > periods.month) {
    let differ = diff / periods.month;
    let s = differ < 2 ? "" : "s";
    return Math.floor(differ) + ` month${s} ago`;
  } else if (diff > periods.week) {
    let differ = diff / periods.week;
    let s = differ < 2 ? "" : "s";
    return Math.floor(differ) + ` week${s} ago`;
  } else if (diff > periods.day) {
    let differ = diff / periods.day;
    let s = differ < 2 ? "" : "s";
    return Math.floor(differ) + ` day${s} ago`;
  } else if (diff > periods.hour) {
    let differ = diff / periods.hour;
    let s = differ < 2 ? "" : "s";
    return Math.floor(differ) + ` hour${s} ago`;
  } else if (diff > periods.minute) {
    let differ = diff / periods.minute;
    let s = differ < 2 ? "" : "s";
    return Math.floor(differ) + ` minute${s} ago`;
  }
  return "Just now";
}
