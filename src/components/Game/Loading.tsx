import styled from "@emotion/styled";
import React from "react";
import ReactLoading from "react-loading";

const LoadingWrpper  = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 960px;
height: 100vh;
`

const Loading = () =>{

    return(
        <LoadingWrpper>
            <ReactLoading
                type="spin"
                color="rgba(51, 169, 255, 1)"
            />
        </LoadingWrpper>
    )
}

export default Loading