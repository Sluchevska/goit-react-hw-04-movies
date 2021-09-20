import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export default function SearchBar({ onSearch }) {
  const [searchName, setSearchName] = useState('');

  const handleSearch = e => {
      setSearchName(e.target.elements.searchName.value) 
      e.preventDefault();
      if (searchName.trim() === '') {
        return toast.error(
            'The search field is empty!',
          );
      }
    onSearch(searchName.toLowerCase());
    setSearchName('')
  };
 
  return (
    <>
  
      <form onSubmit={handleSearch}>
        <input
          name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
        //   onChange={handleSearch}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
}





// export default function SearchBar({ onSubmit }) {
//   const [searchName, setSearchName] = useState('');

//   const handleSearch = e => {
//     setSearchName(e.target.value.toLowerCase());
//   };
//   const handleSubmit = e => {
//       e.preventDefault();
//       if (searchName.trim() === '') {
//       toast.info('Please enter your query!');
//       return;
//     }
//     onSubmit(searchName);
//     setSearchName('');
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="searchName"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Enter movie name"
//           onChange={handleSearch}
//         />
//         <button type="submit">
//           <span>Search</span>
//         </button>
//       </form>
//     </>
//   );
// }
