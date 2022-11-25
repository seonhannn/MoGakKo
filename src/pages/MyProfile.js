import React from "react";
import styled from "styled-components";
import UserInfo from "../components/UserInfo";
import UserLocationInfo from "../components/UserLocationInfo";
import UserSkillInfo from "../components/UserSkillInfo";
import Comment from "../components/Comment";

const MyProfileContainer = styled.div`

`

function myProfile() {
    return (
        <MyProfileContainer>
            <div className="myProfileBox">
                <div className="userName">OOO님의 프로필</div>
                <div className="editBtn">수정</div>
                <div className="deleteUserBtn">회원탈퇴</div>
                <div className="userImg">
                    <img></img>
                </div>
                <UserInfo title="한 줄 소개" content="테스트 문구입니다."></UserInfo>
                <UserInfo title="연락처" content="test@test.com"></UserInfo>
                <UserInfo title="깃허브" content="test@github.io"></UserInfo>
                <UserSkillInfo title="기술 및 스택" content="Java"></UserSkillInfo>
                <UserLocationInfo title="선호 지역 및 시간대" content="신촌역"></UserLocationInfo>
                <Comment></Comment>
            </div>
        </MyProfileContainer>
    )
}

export default myProfile;