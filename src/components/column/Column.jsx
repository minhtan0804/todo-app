import { Draggable, Droppable } from "@hello-pangea/dnd";
import AddTask from "../task/AddTask";
import Task from "../task/Task";
import { TaskList, Title, Wrapper } from "./columnStyle";

const Column = ({ column, tasks, index }) => {
    // console.log(column);
    return (
        <Draggable
            draggableId={column.id}
            index={index}
        >
            {(provider) => (
                <Wrapper
                    {...provider.draggableProps}
                    {...provider.dragHandleProps}
                    ref={provider.innerRef}
                >
                    <Title
                        {...provider.dragHandleProps}
                    >
                        {column.title}
                    </Title>

                    <Droppable
                        droppableId={column.id}
                        type="task"
                    >
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {tasks.map((task, index) => (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>

                    <AddTask />
                </Wrapper >
            )}
        </Draggable>
    );
}

export default Column;