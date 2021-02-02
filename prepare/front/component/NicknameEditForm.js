import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
    const style = useMemo(() => ({ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '30px' }), []); // useMemo외에 styled component 혹은 sass 등

    return (
        <Form style={style} >
            <Input.Search addonBefore="닉네임" enterButton="수정"></Input.Search>
        </Form>
    );
}

export default NicknameEditForm;