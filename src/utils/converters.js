const convertToDate = timestamp => {
  const date = new Date(timestamp * 1000);
  const dayOfMonth = date.getDate();

  return dayOfMonth;
};

const dateToDayOfWeek = timestamp => {
  // const timestamp = 1692180000; // Замените на вашу временную метку

  const date = new Date(timestamp * 1000);
  const dayOfWeek = date.getDay();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = daysOfWeek[dayOfWeek];
  return dayName;
};

const DateNow = () => {
  const currentDate = new Date();
  const currentTimestamp = Math.floor(currentDate.getTime() / 1000);

  return currentTimestamp;
};

const KelvinToCelsium = number => {
  return Math.floor(number - 273.15);
};

const metersToKilometers = meters => {
  const kilometers = meters / 1000;
  return kilometers;
};

const formatDate = date => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export {
  convertToDate,
  dateToDayOfWeek,
  DateNow,
  KelvinToCelsium,
  metersToKilometers,
  formatDate,
};
