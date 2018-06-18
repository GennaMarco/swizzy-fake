import sampleReducer from './sample';
import quoteReducer from './quote';

const initialState = {
    user: {},
    quote: {
        current: null,
        loading: false,
    },
    sample: { 
      value: 0,
      message: null,
     },
};

const rootReducer = (state = initialState, action) => {
    let newState = state;

    newState = sampleReducer(newState, action);
    newState = quoteReducer(newState, action);

    return newState;
};

export default rootReducer;