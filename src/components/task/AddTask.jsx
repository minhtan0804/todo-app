import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import { Wrapper } from "./addTaskStyle";
import TaskForm from "./TaskForm";

const AddTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Wrapper>
            <Button
                type="text"
                size="large"
                onClick={showModal}
                style={{
                    fontSize: 20,
                }}
            >
                <PlusOutlined />
                Add Task
            </Button>

            <Modal title="New Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <TaskForm />
            </Modal>
        </Wrapper>
    );
}

export default AddTask;