import './Header.scss';

import mapPointIcon from './assets/map-point.svg';
import personIcon from './assets/person.svg';

export const Header: React.FC = () => {
  return (
    <header className="flex-row">
      <span className="motto flex-auto">
        Connect, Engage, Thrive : Uniting Communities Through Local Events
      </span>
      <div className="icons flex-row">
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={mapPointIcon} alt="React Logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={personIcon} alt="React Logo" />
        </a>
      </div>
    </header>
  );
};
