import {
  formatYoutubeDate,
  intToMagnitude,
  numberWithCommas,
  timeSince,
  youtubeDurationToTime,
} from '../../helpers/formatters';

describe('formatters::timeSince', () => {
  it('should return a humanized string from the difference between the given date and the current date', () => {
    const baseYear = 2020;
    const baseMonth = 10;
    const baseDay = 20;
    const baseHour = 20;
    const baseMinute = 20;
    const baseSecond = 20;

    const offsetYear = 7;
    const offsetMonth = 6;
    const offsetDay = 5;
    const offsetHour = 4;
    const offsetMinute = 3;
    const offsetSecond = 10;

    const date = new Date(
      baseYear - offsetYear,
      baseMonth - offsetMonth,
      baseDay - offsetDay,
      baseHour - offsetHour,
      baseMinute - offsetMinute,
      baseSecond - offsetSecond
    );

    jest.useFakeTimers('modern');
    jest.setSystemTime(
      new Date(baseYear, baseMonth, baseDay, baseHour, baseMinute, baseSecond)
    );

    const curTimeSince = timeSince(date, 7);
    expect(curTimeSince).toBe('7 years 6 months 22 days 27 hours 3 minutes 1 seconds');

    jest.useRealTimers();
  });

  describe('formatters::formatYoutubeDate', () => {
    it('should return a "shortMonthName monthDay, twoDigitYear" string from the given date', () => {
      const baseYear = 2020;
      const baseMonth = 10;
      const baseDay = 20;

      const date = new Date(baseYear, baseMonth, baseDay);

      const formattedDate = formatYoutubeDate(date);
      expect(formattedDate).toBe('Nov 20, 20');
    });
  });

  describe('formatters::numberWithCommas', () => {
    it('should return a "comma separated number" string from the given number', () => {
      const baseNumber = 1234567890;

      const formattedNumber = numberWithCommas(baseNumber);
      expect(formattedNumber).toBe('1,234,567,890');
    });
  });

  describe('formatters::intToMagnitude', () => {
    it('should return a "magnitude" string (K, M, B) from the given number', () => {
      const baseNumber1 = 1234567890;

      const formattedNumber1 = intToMagnitude(baseNumber1);
      expect(formattedNumber1).toBe('1.2B');

      const baseNumber2 = 1234567;

      const formattedNumber2 = intToMagnitude(baseNumber2);
      expect(formattedNumber2).toBe('1.2M');

      const baseNumber3 = 123456;

      const formattedNumber3 = intToMagnitude(baseNumber3);
      expect(formattedNumber3).toBe('123.5K');
    });
  });

  describe('formatters::youtubeDurationToTime', () => {
    it('should return a "duration" string (1:00:00) from the given youtube duration string', () => {
      const baseDuration1 = 'PT1H1M1S';

      const formattedDuration1 = youtubeDurationToTime(baseDuration1);
      expect(formattedDuration1).toBe('1:01:01');

      const baseDuration2 = 'PT1M1S';

      const formattedDuration2 = youtubeDurationToTime(baseDuration2);
      expect(formattedDuration2).toBe('1:01');

      const baseDuration3 = 'PT10S';

      const formattedDuration3 = youtubeDurationToTime(baseDuration3);
      expect(formattedDuration3).toBe('0:10');

      const baseDuration4 = 'PT0H0M20S';

      const formattedDuration4 = youtubeDurationToTime(baseDuration4);
      expect(formattedDuration4).toBe('0:20');
    });
  });
});
