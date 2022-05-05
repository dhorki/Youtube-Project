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
