import React from 'react';
import Layout from '../layouts/Layout';
import SampleCounter from './SampleCounter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const CounterPage = (props) => (
    <Layout>
        <h1>Sample Counter</h1>
        
        <SampleCounter />
    </Layout>
);

const mapStateToProps = (state) => ({
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);