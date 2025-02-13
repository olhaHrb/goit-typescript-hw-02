import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
ReactModal.setAppElement("#root");

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
const ImageModal = ({ data, close }) => {
  //   const closeModal = () => {};
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
