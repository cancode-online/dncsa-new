import type { Timestamp as TimestampType } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

export function dateSinceFormatter(date: TimestampType): string {
  const currentDate = new Timestamp(new Date().getTime() / 1000, 0);
  const seconds = Math.floor((currentDate.seconds - date.seconds) + (date.nanoseconds) / 1000000000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const rtf = new Intl.RelativeTimeFormat('en', {style: 'long', numeric: 'auto'});

  if (seconds < 60) {
    return rtf.format(-seconds, 'second');
  } else if (minutes < 60) {
    return rtf.format(-minutes, 'minute');
  } else if (hours < 24) {
    return rtf.format(-hours, 'hour');
  } else if (days < 30) {
    return rtf.format(-days, 'day');
  } else if (months < 12) {
    return rtf.format(-months, 'month');
  } else {
    return rtf.format(-years, 'year');
  }
}
  