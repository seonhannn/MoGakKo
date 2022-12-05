import React from "react";
import styled from "styled-components";
import {FaSmileBeam} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AnswerContainer = styled.div`
    .answerContainer {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #749F82;
        padding: 10px;
    }
    .answerUserInfo {
        display: flex;
        cursor: pointer;
    }
    .answerWriter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 30px;
    }
    .answerUserName {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -3px;
    }
    .answerDate {
        font-size: 12px;
        color: #999;
    }
    .answerContent {
        letter-spacing: -3px;
    }
`

function Answer() {

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate("/profile");
    }

    return (
        <AnswerContainer>
            <div className="answerContainer">
                <div className="answerUserInfo" onClick={() => navigateToProfile()}>
                    <div className="answerUserImg">
                            <FaSmileBeam size={"2.4em"} color="#425F57"></FaSmileBeam>
                    </div>
                    <div className="answerWriter">
                        <div className="answerUserName">
                            작성자
                        </div>
                        <div className="answerDate">
                            22-11-30
                        </div>
                    </div>
                </div>
                <div className="answerContent">
                    답변 내용
                </div>
            </div>
        </AnswerContainer>
    )
}

export default Answer;