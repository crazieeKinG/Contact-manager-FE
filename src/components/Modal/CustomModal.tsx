import { Modal } from "antd";
import { useEffect, useState } from "react";
import NewContact from "../../pages/Contact/NewContact";

interface Props {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomModal = ({ children, visible, setVisible }: Props) => {
    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <Modal
            title="Title"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose
        >
            {children}
        </Modal>
    );
};

export default CustomModal;
