import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    sampleResetCounter, 
    sampleIncrementCounter,
    sampleDecrementCounter,
} from '../actions';

const SampleCounter = (props) => {

    return (<span>
        [ <button className="btn btn-link"onClick={() => props.incrementCounter()} >+</button>
        | <button onClick={() => props.decrementCounter()} > - </button>
        | <button onClick={props.resetCounter} >Clear</button> ] 
        : {props.value}
        {props.message ? <span> {props.message}</span> : ''}
    </span>);
}

const mapStateToProps = (state) => ({
    value: state.sample.value,
    message: state.sample.message,
  });
  
const mapDispatchToProps = {
  resetCounter: sampleResetCounter, 
  incrementCounter: sampleIncrementCounter,
  decrementCounter: sampleDecrementCounter,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SampleCounter);