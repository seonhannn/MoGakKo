import React from "react";
import styled from "styled-components";
import CommunityList from "../components/CommunityList";

const CommunityContainer = styled.div`
    .container {
        border: 1px solid gray;
        width: 1400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
        padding: 60px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .search {
        display: flex;
        align-items: center;
    }
    .logo {
        font-size: 40px;
        font-weight: 600;
    }
    .searchForm {
        width: 600px;
        height: 60px;
        border-radius: 15px;
    }
    .add {
        width: 60px;
        height: 60px;
        border-radius: 15px;
        font-size: 50px;
        cursor: pointer;
        margin-left: 20px;
    }
    .info {
        margin-top: 100px;
        margin-bottom: 60px;
        font-size: 26px;
    }
    .contents {
        padding: 30px;
    }
`

function Community() {
    return (
        <CommunityContainer>
            <div className="container">
                <div className="header">
                    <div className="logo">커뮤니티</div>
                    <div className="search">
                        <input className="searchForm"></input>
                        <button className="add">+</button>
                    </div>
                </div>
                <div className="contents">
                    <div className="info">자유롭게 질문하고 답변하는 공간이에요.</div>
                    <div>
                        <CommunityList></CommunityList>
                    </div>
                </div>
            </div>
        </CommunityContainer>
    )
}

export default Community;