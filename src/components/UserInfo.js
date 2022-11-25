import React from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`

`

function UserInfo(props) {
    return (
        <UserInfoContainer>
            <div className="userInfoBox">
                <div className="userInfoTitle">{props.title}</div>
                <div className="userInfoContent">{props.content}</div>
            </div>
        </UserInfoContainer>
    )
}

export default UserInfo;