import { ReactComponent as UpArrowIcon } from './assets/up-arrow-icon.svg';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className="
      min-h-screen mx-auto
      bg-primary
      text-dark
      flex flex-col
    ">
      <Header></Header>

      <div className='flex-grow'>
        <Outlet></Outlet>
      </div>

      {/* TakeMeBackUpBtn */}
      <a href="#header" className='flex flex-row justify-center items-center gap-1.5 p-4 bg-dark hover:opacity-90 opacity-100 ease-in-out duration-200'>
        <UpArrowIcon className='fill-primary' />
        <span className='font-serif text-primary'>Take me back up</span>
      </a>

      {/* Footer */}
      <Footer />

    </div>

  );
}

export default Layout;
