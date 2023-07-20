import { React, useEffect } from 'react';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import SearchPage from '../SearchPage/SearchPage';
function App(props) {

useEffect(() => {
  dispatchEvent({ type: 'FETCH_GIFS' })
})

  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchPage />
    </div>
  );
}

export default App;
