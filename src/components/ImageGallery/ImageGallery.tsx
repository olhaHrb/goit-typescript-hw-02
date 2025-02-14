import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (dataModal: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div>
      {images.length > 0 && (
        <ul className={css.list}>
          {images.map(({ id, urls, alt_description }) => (
            <li key={id} className={css.item}>
              <ImageCard
                urls={urls}
                alt={alt_description}
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
