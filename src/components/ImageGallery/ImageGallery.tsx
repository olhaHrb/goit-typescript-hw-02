import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image, Modal } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (dataModal: Modal) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div>
      {images.length > 0 && (
        <ul className={css.list}>
          {images.map((image) => (
            <li key={image.id} className={css.item}>
              <ImageCard
                // urls={urls}
                // alt_description={alt_description}
                image={image}
                onImageClick={onImageClick}
              ></ImageCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageGallery;
