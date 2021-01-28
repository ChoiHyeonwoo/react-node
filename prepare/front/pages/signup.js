import React from 'react';
import Head from 'next/head';

import AppLayout from "../component/AppLayout";

const Signup = () => {
    return (
        <>  
            <Head>
                <meta charset="utf-8"/>
                <title>회원가입 | NodeBird</title>
            </Head>  
            <AppLayout>회원가입 페이지</AppLayout>
        </>
    );
}

export default Signup;