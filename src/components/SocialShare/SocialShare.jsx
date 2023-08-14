import './socialShare.scss';

import {
  facebook,
  instagram,
  linkedIn,
  telegram,
  whatsapp,
} from '../../assets';

const socials = [facebook, instagram, linkedIn, telegram, whatsapp];

const SocialShare = () => {
  return (
    <div className="social-share">
      <p className="social-share__text">Share:</p>
      <ul className="social-share__list">
        {socials.map(social => (
          <li key={social}>
            {console.log(social)}
            <img src={social} alt="social" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialShare;
