import { useEffect, useState } from 'react'
import Header from './components/header/header'
import ReadingLists from './components/readingLists/readingLists'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [readingLists, setReadingLists] = useState([]);

  const getReadingLists = async () => {
    const response = await fetch('http://localhost:3001/lists')
    .then((response) => response.json());
  
    setReadingLists(response);
  };

  const addReadingList = async (payload) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };

    await fetch('http://localhost:3001/lists', options)
    .then((response) => response.json());
    await getReadingLists();
  };

  const deleteReadingList = async (id) => {
    await fetch(`http://localhost:3001/lists/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());

    await getReadingLists();
  }

  useEffect(() => {
    getReadingLists();
  }, []);

  const addHandler = ({ title, author }) => {
    let payload = {
      title,
      author
    }

    addReadingList(payload);
  }

  const removeHandler = (id) => {
    deleteReadingList(id);
  }

  return (
    <>
      <Header />
      <ReadingLists readingLists={readingLists} addHandler={addHandler} removeHandler={removeHandler} />
    </>
  );
}

export default App;
