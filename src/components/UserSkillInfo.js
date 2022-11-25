import React from "react";
import styled from "styled-components";

const UserSkillInfoContainer = styled.div`

`

function UserSkillInfo(props) {
    return (
        <UserSkillInfoContainer>
            <div className="userSkillInfoBox">
                <div className="userSkillInfoTitle">{props.title}</div>
                <div className="userSkillInfoContent">{props.content}</div>
            </div>
        </UserSkillInfoContainer>
    )
}

export default UserSkillInfo;