import styled from "styled-components";

export const Wrapper = styled.div`  
  width: 340px;
  flex-shrink: 0;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  background-color: white;
  margin-left: 16px;
`;

export const Title = styled.h3`
    padding: 8px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'yellow' : 'white')};
  flex-grow: 1;
  /* min-height: 100px; */
  border-bottom: 1px solid rgba(0,0,0,0.1);
  
  overflow: auto;
  max-height: 650px;
`;

