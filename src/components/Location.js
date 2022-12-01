import React from "react";
import styled from "styled-components";

const LocationContainer = styled.div`
    .skillTitle {
        font-size: 15px;
        font-weight: 600;
        width: 400px;
        border-bottom: 4px solid #DEF5E5;
    }
    .skillContent {
        flex-direction: column;
        max-width: 100%;
    }
    .skill {
        display: inline-flex;
        padding: 10px;
        letter-spacing: -1px;
        font-size: 14px;
        margin-top: 10px;
        margin-right: 14px;
        margin-bottom: 36px;
        background-color: #DEF5E5;
        border-radius: 22px;
    }
`

function Location() {
    return (
        <LocationContainer>
            <div className="skillTitle">지역 및 시간대</div>
            <div className="skillContent">
                <div className="skill">신촌역</div>
                <div className="skill">토요일</div>
                <div className="skill">오후1시이후</div>
            </div>
        </LocationContainer>
    )
}

export default Location;