import React from "react";
import styled from "styled-components";

const MannerContainer = styled.div`
    .mannerContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
    }
    .manner {
        width: 200px;
        height: 30px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        position: relative;
        border: 4px solid #749F82;
        border-radius: 16px;
    }
    .mannerBar {
        width: 160px;
        height: 100%;
        position: absolute;
        left: -4px;
        border: 2px solid #749F82;
        background-color: #749F82;
        border-radius: 16px 0 0 16px;
    }
`

function Manner() {
    return (
        <MannerContainer>
            <div className="mannerContainer">
                매너온도
                <div className="manner">
                    <div className="mannerBar"></div>
                </div>
            </div>         
        </MannerContainer>
    )
}

export default Manner;