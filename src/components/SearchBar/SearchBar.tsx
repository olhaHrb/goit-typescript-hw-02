import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  onSearch: (newTopic: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const searchValueInput = form.elements.namedItem(
      "searchValue"
    ) as HTMLInputElement;
    const searchValue = searchValueInput.value;

    //const searchValue: string = form.elements.searchValue.value;
    // if (form.elements.searchValue.value.trim() === "") {
    //   toast.error("Please enter search term!", {
    //     duration: 2000,
    //     position: "top-center",
    //   });
    //   return;
    // }

    if (searchValue === "") {
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
