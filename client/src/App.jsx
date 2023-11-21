import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/Header';
import Home from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SideBar from './pages/Home/SideBar';
import NewHeader from './pages/Home/NewHeader';
// import  from'./assets

import { useAuthContext } from './context/AuthContext';

function App() {
  const { isLoading } = useAuthContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <div className="antialiased flex-col justify-start items-start inline-flex font-inter text-gray-800">
      <div className="justify-start items-start inline-flex w-screen"> 
      <div className="fixed bg-stone-50 w-screen h-screen z-0 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <img src="src/assets/overlay.jpg" className="opacity-20 w-full overflow-hidden" />
      </div>
        <SideBar/>
        <div className="z-40 pl-60 flex-col w-full justify-start items-center gap-2.5 inline-flex">
          <NewHeader />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
{/* <Header /> */}

export default App;
