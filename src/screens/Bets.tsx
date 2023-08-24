import { useState } from 'react';
import {
  BetText,
  ScrollingHeader,
  StyledHeader,
} from '../components/header/Header.style';
import useScrollScale from '../hooks/useScrollScale';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
const betsCollection = collection(db, 'bets');

export const Bets = () => {
  const { isScrollingDown } = useScrollScale();
  const [betText, setBetText] = useState<string | undefined>(undefined);
  const [bet, setBet] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const onSubmit = () => {
    setError('');
    setSuccess('');
    if (!name) {
      setError('Please enter your name');
    }
    setDoc(doc(betsCollection, name), {
      bet,
    }).then(() => {
      setSuccess(`Thank you ${name}, you voted for ${bet}`);
    });
  };
  return (
    <StyledHeader>
      <ScrollingHeader isScrolling={isScrollingDown}>
        <p>Bets</p>
        <span
          onMouseOver={() => setBetText('boy')}
          onClick={() => setBet('boy')}
          onMouseLeave={() => setBetText(undefined)}
        >
          👦
        </span>
        <span
          onMouseOver={() => setBetText('girl')}
          onClick={() => setBet('girl')}
          onMouseLeave={() => setBetText(undefined)}
        >
          👧
        </span>
        <span
          onMouseOver={() => setBetText('twins!!')}
          onClick={() => setBet('twins')}
          onMouseLeave={() => setBetText(undefined)}
        >
          👧👦
        </span>
      </ScrollingHeader>
      <p />
      <BetText>{betText}</BetText>
      <p />
      {bet && (
        <div>
          {bet}
          <div>Enter your name</div>
          <input
            onChange={(e) => {
              setError('');
              setName(e.target.value);
            }}
          ></input>
          <button onClick={onSubmit}>Submit</button>
        </div>
      )}
      {error}
      {success}
    </StyledHeader>
  );
};
