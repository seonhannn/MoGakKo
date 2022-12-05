import React from "react";
import styled from "styled-components";
import { FaSmileBeam } from "react-icons/fa";

const ProfileCommentContainer = styled.div`
    .profileCommentContainer {
        border-bottom: 2px solid #749F82;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
    }
    .profileCommentUserName {
        margin-left: 10px;
        font-size: 18px;
        font-weight: 600;
        margin-right: 20px;
        letter-spacing: -3px;
    }
    .profileCommentContent {
        font-size: 18px;
    }
`

function ProfileComment() {
    return (
        <ProfileCommentContainer>
            <div className="profileCommentContainer">
                <div className="profileCommentImg">
                    <FaSmileBeam size={"3em"} color="#749F82"></FaSmileBeam>
                </div>
                <div className="profileCommentUserName">닉네임</div>
                <div className="profileCommentContent">좋은 팀원입니다!</div>
            </div>
        </ProfileCommentContainer>
    )
}

export default ProfileComment;