import { Image, Modal } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onImageClick: (dataModal: Modal) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  // urls,
  // alt_description,
  image,
  onImageClick,
}) => {
  const handleClick = () => {
    const modalData: Modal = {
      src: image.urls.regular,
      alt: image.alt_description,
    };
    onImageClick(modalData);
  };

  return (
    <div className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
