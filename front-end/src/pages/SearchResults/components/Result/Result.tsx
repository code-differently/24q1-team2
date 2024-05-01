import React from 'react'
import { Star } from './components/Star/Star';

import './Result.scss'

export interface SearchResult {
    name: string;
    date: string;
    venue: string;
    info: string;
}

interface ResultProps {
    result: SearchResult;
}

export const Result: React.FC<ResultProps> = ({result}) => {
    return (
        <div className="result flex-column">
            <img className="image" src="https://fakeimg.pl/240x120/dbc7c7/fff" alt="placeholder" />
            <div className="info flex-column flex-auto">
                <span className="event-name">{result.name}</span>
                <span className="event-date">{result.date}</span>
                <span className="event-venue">{result.venue}</span>
                <span className="event-info">{result.info}</span>
            </div>
            <div className="buttons flex-row">
                <button className="favorite-btn">
                    <Star />
                </button>
            </div>
        </div>
    )
};