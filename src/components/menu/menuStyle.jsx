import styled from "styled-components";

export const SideBarWrapper = styled.div`
    width: 250px;
    height: calc(100% - 10px);
    padding-top: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    
    border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
    
    .ant-menu {
        border-inline-end: none;
    }

    .ant-btn {
        margin-bottom: 20px;
        height: 50px;
        width: 120px;
        align-self: center;
        font-size: 20px;
        justify-content: center;
    }
`;