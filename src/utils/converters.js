import {
  clearCloudy,
  cloudy,
  foggy,
  isolatedThunderstroms,
  partlyCloudy,
  showers,
  snow,
  sunny,
  thunderstroms,
} from 'assets';

const convetToFullYear = time => {
  const timestamp = time;
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  return year;
};

const converToMonth = time => {
  const timestamp = time;
  const date = new Date(timestamp * 1000);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = months[date.getMonth()];

  return month;
};

const convertToFullFormatData = time => {
  const timestamp = time;
  const date = new Date(timestamp * 1000);

  // const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

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

const codeToIcon = mark => {
  let some = {
    i01d: sunny,
    i02d: clearCloudy,
    i03d: cloudy,
    i04d: partlyCloudy,
    i09d: thunderstroms,
    i10d: showers,
    i11d: isolatedThunderstroms,
    i13d: snow,
    i50d: foggy,
    i01n: sunny,
    i02n: clearCloudy,
    i03n: cloudy,
    i04n: partlyCloudy,
    i09n: thunderstroms,
    i10n: showers,
    i11n: isolatedThunderstroms,
    i13n: snow,
    i50n: foggy,
  };

  return some[`i${mark}`];
};

const wishMessage = mark => {
  let some = {
    i01d: 'Sunny day, dear, be as happy and bright as this warm sun in the sky!',
    i02d: 'As the sky is clear today, my dear, may your path be cloudless and bright, just like the beautiful weather above!',
    i03d: 'Seeing the clouds gather, my dear, I wish you moments of cozy warmth and the joy of a cloudy day spent indoors.',
    i04d: "As the day appears partly cloudy, my dear, may your heart be filled with the beauty of life's contrasts and the promise of both sunshine and gentle breezes.",
    i09d: "As thunderstorms approach, my dear, I wish you strength to weather life's challenges and find comfort in the sound of raindrops, knowing that every storm brings the promise of renewal.",
    i10d: 'With the forecast of showers, my dear, may your spirit stay refreshed like the earth after rain, and may each drop bring you moments of growth and rejuvenation.',
    i11d: "As isolated thunderstorms approach, my dear, may you find the strength to face life's challenges alone, knowing that after each storm, the sun will shine brighter and your spirit will grow stronger.",
    i13d: 'As the snow falls gently, my dear, I wish for you moments of tranquility and the magic of a world covered in white, reminding you that even in stillness, life is full of beauty and wonder.',
    i50d: 'In the midst of the foggy day, my dear, may your path be illuminated by the light of hope and the warmth of cherished memories, guiding you through the mist towards clarity and joy.',
    i01n: "'Sunny day, dear, be as happy and bright as this warm sun in the sky!'",
    i02n: 'As the sky is clear today, my dear, may your path be cloudless and bright, just like the beautiful weather above!',
    i03n: 'Seeing the clouds gather, my dear, I wish you moments of cozy warmth and the joy of a cloudy day spent indoors.',
    i04n: "As the day appears partly cloudy, my dear, may your heart be filled with the beauty of life's contrasts and the promise of both sunshine and gentle breezes.",
    i09n: "As thunderstorms approach, my dear, I wish you strength to weather life's challenges and find comfort in the sound of raindrops, knowing that every storm brings the promise of renewal.",
    i10n: 'With the forecast of showers, my dear, may your spirit stay refreshed like the earth after rain, and may each drop bring you moments of growth and rejuvenation.',
    i11n: "As isolated thunderstorms approach, my dear, may you find the strength to face life's challenges alone, knowing that after each storm, the sun will shine brighter and your spirit will grow stronger.",
    i13n: 'As the snow falls gently, my dear, I wish for you moments of tranquility and the magic of a world covered in white, reminding you that even in stillness, life is full of beauty and wonder.',
    i50n: 'In the midst of the foggy day, my dear, may your path be illuminated by the light of hope and the warmth of cherished memories, guiding you through the mist towards clarity and joy.',
    iweek:
      'Wishing you a wonderful week ahead, my dear, and remember, every weather is a blessing in disguise, bringing its own gifts and teachings.',
  };

  return some[`i${mark}`];
};

export {
  convetToFullYear,
  convertToDate,
  dateToDayOfWeek,
  DateNow,
  KelvinToCelsium,
  metersToKilometers,
  formatDate,
  codeToIcon,
  wishMessage,
  convertToFullFormatData,
  converToMonth,
};
