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
        border: 4px solid #BCEAD5;
        border-radius: 10px;
        margin-bottom: 40px;
        box-shadow: 0 1.6px 3px 0.8px #8EC3B0;
    }
    .listHeader {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        border-bottom: 4px solid #BCEAD5;
        background-color: 
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
    }
    .userName {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -3px;
    }
    .date {
        font-size: 12px;
        color: #999;
    }
    .reportBtn {
        border: none;
        width: 50px;
        height: 26px;
        margin-right: 10px;
        border-radius: 12px;
        background-color: #DEF5E5;
        color: #8EC3B0;
        cursor: pointer;
    }
    .reportBtn:hover {
        background-color: #BCEAD5;
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
        margin-bottom: 6px;
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

    // my profile 이동
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
                            <FaSmileBeam size={"2.4em"} color="#BCEAD5"></FaSmileBeam>
                        </div>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="content">내용</div>
                </div>
                <div className="answer">
                    <div className="answerIcon">
                        <FaAngleDown className={isOpen ? "openedAnswer" : "closedAnswer"} size={"2em"} color="#8EC3B0" onClick={() => toggleAnswer()}></FaAngleDown>
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