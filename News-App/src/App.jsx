import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);
  const [otherReads, setOtherReads] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('https://news-app-o4ji.onrender.com/news');
        setNews(response.data.news);
        setOtherReads(response.data.other_reads);
      } catch (err) {
        console.log('Some error occurred: ' + err);
      }
    };
    fetch();
  }, []);

  // Scroll Functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="p-4 h-screen w-screen font-serif">
      <h1 className="text-4xl font-bold text-center pb-4">Daily News</h1>
      <hr />
      <div className="grid grid-cols-4 gap-2 p-2">
        {news.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 items-center p-2 rounded-lg hover:shadow-md hover:bg-slate-50 transition duration-200"
          >
            <div className="text-2xl font-semibold hover:underline cursor-pointer">
              {item.headline}
            </div>
            <br />
            <div className="text-slate-500 font-light">{item.subtext}</div>
          </div>
        ))}
      </div>
      <hr />
      <div>
      <h2 className="py-1 font-semibold text-2xl mb-4">Other Reads</h2>
        <div className="relative flex items-center my-2">
          {/* Left Arrow */}
          <button
            className="absolute left-0 bg-black opacity-50 hover:opacity-100 text-white p-2 rounded-full z-10"
            onClick={scrollLeft}
          >
            &larr;
          </button>

          {/* Scrollable Container */}
          <div
            className="flex space-x-4 py-2 overflow-x-auto scroll-smooth scrollbar-hide"
            ref={scrollRef}
          >
            {otherReads.map((item) => (
              <div
                key={item.id}
                className="w-64 min-w-[16rem] font-extralight p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200"
              >
                <div className="text-lg  hover:text-blue-700 hover:underline cursor-pointer">
                  {item}
                </div>
              </div>
            ))}
          </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 bg-black opacity-50 hover:opacity-100 text-white p-2 rounded-full hover:bg-slate-800 z-10"
          onClick={scrollRight}
        >
          &rarr;
        </button>
      </div>
    </div>
          
    <hr />
    <div className='h-1/10'>
        <div className='flex grid-cols-3 align-text-bottom font-extralight text-sm justify-between'>
            <div>
              <a href="https://github.com/Suyash878/News-App.git" className='text-blue-600 hover:underline'>Contribute to this project</a>
            </div>
            <div>
              Source: BBC News
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
