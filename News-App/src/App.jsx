import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [news, setNews] = useState([]);
  const [otherReads, setOtherReads] = useState([]);

  useEffect(() => 
  {
    const fetch = async () => 
    {
      try 
      {
        const response = await axios.get('https://news-app-o4ji.onrender.com/news');
        setNews(response.data.news);
        setOtherReads(response.data.other_reads);
      }
      catch(err) 
      {
        console.log('Some error occurred: + ' + err);
      }
    }
    
    fetch();
  },[])

  return (
    <>
      <div>
        <h1> Daily News </h1>
        <hr />
        <h2>Headlines</h2>
          {news.map((item) => 
            <div key={item.id}>
              <li>{item.headline} <br /> {item.subtext}</li>
            </div>
          )}
        <hr />        
        <div>
          <h2>Other Reads</h2>
          {otherReads.map((item) => 
          <div key = {item.id}>
            {item}
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App
