import React from "react";
import styled from "styled-components";
import {FaAngleDown} from "react-icons/fa";
import {FaSmileBeam} from "react-icons/fa";
import { useState } from "react";
import Answer from "./Answer";

const CommunityListContainer = styled.div`
    .listContainer {
        display: flex;
        flex-direction: column;
        border: 3px solid #BCEAD5;
        border-radius: 6px;
        margin-bottom: 40px;
    }
    .listHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 2px solid #BCEAD5;
    }
    .userInfo {
        display: flex;
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
    }
    .date {
        font-size: 12px;
        color: #999;
    }
    .reportBtn {
        border: none;
        width: 50px;
        height: 26px;
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
    .answer {
        padding: 20px;
    }
    .answerIcon {
        margin-bottom: 10px;
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

    // on/off
    const toggleAnswer = () => {
        setAnswer(isOpen => !isOpen);
    }

    return (
        <CommunityListContainer>
            <div className="listContainer">
                <div className="listHeader">
                    <button className="reportBtn">신고</button>
                    <div className="userInfo">
                        <div className="writer">
                            <div className="userName">작성자</div>
                            <div className="date">22-11-29</div>
                        </div>
                        <div className="userImg">
                            <FaSmileBeam size={"2.4em"} color="#8EC3B0"></FaSmileBeam>
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