import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/header';

export const Me = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              I'm an engineer, here's some things I like to do
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Me;
