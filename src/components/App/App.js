import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage';
function App(props) {

const dispatch = useDispatch()

useEffect(() => {
  dispatch({ type: 'FETCH_GIFS' })
})

  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchPage />
    </div>
  );
}

export default App;
