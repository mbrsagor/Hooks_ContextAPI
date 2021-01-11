import React from 'react';

import CounterDispaly from '../components/counter/counter-dispaly';
import CounterButton from '../components/counter/counter-button';
import { CounterContextProvider } from '../context/counter_context';


export default function ShowCounter() {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Context API Counter</h4>
            </div>
            <div className="card-body">
                <CounterContextProvider>
                    <CounterDispaly />
                    <CounterButton />
                </CounterContextProvider>
            </div>
        </div>
    )
}
