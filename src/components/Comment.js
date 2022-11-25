import React from "react";
import styled from "styled-components";

const CommentContainer = styled.div`

`

function Comment(props) {
    return (
        <CommentContainer>
            <div>
                <div>{props.title}</div>
                <div>
                    {/* 컴포넌트화 하기 */}
                    <img></img>
                    <div>닉네임</div>
                    <div>test 문구입니다.</div>
                </div>
            </div>
        </CommentContainer>
    )
}

export default Comment;