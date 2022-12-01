import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
    .profileContainer {
        width: 700px;
        border: 1px solid gray;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
    }
    .profileUserName {
        display: flex;
        justify-content: center;
    }
    .profileUserInfoTop {
        display: flex;
        justify-content: space-between;
    }
    .profileUserInfoBottom {
        display: flex;
        justify-content: space-between;
    }
`

function Profile() {
    return (
        <ProfileContainer>
            <div className="profileContainer">
                <div className="profileUserName">담비님의 프로필</div>
                <div className="profileUserInfoTop">
                    <div className="profileImg">사진</div>
                    <div className="profileUserInfo">
                        <div>
                            <div>한줄소개</div>
                            <div>프론트엔드 개발자입니다.</div>
                        </div>
                        <div>
                            <div>연락처</div>
                            <div>test@gmail.com</div>
                        </div>
                        <div>
                            <div>깃허브</div>
                            <div>test@github.io</div>
                        </div>
                    </div>
                </div>
                <div className="profileUserInfoBottom">
                    <div className="profileUserInfo">
                        <div>
                            <div>기술 및 스택</div>
                            <div>JavaScript Dart</div>
                        </div>
                        <div>
                            <div>지역 및 시간</div>
                            <div>
                                <div>신촌역</div>
                                <div>토요일 오후7시이후</div>
                            </div>
                        </div>
                        <div>한 줄 코멘트</div>
                    </div>
                    <div>매너온도</div>
                </div>
            </div>
        </ProfileContainer>
    )
}

export default Profile;