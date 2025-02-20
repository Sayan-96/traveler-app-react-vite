import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Card from './components/card/Card'


function App() {
  // Data for multiple cards
  const cardData = [
    {
      title: "Beautiful Nature",
      description: "Explore the beauty of nature in the wild.",
      imageUrl: "https://media-hosting.imagekit.io//21ccf5add5364717/Gustavia-GettyImages-903678706.webp?Expires=1832841100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QCodgsy~c8jTuIO4cVhtsFsDQMG0rRxAKeYOjrgi8RpDhNP2z2L8tz-KgPNHeMISO9lu1J3U0bj7hxlMuxYrffFGyzRMVsT0jqyk2f8oo58zZ-MKW1RPyRVcS9XjnvhALRj6XcGcZHS45By5dO8hWxu-A1OI7xXxrbweDYcTlr~HE7kru0EsWIoS9hk6Gs-t30CGQdQe3H254Y3IbyMEd95nB9S11Q2PXFfW~n0a6hUxYra8x6gw2N5Y16pha3DSBbf9KJciumiZZi4~qSR37bTskv3d-YWt0uMkD8pu8L9HtKMjtkRTjW5m-t0La56g5HmqAVPo5xeO-xQ3~AGH3w__"  // Replace with your image URL
    },
    {
      title: "City Lights",
      description: "Discover the city lights at night and the energy they bring.",
      imageUrl: "https://media-hosting.imagekit.io//ad867934feec4882/city-lights-buildings-4k-og.jpg?Expires=1832841305&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VRbrR~NTyNWQOTGLUFCD2cn7Bdl3oeDVG3uqkFuj7UD3YADM~cXMVU7W6ZLF5lQPXvV1dDpUlVPB1aUlDz4binmZGkTcn6m7NAydttBAeq2~o~z9rNG~FEhbNePv975M~Kh8nq8lz43JACR4LSOLQ9IhnpwyGbm7m4QgI608MYqKzW3H5pOwaHW79q3KfHm3fBJHjLJECBi4QNCg7bFuMq0ueo2vYkTVu7VbMfQGevmAoMCF0E8KDKSwb7rYRCw0I795GCQy~oEH6HaERYiHDOz5~cEzOmIVdKc6TGQ19U1KGyexd6nPhxXa3UYht3pniy5c64~MrQYW5hbk3Dh0nA__"  // Replace with your image URL
    },
    {
      title: "Adventure Awaits",
      description: "Experience new adventures and create unforgettable memories.",
      imageUrl: "https://media-hosting.imagekit.io//a4ea53a68bae411c/OIP.jpg?Expires=1832841400&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AbsqnV2V3yQDnE7PbeXPdjGN9NAAA8tHeRI0m5uxYP4aWyQDnQXKkkGgDOZi0HeZk5Im~sq6wSSJOA6Z~N4DCC5wmI~5qz1-KcBBy9wfWXw4Eb7qFo72zivJRuwdW6sr5uFLNmoMfHXIHXpRTYE6TFTqPn6ytsU8OGcYyNUeonzIrdniqqYoQmNFLFBSCMEGSPt~knmeqdfWKt5n3gQqjcTxwcKfndlnrHNbUuiaBdgvsj6W5QKqJN4hmJNKPp~WotwOWwsvwKkU295626eMy6eQaE4AxG3qT4b6iDq6bMcnquAgnKKdqcLnBylH8ny-~VziWxIhrk-W9utZr01ChA__"  // Replace with your image URL
    },
    {
      title: "Healthy Living",
      description: "Live a healthy lifestyle with nutritious food and exercise.",
      imageUrl: "https://media-hosting.imagekit.io//651449e4e5e7436f/wp9125812.jpg?Expires=1832841485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aOvouHNXw8Si~5sDc-u7r9WdFQJHxyWArSLqvNi~P-JonW60JhyPX7M42PYIwR4dEjMx36qSIH1jb6trT6JCU4TjbZ14xG1X3ebvoNUA8yh41zJ-1tX8Abdzuc64Po-tyBFGAQyVZlIyFBw1hbqhciMkRitudYn6R~9rcuFuQTBQDUycdLtyOw~tdZGOfvaFmh-~fqZc1MXAwfwQHJxEtCNig2y7wv8Irl-oRfFcEDvfqulWLabhQG5HTAEPOIX5-BHc5xgkkoqrE0fyHZyz1bnuG1hCTH3q61yQO-pA47U9YuCYiaSeGOJRn1c3pBneQz2-v9WtpLaV2fiFo-8nKQ__"  // Replace with your image URL
    },
    {
      title: "Experiece",
      description: "Live the moment and enjoy the view.",
      imageUrl: "https://media-hosting.imagekit.io//cba4388c90a84aa9/media_19d380abfa3b0ef02e3094de2227f778967cd8c6a.png?Expires=1832842037&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WiH2CWTZo7KQZ6KmjyBKFO7ITxIPZmkxBzRK43oDsMQo3cgzJMzDbxHllzh~qR852ZNyC92e5atP0ohzHw2zi2ZrYoZLK9Ipf8RTxpUOAkh-dr3zj4GaAkxmFdtIrw8x3oae81-h1IdNSskFSO2ezgU9pz9oWxLXOOfgAlzl0l9qyM9PI-RfdQvQ7qUDXwD6QemN5QtuGps2bT2uYaiN66tD0yJoO1l3ymt~CVlj6FzpdLj~u8NqGns2DGBj1V6~U~LtRlySnZiuVpDbloDi84Hfqyzq1R~y4rKmIr7oOVs-8wvvyaG6htr9BEj-DAB9ghDeJA~HuFNLgiKwHKm50Q__"  // Replace with your image URL
    }
  ];

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Login />
      <Services/>
      {/* Render Multiple Cards */}
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <Contact/>
      <Footer />
    </>
  )
}

export default App

