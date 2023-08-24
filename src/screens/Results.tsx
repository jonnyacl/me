import { useEffect, useState } from 'react';
import {
  ScrollingHeader,
  StyledHeader,
} from '../components/header/Header.style';
import useScrollScale from '../hooks/useScrollScale';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { app } from '../config';

const db = getFirestore(app);
const betsCollection = collection(db, 'bets');
const qu = query(betsCollection);

export const Results = () => {
  const { isScrollingDown } = useScrollScale();
  const [results, setResults] = useState<
    { bet: string; name: string }[] | undefined
  >(undefined);
  const [betText, setBetText] = useState<string | undefined>(undefined);
  const [showPeople, setShowPeople] = useState(false);
  const boyCount = results?.filter((r) => r.bet.toLowerCase() === 'boy').length;
  const girlCount = results?.filter(
    (r) => r.bet.toLowerCase() === 'girl'
  ).length;
  const twinCount = results?.filter(
    (r) => r.bet.toLowerCase() === 'twins'
  ).length;
  useEffect(() => {
    if (!results) {
      getDocs(qu).then((r) => {
        const ress: { bet: string; name: string }[] = [];
        r.forEach((res) => {
          ress.push({ bet: (res.data() as { bet: string }).bet, name: res.id });
        });
        setResults(ress);
      });
    }
  });

  return (
    <StyledHeader>
      <ScrollingHeader isScrolling={isScrollingDown}>
        <p>Results</p>
        <span
          onMouseOver={() => setBetText('boy')}
          onMouseLeave={() => setBetText(undefined)}
        >
          👦 {betText === 'boy' && boyCount}
        </span>
        <span
          onMouseOver={() => setBetText('girl')}
          onMouseLeave={() => setBetText(undefined)}
        >
          👧 {betText === 'girl' && girlCount}
        </span>
        <span
          onMouseOver={() => setBetText('twins')}
          onMouseLeave={() => setBetText(undefined)}
        >
          👧👦 {betText === 'twins' && twinCount}
        </span>
        <p />
        <button onClick={() => setShowPeople(!showPeople)}>
          {!showPeople ? 'Show votes' : 'Hide votes'}
        </button>
        <p />
        {showPeople && (
          <>
            {results && (
              <>
                Boy:{' '}
                {boyCount ? Math.floor((boyCount / results?.length) * 100) : 0}%
              </>
            )}
            {results && (
              <>
                {', '}
                Girl:{' '}
                {girlCount
                  ? Math.floor((girlCount / results?.length) * 100)
                  : 0}
                %
              </>
            )}
            {results && (
              <>
                {', '}
                Twins:{' '}
                {twinCount
                  ? Math.floor((twinCount / results?.length) * 100)
                  : 0}
                %
              </>
            )}
            <p />
            {results?.map((res) => {
              return (
                <div>
                  {res.name}: <strong>{res.bet}</strong>
                </div>
              );
            })}
          </>
        )}
      </ScrollingHeader>
    </StyledHeader>
  );
};
