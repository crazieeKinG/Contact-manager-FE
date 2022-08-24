import { Button } from "antd";

interface Props {
    buttonTitle: string;
    buttonFunction: React.MouseEventHandler<HTMLElement>;
}

const NotificationButton = ({ buttonTitle, buttonFunction }: Props) => {
    return (
        <Button type="primary" size="small" onClick={buttonFunction}>
            {buttonTitle}
        </Button>
    );
};

export default NotificationButton;
