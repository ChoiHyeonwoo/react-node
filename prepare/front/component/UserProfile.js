import React, { useCallback } from 'react';
import { Card, Avatar, Button  } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import logoutAction from '../reducers/user';

const UserProfile = ( ) => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction);
    }, [])

    return (
        <Card 
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로어<br />0</div>
            ]}>
            <Card.Meta 
                avatar={<Avatar>Hw</Avatar>}
                title="HWChoi"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;