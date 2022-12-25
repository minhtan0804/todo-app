import { Button, Tag } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 306px;
    /* height: 200px; */
    cursor: pointer;
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'skyblue' : 'white')};
    position: relative;
`;

export const TaskTitleWrap = styled.div`
    display: block;
    overflow-wrap: break-word;
`;

export const TaskTitle = styled.span` 
    width: 250px;
`;


export const TagPriority = styled(Tag)`
    padding: 4px 10px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-weight: 600;
`;

export const MoreActions = styled.div`
    position: absolute;
    top: 4px;
    right: 4px;
    visibility: hidden;
    opacity: 0;
    transition: cubic-bezier(0.215, 0.610, 0.355, 1);
    
    ${Wrapper}:hover &{
        visibility: visible;
        opacity: 1;
    }
`;

export const DeleteButton = styled(Button)`
    margin-left: 2px;
`;
export const EditButton = styled(Button)`
    border: none;
    `;

export const DetailButton = styled(Button)`
    border: none;
`;

export const DesCriptionTask = styled.span`
    font-size: 16px;
    white-space: wrap;
    display: block;
    height: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    line-height: 25px;
    margin-bottom: 20px;
`

export const TagStart = styled(Tag)`
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

export const TagEnd = styled(Tag)`
    position: absolute;
    right: 10px;
    bottom: 10px;
`;

