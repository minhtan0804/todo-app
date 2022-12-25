import { Input, Select } from "antd";
import styled from "styled-components";

export const InputCustomTask = styled(Input)`
    margin-bottom: ${props => props.marginBottom};
    width: ${props => props.width};
    word-wrap: break-word;
        word-break: break-all;
`;

export const SelectCustomTask = styled(Select)`
    padding-bottom: ${props => props.paddingBottom};
`;

export const TaskDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 50px; */
`;