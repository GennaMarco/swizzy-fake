import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BareLayout from '../layouts/BareLayout';


const Login = (props) => (
    <BareLayout>
        Login
    </BareLayout>
);

const mapStateToProps = (state) => ({
});
  
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);