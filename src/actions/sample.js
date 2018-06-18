// actions
export const SAMPLE_COUNTER_INCREMENT = 'SAMPLE_COUNTER_INCREMENT';

export const SAMPLE_COUNTER_DECREMENT = 'SAMPLE_COUNTER_DECREMENT';

export const SAMPLE_COUNTER_RESET = 'SAMPLE_COUNTER_RESET';


export const sampleIncrementCounter = 
    (value = 1) =>  ({ type: SAMPLE_COUNTER_INCREMENT, value });

export const sampleDecrementCounter = 
    (value = 1) =>  ({ type: SAMPLE_COUNTER_DECREMENT, value });

export const sampleResetCounter = 
    () => ({ type: SAMPLE_COUNTER_RESET });