import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { Modal } from "../../types";
ReactModal.setAppElement("#root");

interface ImageModalProps {
  data: Modal;
  close: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "572px",
  },
};
const ImageModal: React.FC<ImageModalProps> = ({ data, close }) => {
  return (
    <>
      <ReactModal
        isOpen={true}
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={close}
      >
        <img src={data.src} alt={data.alt} className={css.image} />
      </ReactModal>
    </>
  );
};

export default ImageModal;
