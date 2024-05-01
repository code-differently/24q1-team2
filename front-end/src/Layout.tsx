import {Outlet} from 'react-router-dom';

import {Header} from './components/Header';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content flex-column">
        <Outlet />
      </div>
    </>
  );
};
