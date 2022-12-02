import React from "react";
import styled from "styled-components";
import { FaSmileBeam } from "react-icons/fa";
import InfoContainer from "../components/InfoContainer";
import Skill from "../components/Skill";
import Location from "../components/Location";
import Manner from "../components/Manner";
import ProfileComment from "../components/ProfileComment";
import ModalView from "../components/Modal";

const ProfileContainer = styled.div`
    .profileContainer {
        width: 700px;
        border: 4px solid #BCEAD5;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
    }
    .profileUserName {
        display: flex;
        justify-content: center;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -3px;
        margin-top: 60px;
    }
    .profileContent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .profileImg {
        display: flex;
        margin: 0px auto;
        margin-top: 50px;
        margin-bottom: 20px;
        border: 2px solid #ddd;
        border-radius: 50%;
    }
    .infoContent {
        margin-top: 60px;
    }
    .profileCommentTitle {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 600;
    }
    .profileCommentBox {
        margin-bottom: 60px;
    }
`

function Profile() {
    return (
        <ProfileContainer>
            <div className="profileContainer">
                <div className="profileUserName">담비님의 프로필</div>
                <div className="profileContent">
                    <div className="profileImg">
                        <FaSmileBeam size={"8em"} color="#BCEAD5"></FaSmileBeam>
                    </div>
                    <Manner></Manner>
                    <div className="infoContent">
                        <InfoContainer title="한 줄 소개" content="프론트엔드 개발자입니다."></InfoContainer>
                        <InfoContainer title="연락처" content="test@gmail.com"></InfoContainer>
                        <InfoContainer title="깃허브" content="test@github.io"></InfoContainer>
                        <Skill></Skill>
                        <Location></Location>
                        <div className="profileCommentBox">
                            <div className="profileCommentTitle">
                                한 줄 코멘트
                            </div>
                            <ProfileComment></ProfileComment>
                            <ProfileComment></ProfileComment>
                            <ProfileComment></ProfileComment>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileContainer>
    )
}

export default Profile;