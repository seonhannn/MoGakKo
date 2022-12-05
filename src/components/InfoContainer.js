import React from "react";
import styled from "styled-components";

const InfoBox = styled.div`
    .infoTitle {
        font-size: 18px;
        font-weight: 600;
        width: 400px;
        padding-bottom: 10px;
    }
    .infoText {
        margin-top: 6px;
        font-size: 14px;
        margin-bottom: 36px;
        letter-spacing: -1px;
    }
`

function InfoContainer(props) {
    return (
        <InfoBox>
            <div className="infoContainer">
                <div className="infoTitle">{props.title}</div>
                <div className="infoText">{props.content}</div>
            </div>
        </InfoBox>
    )
}

export default InfoContainer;