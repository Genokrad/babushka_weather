const { grandmother } = require('assets');
const { SocialShare } = require('components/SocialShare');
const { WeatherMessage } = require('components/WeatherMessage');

const GrandmaMessage = () => {
  return (
    <>
      <WeatherMessage />

      <div
        style={{
          display: 'flex',

          width: '100%',
          justifyContent: 'center',
        }}
      >
        <img className="hero__image" src={grandmother} alt="grandmother" />
      </div>

      <div
        style={{
          border: '1px dashed #D6E7AA',
          marginTop: '24px',
          marginBottom: '24px',
        }}
      ></div>

      <SocialShare />
    </>
  );
};

export default GrandmaMessage;
