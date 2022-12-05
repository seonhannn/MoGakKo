import React from "react";
import styled from "styled-components";

const LocationContainer = styled.div`
    .skillTitle {
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 10px;
    }
    .skillContent {
        flex-direction: column;
        max-width: 100%;
    }
    .skill {
        display: inline-flex;
        padding: 10px;
        letter-spacing: -1px;
        font-size: 16px;
        margin-top: 10px;
        margin-right: 14px;
        margin-bottom: 36px;
        background-color: #749F82;
        color: #fff;
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