import React from "react";
import styled from "styled-components";

const UserLocationInfoContainer = styled.div`

`

function UserLocationInfo(props) {
    return (
        <UserLocationInfoContainer>
            <div className="userLocationInfoBox">
                <div className="userLocationInfoTitle">{props.title}</div>
                <div className="userLocationInfoContent">{props.content}</div>
            </div>
        </UserLocationInfoContainer>
    )
}

export default UserLocationInfo;