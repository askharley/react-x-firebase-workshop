import dayjs from 'dayjs';

export const formatTimestampToDate = (timestamp = 0) => {
  const date = new Date(timestamp.seconds * 1000);
  return dayjs(date).format('DD/MM/YYYY');
}