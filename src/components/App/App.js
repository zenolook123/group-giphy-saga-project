import { React, useEffect } from 'react';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';



function App(props) {


useEffect(() => {
  dispatchEvent({ type: 'FETCH_GIFS' })
})

function* fetchGifs(action) {
  try {
    const fetchresponse = yield axios.get('/')
    // put = dispatch
    yield put ({ type: ''})
  } catch (error) {

  }
}


  return (
    <div>
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
