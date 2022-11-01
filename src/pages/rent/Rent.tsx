import FilterBar from "../../components/filters-bar/FilterBar";
import SearchBar from "../../components/search-bar/SearchBar";
import "./Rent.css";

export default function Rent() {
  return (
    <div className="page rent-page">
      <SearchBar />
      <FilterBar />
    </div>
  )
}
