import React from "react";
import styled from "styled-components";
import CommunityList from "../components/CommunityList";
import {FaPen} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CommunityContainer = styled.div`
    .container {
        width: 710px;
        min-width: 700px;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
        border-radius: 22px;
    }
    .header {
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #8EC3B0;
        padding: 20px;
        border-radius: 22px 22px 0px 0px;
    }
    .search {
        display: flex;
        align-items: center;
    }
    .logo {
        font-size: 20px;
        font-weight: 800;
        color: #fff;
    }
    .searchForm {
        width: 260px;
        height: 30px;
        margin-right: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #fff;
        background-color: #fff;
        color: #8EC3B0;
        border-radius: 18px;
        box-shadow: 0 4px 8px -7px rgba(0,0,0,1);
    }
    .searchInput {
        width: 200px;
        height: 30px;
        border: none;
        font-size: 14px;
        font-weight: 600;
        background: none;
    }
    .searchInput::placeholder {
        color: #BCEAD5;
        font-size: 14px;
    }
    .searchInput:focus {
        outline: none;
    }
    .add {
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #DEF5E5;
        cursor: pointer;
    }
    .add:hover {
        background-color: #DEFFEF;
        transform: scale(1.1);
    }
    .contents {
    }
    .info {
        font-size: 14px;
        font-weight: 600;
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 5px;
        display: flex;
    }
    .searchIcon:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`

function Community() {

    const navigate = useNavigate();

    const navigateToCommunityWrite = () => {
        navigate("/communityWrite");
    }

    return (
        <CommunityContainer>
            <div className="container">
                <div className="header">
                    <div className="logo">커뮤니티</div>
                    <div className="search">
                        <div className="searchForm">
                            <input className="searchInput" placeholder="질문을 검색해보세요."></input>
                            <FaSearch size={"1.3em"} className="searchIcon"></FaSearch>
                        </div>
                        <button className="add" onClick={() => navigateToCommunityWrite()}>
                            <FaPen size={"1.6em"} color="#8EC3B0"></FaPen>
                        </button>
                    </div>
                </div>
                <div className="contents">
                    <div className="info">자유롭게 질문하고 답변하는 공간입니다.</div>
                    <div>
                        <CommunityList></CommunityList>
                        <CommunityList></CommunityList>
                        <CommunityList></CommunityList>
                    </div>
                </div>
            </div>
        </CommunityContainer>
    )
}

export default Community;