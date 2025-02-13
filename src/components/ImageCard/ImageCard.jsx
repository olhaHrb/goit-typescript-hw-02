import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt, onImageClick }) => {
  const handleClick = () => {
    const modalData = {
      src: urls.regular,
      alt: alt,
    };
    onImageClick(modalData);
  };

  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={alt}
        className={css.image}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
