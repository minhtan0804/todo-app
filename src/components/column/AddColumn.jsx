import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddTaskList = () => {
    return (
        <Button
            type="text"
            style={{
                fontSize: 20,
                height: 50,
            }}
        >
            <PlusOutlined />
            Add Task List
        </Button>
    );
}

export default AddTaskList;