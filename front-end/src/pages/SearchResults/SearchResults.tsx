import './SearchResults.scss';
import {useState} from 'react';

import {Result} from './components/Result';
import {SearchResult} from './components/Result/Result';
import { useSearchParams } from 'react-router-dom';

export const SearchResults: React.FC = () => {
  let [searchParams] = useSearchParams();
  const [results, setResults] = useState([
    {name: 'Name 1', date: 'Date', venue: 'Venue', info: 'Info'},
    {name: 'Name 2', date: 'Date', venue: 'Venue', info: 'Info'},
    {name: 'Name 3', date: 'Date', venue: 'Venue', info: 'Info'},
    {name: 'Name 4', date: 'Date', venue: 'Venue', info: 'Info'},
    {name: 'Name 5', date: 'Date', venue: 'Venue', info: 'Info'},
    {name: 'Name 6', date: 'Date', venue: 'Venue', info: 'Info'},
  ] as SearchResult[]);

  return (
    <div className="results-container flex-column">
      <h2>Showing results for: {searchParams.get('q')}</h2>
      <div className="results flex-row">
        {results.map((result, index) => (
          <Result key={index} result={result} />
        ))}
      </div>
    </div>
  );
};
