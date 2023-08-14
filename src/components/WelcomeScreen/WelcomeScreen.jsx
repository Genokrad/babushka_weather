import { Button } from 'components/Button';
import './welcomeScreen.scss';

import { Input } from 'components/Input';

const WelcomeScreen = ({ togleWelocmeScreen }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-screen__text-box">
        <h1 className="welcome-screen__title">Babushka’s Weather Wisdom</h1>
        <p className="welcome-screen__paragraph">
          Your grandma’s ultimate weather guide
        </p>
      </div>
      <div className="welcome-screen__input-wrapper">
        <form className="welcome-screen__form" action="">
          <Input />
          <Button
            text="Show weather"
            className={'welcome-screen__button'}
            fun={togleWelocmeScreen}
          />
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
