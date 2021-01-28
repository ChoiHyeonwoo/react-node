// pages 들의 공통 분모를 처리
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
    return (
        <>
           <Head>
               <meta charset="utf-8"/>
               <title>NodeBird</title>
            </Head>         
            <Component />
        </>
    );
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;