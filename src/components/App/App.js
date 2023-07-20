import { React, useEffect } from 'react';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';



function App(props) {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch({ type: 'FETCH_GIFS' })
})

  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
