import React from 'react';
import Head from 'next/head';

import AppLayout from "../component/AppLayout";
import NicknameEditForm from "../component/NicknameEditForm";
import FollowList from "../component/FollowList";


const Profile = () => {
    const followerList = [{ nickname: '박지성' }, { nickname: '바보' }, { nickname: '메시' }];
    const followingList = [{ nickname: '박지성' }, { nickname: '바보' }, { nickname: '메시' }];

    return (
        <>  
            <Head>
                <meta charSet="utf-8"/>
                <title>내 프로필 | NodeBird</title>
            </Head>  
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
}

export default Profile;