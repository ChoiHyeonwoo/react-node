// pages 들의 공통 분모를 처리
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore'

const NodeBird = ({ Component }) => {
    return (
        <>
           <Head>
               <title>NodeBird</title>
            </Head>         
            <Component />
        </>
    );
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(NodeBird));