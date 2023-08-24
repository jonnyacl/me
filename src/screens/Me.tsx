import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/header';
import { Bets } from './Bets';
import { Results } from './Results';

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
        <Route path='/bets' element={<Bets />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Me;
