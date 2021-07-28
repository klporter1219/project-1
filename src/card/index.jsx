import React from 'react';

import "./style.css";

export default function Card({ win, suite, value }) {
    return (
        <div className={`card ${win ? 'winner' : 'loser'}`}>
            <div className={suite} />
            <div className="number">{value}</div>
        </div>
    )
}