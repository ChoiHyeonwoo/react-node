import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from "../component/AppLayout";

const Home = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
  
    return (
        <AppLayout>
            Hello, Next            
        </AppLayout>
    );
}

export default Home;