import React from "react";
import styled from "styled-components";
import {FaAngleDown} from "react-icons/fa";
import {FaSmileBeam} from "react-icons/fa";
import { useState } from "react";
import Answer from "./Answer";
import { useNavigate } from "react-router-dom";

const CommunityListContainer = styled.div`
    .listContainer {
        display: flex;
        margin: 0px auto;
        width: 700px;
        flex-direction: column;
        border: 4px solid #425F57;
        border-radius: 10px;
        margin-bottom: 40px;
        box-shadow: 0 1.6px 3px 0.8px #ddd;
    }
    .listHeader {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        background-color: #749F82;
        position: relative;
    }
    .userInfo {
        display: flex;
        cursor: pointer;
    }
    .writer {
        margin-right: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .userName {
        font-size: 17px;
        font-weight: 700;
        letter-spacing: -3px;
        color: #425F57;
    }
    .date {
        font-size: 12px;
        color: #425F57;
    }
    .reportBtn {
        border: none;
        width: 40px;
        height: 23px;
        font-size: 14px;
        border-radius: 5px;
        background-color: #425F57;
        color: #fff;
        cursor: pointer;
        position: absolute;
        left: 12px;
    }
    .reportBtn:hover {
        background-color: #557153;
        color: #fff;
    }
    .contentContainer {
        padding: 30px;
    }
    .content {
        letter-spacing: -3px;
    }
    .answer {
        padding: 20px;
    }
    .answerIcon {
        margin-bottom: 2px;
        display: flex;
        justify-content: center;
    }
    .openedAnswer {
        cursor: pointer;
        transform: rotate(180deg);
    }
    .openedAnswer:hover {
        cursor: pointer;
        background-color: #DEF5E5;
        border-radius: 50%;
        transform: rotate(180deg) scale(1.2);
    }
    .closedAnswer {
        cursor: pointer;
    }
    .closedAnswer:hover {
        cursor: pointer;
        background-color: #DEF5E5;
        border-radius: 50%;
        transform: scale(1.2);
    }
    .hideAnswer {
        display: none;
    }
    .showAnswer {
        
    }
`

function CommunityList() {

    const [isOpen, setAnswer] = useState(false);
    const navigate = useNavigate();

    // on/off
    const toggleAnswer = () => {
        setAnswer(isOpen => !isOpen);
    }

    // profile 이동
    const navigateToProfile = () => {
        navigate("/profile");
    }

    return (
        <CommunityListContainer>
            <div className="listContainer">
                <div className="listHeader">
                    <button className="reportBtn">신고</button>
                    <div className="userInfo" onClick={() => navigateToProfile()}>
                        <div className="writer">
                            <div className="userName">작성자</div>
                            <div className="date">22-11-29</div>
                        </div>
                        <div className="userImg">
                            <FaSmileBeam size={"2.4em"} color="#425F57"></FaSmileBeam>
                        </div>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="content">내용</div>
                </div>
                <div className="answer">
                    <div className="answerIcon">
                        <FaAngleDown className={isOpen ? "openedAnswer" : "closedAnswer"} size={"2em"} color="#5F8D4E" onClick={() => toggleAnswer()}></FaAngleDown>
                    </div>
                    <div className={isOpen ? "showAnswer" : "hideAnswer"}>
                        <Answer></Answer>
                        <Answer></Answer>
                    </div>
                </div>
            </div>
        </CommunityListContainer>
    )
}

export default CommunityList;