import React, { useContext } from 'react';
import { CounterContext } from '../../context/counter_context';


const CounterDispaly = () => {

    const [count] = useContext(CounterContext)
    return (
        <div>
            <h2>Count: {count}</h2>
        </div>
    );
}
export default CounterDispaly;
