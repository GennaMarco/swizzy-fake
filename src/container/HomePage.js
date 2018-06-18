import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from '../layouts/Layout';
//import Title from '../components/common/Title';
import Hello from '../components/Hello';
import Quote from './Quote';

const HomePage = (props) => (
    <Layout>
        Home
        <p>
            <Hello name="pippo"/>
        </p>
        <Quote/>
    </Layout>
);

const mapStateToProps = (state) => ({
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);