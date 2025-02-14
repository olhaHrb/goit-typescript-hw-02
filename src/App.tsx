import css from "./App.module.css";

import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImagesWithTopic } from "./images-api";

import { Image } from "./types";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loadBtn, setLoadBtn] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<Image>({
    id: "",
    urls: "",
    alt_description: "",
  });

  const handleSearch = async (newTopic: string): Promise<void> => {
    setImages([]);
    setPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getImages() {
      try {
        setError(false);
        setLoading(true);
        setLoadBtn(false);

        const data: Image[] = await fetchImagesWithTopic(topic, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
        setLoadBtn(true);
      } catch (error) {
        setError(true);

        setLoadBtn(false);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [topic, page]);

  const onImageClick = (dataModal: Image): void => {
    // console.log(dataModal);
    setModalIsOpen(true);
    setDataModal(dataModal);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {loading && <Loader></Loader>}
      {error && <ErrorMessage></ErrorMessage>}
      <ImageGallery images={images} onImageClick={onImageClick}></ImageGallery>
      {loadBtn && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
      {modalIsOpen && (
        <ImageModal data={dataModal} close={closeModal}></ImageModal>
      )}
    </div>
  );
};

export default App;
