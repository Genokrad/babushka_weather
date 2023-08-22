// import axios from 'axios';
// import Notiflix from 'notiflix';
// import { useCallback, useEffect, useState } from 'react';

// const KEY = 'd66525f3861c64edb0280784b35cad3b';

// async function useFetchCities(url) {
//   const [cities, setCities] = useState({
//     data: [],
//     isLoading: false, // Изменено на false
//     error: false,
//   });

//   const fetchCities = useCallback(async () => {
//     try {
//       const response = await axios.get(url);
//       const responseData = response.data;
//       if (responseData) {
//         setCities({
//           data: responseData,
//           isLoading: false,
//           error: false,
//         });
//       }
//     } catch (error) {
//       if (axios.isCancel(error)) {
//         Notiflix.Notify.failure(error.message); // Исправлено
//       } else {
//         Notiflix.Notify.failure(error.message); // Исправлено
//       }
//       setCities({
//         data: [],
//         isLoading: false,
//         error: true,
//       });
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchCities();
//   }, [url, fetchCities]);

//   const { data, isLoading, error } = cities; // Исправлено на isLoading
//   console.log(data);
//   return { data, isLoading, error };
// }

// export default useFetchCities;
