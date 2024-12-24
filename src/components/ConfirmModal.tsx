import { Modal } from "antd";

interface IConfirmModalProps {
	open: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

const ConfirmModal: React.FC<IConfirmModalProps> = ({
	open,
	onConfirm,
	onCancel,
}) => {
	return (
		<Modal
			title="Confirm Deletion"
			open={open}
			onOk={onConfirm}
			onCancel={onCancel}
			okText="Delete"
			cancelText="Cancel"
		>
			<p>Are you sure you want to delete this entity?</p>
		</Modal>
	);
};

export default ConfirmModal;
