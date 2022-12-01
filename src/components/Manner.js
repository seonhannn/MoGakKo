import React from "react";
import styled from "styled-components";

const MannerContainer = styled.div`
    .mannerContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
    }
    .manner {
        width: 200px;
        height: 30px;
        margin-top: 10px;
        border: 2px solid #9ED5C5;
        border-radius: 16px;
    }
    .mannerBar {
        width: 160px;
        height: 100%;
        border: none;
        background-color: #9ED5C5;
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