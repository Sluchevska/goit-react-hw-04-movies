import toast from 'react-hot-toast';
import { Button, Container, Input } from './SearchBar.styled';

export default function SearchBar({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    if (e.target.elements.searchName.value.toLowerCase().trim() === '') {
      return toast.error('The search field is empty!');
    }
    onSearch(e.target.elements.searchName.value.toLowerCase());
    e.target.reset()
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <Input
          name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
         
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </form>
    </Container>
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
