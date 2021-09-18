import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function MoviesPage() {
    const [searchName, setSearchName] = useState([]);
    
  const handleSubmit = searchName => {
    setSearchName(searchName);
  };
  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      <h1>Its movies Page</h1>
    </>
  );
}
