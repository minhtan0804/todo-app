import { DatePicker, Select, Tag } from "antd";
import { InputCustomTask, SelectCustomTask, TaskDate } from "./taskFormStyle";
import Priority from "../../data/priorityData"
import { useState } from "react";

const TaskForm = () => {
    const [colorTag, setColorTag] = useState("white");

    const handleChange = (value) => {
        setColorTag(value);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <InputCustomTask
                type="text"
                placeholder="Enter your title"
                marginBottom="6px"
                maxLength={30}
            />

            <SelectCustomTask
                paddingBottom="6px"
                defaultValue=" "
                style={{ width: 120 }}
                onChange={handleChange}
                options={Priority}
            >
            </SelectCustomTask>

            <InputCustomTask
                placeholder="Enter your description"
                maxLength={45}
                marginBottom="6px"

            />

            <TaskDate>
                <DatePicker
                    placeholder="Start date"
                    onChange={onChange}
                />

                <DatePicker
                    placeholder="End date"
                    onChange={onChange}
                />
            </TaskDate>
        </>
    );
}

export default TaskForm;