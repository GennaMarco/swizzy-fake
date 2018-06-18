import { 
    SAMPLE_COUNTER_INCREMENT,
    SAMPLE_COUNTER_DECREMENT,
    SAMPLE_COUNTER_RESET,
 } from '../actions';


const reducerMap = {};

reducerMap[SAMPLE_COUNTER_INCREMENT] = (state , action) => ({
    ...state,
    sample: {
        value: state.sample.value + action.value,
        message: null,
    }
});

reducerMap[SAMPLE_COUNTER_DECREMENT] = (state , action) => {
    const newValue = state.sample.value - action.value;
    if (newValue >= 0) {
        return {
            ...state,
            sample: {
                value: newValue,
                message: null,
            }
        };
    } else {
        return {
            ...state,
            sample: {
                ...state.sample,
                message: 'non puoi scendere sotto 0',
            }                    
        };
    }
};

reducerMap[SAMPLE_COUNTER_RESET] = (state , action) => ({
    ...state,
    sample: {
        value: 0,
        message: null,
    }
});

const counterReducer = (state, action) => {
    let newState = state;
    if (reducerMap[action.type])
        newState = reducerMap[action.type](state, action);
    return newState;
}

export default counterReducer;