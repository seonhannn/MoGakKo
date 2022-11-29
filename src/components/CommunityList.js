import React from "react";
import styled from "styled-components";

const CommunityListContainer = styled.div`
    .listContainer {
        border: 1px solid gray;
        padding: 20px;
    }
    .listHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reportBtn {
        width: 120px;
        height: 60px;
        font-size: 20px;
        cursor: pointer;
    }
    .userInfo {
        display: flex;
        align-items: center;
        font-size: 22px;
    }
    .writer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
    }
    .userImg {
        width: 90px;
        height: 90px;
        border: 1px solid gray;
        border-radius: 50%;
        text-align: center;
    }
    .contentContainer {
        border: 1px solid green;
        margin: 50px;
        font-size: 26px;
    }
`

function CommunityList() {
    return (
        <CommunityListContainer>
            <div className="listContainer">
                <div className="listHeader">
                    <button className="reportBtn">신고 버튼</button>
                    <div className="userInfo">
                        <div className="writer">
                            <div className="userName">작성자</div>
                            <div className="date">22-11-29</div>
                        </div>
                        <div className="userImg">이미지</div>
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="content">내용</div>
                </div>
                <button className="answer">답글</button>
            </div>
        </CommunityListContainer>
    )
}

export default CommunityList;