import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import { InputCustomTask } from "../task/taskFormStyle";

const AddTaskList = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
            <Button
                type="text"
                style={{
                    fontSize: 20,
                    height: 50,
                }}
                onClick={showModal}
            >
                <PlusOutlined />
                Add Task List
            </Button>

            <Modal
                title="Add Task List"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <InputCustomTask placeholder="New List"/>
            </Modal>
        </>
    );
}

export default AddTaskList;