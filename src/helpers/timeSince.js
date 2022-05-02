export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  let message = '';
  let count = 2;

  if (interval > 1 && count > 0) {
    // return Math.floor(interval) + ' years';
    message += Math.floor(interval) + ' years';
    count--;
  }
  interval = (seconds % 31536000) / 2592000;
  if (interval > 1 && count > 0) {
    // return Math.floor(interval) + ' months';
    message += ' ' + Math.floor(interval) + ' months';
    count--;
  }
  interval += (seconds % 2592000) / 86400;
  if (interval > 1 && count > 0) {
    // return Math.floor(interval) + ' days';
    message += ' ' + Math.floor(interval) + ' days';
    count--;
  }
  interval += (seconds % 86400) / 3600;
  if (interval > 1 && count > 0) {
    // return Math.floor(interval) + ' hours';
    message += ' ' + Math.floor(interval) + ' hours';
    count--;
  }
  interval = (seconds % 3600) / 60;
  if (interval > 1 && count > 0) {
    // return Math.floor(interval) + ' minutes';
    message += ' ' + Math.floor(interval) + ' minutes';
    count--;
  }
  interval = (seconds % 60) / 60;
  if (interval > 1 && count > 0) {
    // return Math.floor(interval) + ' seconds';
    message += ' ' + Math.floor(interval) + ' seconds';
    count--;
  }

  return message.trim();
};
