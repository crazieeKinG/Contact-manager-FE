import { Modal } from "antd";

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
