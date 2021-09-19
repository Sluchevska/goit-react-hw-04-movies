import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchBar({ onSearch }) {
//   const [searchName, setSearchName] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        // console.log(e.target.elements.searchName.value)
    onSearch(e.target.elements.searchName.value.toLowerCase());
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
