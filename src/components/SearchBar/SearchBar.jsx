import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
// import { Link } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';




// export default function Movies(searchName) {
//     const { url } = useRouteMatch();
//   const [movies, setMovies] = useState(null);

//   useEffect(() => {
//     MovieApi.fetchMovieByName(searchName).then(data => {
//       setMovies(data);
//     });
//   }, [searchName]);
//   console.log(movies);
//   return (
//     <>
//       <form>
//         <button type='button'>
//           <span>Search</span>
//         </button>
//               <input
//                   name="searchName"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Enter movie name"
//               />
        
//       </form>
//     </>
//   );
// }

export default function SearchBar({ onSearch }){
    const handleSearch = e => {
        console.log(e.target.elements.searchName.value)
        e.preventDefault();
        onSearch(e.target.elements.searchName.value.toLowerCase())
        
    }
    return (
        <>
       <form onSubmit={handleSearch}>
         
               <input
                  name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
                />
                <button type='button'>
           <span>Search</span>
         </button>
        
      </form>
    </>
    )

}
