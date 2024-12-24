import { AiOutlineDelete } from "react-icons/ai";
import { Button, message } from "antd";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

interface ITableActionsMenuProps {
	id: number;
	deleteMutation: MutationTrigger<(id: number) => Promise<void>>; 
}

const TableActionsMenu: React.FC<ITableActionsMenuProps> = ({
	id,
	deleteMutation,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDelete = async () => {
		try {
		  await deleteMutation(id);
		  message.success("Delete successfully");
		  setIsModalOpen(false);
		} catch (error) {
		  message.error("Delete failed");
		}
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button
				onClick={showModal}
				style={{ color: "red", cursor: "pointer" }}
			>
				<AiOutlineDelete />
			</Button>

			<ConfirmModal
				open={isModalOpen}
				onConfirm={handleDelete}
				onCancel={handleCancel}
			/>
		</>
	);
};

export default TableActionsMenu;
