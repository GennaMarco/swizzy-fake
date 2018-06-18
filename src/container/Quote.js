import React from 'react';
import { connect } from 'react-redux';
import { loadNewQuote } from '../actions/quote';

const Quote = (props) => {
    
    if (props.loading){
        return <span>loading...</span>;
    }

    return (
        <span>"{props.quote || 'no quotes yet'}}"
            <button className="btn btn-link" onClick={props.loadNewQuote}>
                new
            </button>
         </span>);
};

const mapStateToProps = (state) => ({
    quote: state.quote.current,
    loading: state.quote.loading,
});

const mapDispatchToProps = {
    loadNewQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);