import {
    QUOTE_COMPLETE,
    QUOTE_LOADING,
    QUOTE_ERROR,
} from '../actions/quote';


const reducerMap = {};

reducerMap[QUOTE_LOADING] = (state , action) => ({
    ...state,
    quote: {
        ...state.quote,
        loading: true
    }
});

reducerMap[QUOTE_COMPLETE] = (state , action) => ({
    ...state,
    quote: {
        ...state.quote,
        current: action.result.quote,
        author: action.result.author,
        loading: false
    }
});

reducerMap[QUOTE_ERROR] = (state , action) => ({
    ...state,
    quote: {
        ...state.quote,
        loading: false
    }
});


const quoteReducer = (state, action) => {
    let newState = state;
    if (reducerMap[action.type])
        newState = reducerMap[action.type](state, action);
    return newState;
};

export default quoteReducer;