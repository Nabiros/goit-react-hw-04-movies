import toast, { Toaster } from "react-hot-toast";
import styled from "./SearchBar.module.css";

export default function SearchBarPage({ onSubmit }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const target = e.target.elements.searchMovie.value.toLowerCase();
    if (target.trim() === "") {
      return toast.error("The search field is empty!");
    }
    onSubmit(target);
    e.target.reset();
  };

  return (
    <div className={styled.div}>
      <form onSubmit={handleSearch} className={styled.form}>
        <input
          className={styled.input}
          type="text"
          name="searchMovie"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
        <button className={styled.button} type="submit">
          <span className={styled.span}>Search</span>
        </button>
      </form>
      <Toaster />
    </div>
  );
}
