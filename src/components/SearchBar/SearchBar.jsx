import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
// import { FormEvent } from "react";

// : FormEvent<HTMLFormElement>

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.searchValue.value;
    if (form.elements.searchValue.value.trim() === "") {
      toast.error("Please enter search term!", {
        duration: 2000,
        position: "top-center",
      });
      return;
    }

    onSearch(searchValue);
    form.reset();
  };
  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchValue"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster></Toaster>
    </header>
  );
};

export default SearchBar;
