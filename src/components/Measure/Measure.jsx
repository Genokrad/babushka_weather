import { setTempertureMeasure } from 'features/weather/weatherSlice';
import './Measure.scss';
import React, { useState } from 'react';

import { FiCheck } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

const CustomCheckbox = () => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState('celsius');

  const options = [
    { id: 'celsius', label: 'Celsius', color: '89A755' },
    { id: 'fahrenheit', label: 'Fahrenheit', color: '89A755' },
    { id: 'kelvin', label: 'Kelvin', color: '89A755' },
  ];

  const handleOptionChange = id => {
    setSelectedOption(id);

    dispatch(setTempertureMeasure(id));
  };

  return (
    <div className="check-box">
      <p className="check-box__title">Settings</p>
      <div className="check-box__divider"></div>
      <p className="check-box__subTitle">Units</p>
      <div className="check-box__measure">
        {options.map(option => (
          <label className="check-box__label" key={option.id}>
            <input
              className="check-box__indicator"
              type="radio"
              name="temperature"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
            />

            <span
              className="check-box__mark"
              style={{
                backgroundColor:
                  selectedOption === option.id ? `#${option.color}` : '#EAEAE7',
              }}
            >
              {selectedOption === option.id && (
                <span
                  className="check-box__chekmark"
                  style={{
                    border: `1px solid #${option.color}`,
                  }}
                >
                  <FiCheck />
                </span>
              )}
            </span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomCheckbox;

// import { useState } from 'react';
// import './Measure.scss';

// const Measure = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { id: 'celsius', label: 'Celsius', color: '89A755' },
//     { id: 'fahrenheit', label: 'Fahrenheit', color: '89A755' },
//     { id: 'kelvin', label: 'Kelvin', color: '89A755' },
//   ];

//   const handleOptionChange = id => {
//     setSelectedOption(id);
//   };

//   return (
//     <div className="custom-checkbox">
//       {options.map(option => (
//         <label key={option.id} className="custom-checkbox__label">
//           <input
//             type="radio"
//             name="temperature"
//             value={option.id}
//             checked={selectedOption === option.id}
//             onChange={() => handleOptionChange(option.id)}
//             className="custom-checkbox__input"
//           />
//           <span
//             className="custom-checkbox__indicator"
//             style={{
//               backgroundColor: `#${option.color}`,
//               borderColor: `#${option.color}`,
//             }}
//           >
//             {selectedOption === option.id && (
//               <span className="custom-checkbox__checkmark"></span>
//             )}
//           </span>
//           {option.label}
//         </label>
//       ))}
//     </div>
//   );
// };

// export default Measure;
