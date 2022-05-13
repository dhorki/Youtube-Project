export const timeSince = (date, detailCount = 2) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  let message = '';
  let count = detailCount;

  if (interval > 1 && count > 0) {
    message += Math.floor(interval) + ' years';
    count--;
  }
  interval = (seconds % 31536000) / 2592000;
  if (interval > 1 && count > 0) {
    message += ' ' + Math.floor(interval) + ' months';
    count--;
  }
  interval += (seconds % 2592000) / 86400;
  if (interval > 1 && count > 0) {
    message += ' ' + Math.floor(interval) + ' days';
    count--;
  }
  interval += (seconds % 86400) / 3600;
  if (interval > 1 && count > 0) {
    message += ' ' + Math.floor(interval) + ' hours';
    count--;
  }
  interval = (seconds % 3600) / 60;
  if (interval > 1 && count > 0) {
    message += ' ' + Math.floor(interval) + ' minutes';
    count--;
  }
  interval = (seconds % 60) / 60;
  if (interval > 1 && count > 0) {
    message += ' ' + Math.floor(interval) + ' seconds';
    count--;
  }

  return message.trim();
};

export const formatYoutubeDate = (date) => {
  const d = new Date(date);
  const month = d.toLocaleString('default', { month: 'short' });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year.toString().substring(2)}`;
};

export const numberWithCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const intToMagnitude = (n) => {
  if (n < 1000) {
    return n;
  } else if (n < 1000000) {
    return `${(n / 1000).toFixed(1)}K`;
  } else if (n < 1000000000) {
    return `${(n / 1000000).toFixed(1)}M`;
  } else {
    return `${(n / 1000000000).toFixed(1)}B`;
  }
};

export const youtubeDurationToTime = (duration) => {
  const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let timeString = '';

  if (reptms.test(duration)) {
    const matches = reptms.exec(duration);
    if (matches[1]) {
      hours = Number(matches[1]);
      timeString += `${hours}:`;
    }
    if (matches[2]) {
      minutes = Number(matches[2]);
      timeString += `${minutes}:`;
    }
    if (matches[3]) {
      seconds = Number(matches[3]);
      timeString += `${seconds}`;
    }
  }
  return timeString;
};
