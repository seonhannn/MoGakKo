import React from "react";
import styled from "styled-components";
import { FaSmileBeam } from "react-icons/fa";

const ProfileCommentContainer = styled.div`
    .profileCommentContainer {
        border: 3px solid #bcead5;
        border-radius: 22px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
    }
    .profileCommentUserName {
        margin-left: 10px;
        font-weight: 600;
        margin-right: 20px;
        letter-spacing: -3px;
    }
`

function ProfileComment() {
    return (
        <ProfileCommentContainer>
            <div className="profileCommentContainer">
                <div className="profileCommentImg">
                    <FaSmileBeam size={"2em"} color="#BCEAD5"></FaSmileBeam>
                </div>
                <div className="profileCommentUserName">닉네임</div>
                <div>test 문구입니다.</div>
            </div>
        </ProfileCommentContainer>
    )
}

export default ProfileComment;