import React from "react";
import styled from "styled-components";

const SkillContainer = styled.div`
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

function Skill() {
    return (
        <SkillContainer>
            <div className="skillTitle">기술 및 스택</div>
            <div className="skillContent">
                <div className="skill">JavaScript</div>
                <div className="skill">Java</div>
            </div>
        </SkillContainer>
    )
}

export default Skill;