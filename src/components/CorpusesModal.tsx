import { Modal, Button } from "antd";
import { BsEye } from "react-icons/bs";
import { useState } from "react";

interface CorpusesModalProps {
  corpus: string[];
}

const CorpusesModal: React.FC<CorpusesModalProps> = ({ corpus }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Button onClick={showModal} style={{ border: "none" , backgroundColor: "transparent", color: "blue",boxShadow: "none"}}>
        <BsEye /> 
      </Button>

      <Modal
        title="Corpus List"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ul>
          {corpus?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default CorpusesModal;
