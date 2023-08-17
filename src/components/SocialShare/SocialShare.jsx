import './socialShare.scss';

import { CgFacebook } from 'react-icons/cg';
import { BiLogoInstagramAlt, BiLogoTelegram } from 'react-icons/bi';
import { GrLinkedinOption } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';

import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const socials = [
  CgFacebook,
  BiLogoInstagramAlt,
  GrLinkedinOption,
  BiLogoTelegram,
  IoLogoWhatsapp,
];

const SocialShare = () => {
  const [colorIcon, setColorIcon] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setColorIcon(window.innerWidth >= 1400 ? '#fff' : '#89A755');
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  /* eslint-disable */
  return (
    <div className="social-share">
      <p className="social-share__text">Share:</p>
      <ul className="social-share__list">
        {socials.map(Social => (
          <li key={nanoid()}>
            <a className="social-share__link" href="">
              <Social
                style={{
                  width: '20px',
                  height: '20px',
                  color: colorIcon,
                  // marginTop: '3px',
                }}
              />
            </a>

            {/* <img src={social} alt="social" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
  /* eslint-enable */
};

export default SocialShare;
