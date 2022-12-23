import { DeleteButton, DesCriptionTask, EditButton, MoreActions, TagEnd, TagPriority, TagStart, TaskTitle, TaskTitleWrap, Wrapper } from "./taskStyle";
import { Draggable } from "@hello-pangea/dnd"
import { CheckCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";


const Task = ({ task, index }) => {
    // const colorTitle = (tag) = {

    // }

    return (
        <Draggable
            draggableId={task.id}
            index={index}
        >
            {(provided, snapshot) => (
                <Wrapper
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <>

                        <TaskTitleWrap>

                            <CheckCircleOutlined style={{
                                margin: 4,
                            }} />
                            <TaskTitle className="task-title">{task.title}</TaskTitle>

                            <MoreActions
                                
                            >
                                <EditButton icon={<EditOutlined />} />
                                <DeleteButton icon={<DeleteOutlined />} />
                            </MoreActions>
                        </TaskTitleWrap>
                        <TagPriority
                            color={task.tag === "Important" ? "#FF0000" : "#0006B1"} >{task.tag}</TagPriority>

                        <DesCriptionTask>{task.description}</DesCriptionTask>

                        <TagStart>{task.start}</TagStart>

                        <TagEnd>{task.end}</TagEnd>
                    </>
                </Wrapper>
            )}
        </Draggable>
    );
}

export default Task;