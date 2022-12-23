import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Wrapper } from "./addTaskStyle";

const AddTask = () => {
    return (
        <Wrapper>
            <Button
                type="text"
                size="large"
                style={{
                    fontSize: 20,
                }}
            >
                <PlusOutlined />
                Add Task
            </Button>
        </Wrapper>
    );
}

export default AddTask;