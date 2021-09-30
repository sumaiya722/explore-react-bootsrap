
import { useEffect, useState } from 'react';
import { ButtonGroup, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import './App.css';
import News from './Components/News/News';
// import Card from './Components/Card/Card';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=1bd15ab3e5024593a26b3b846ef6346d')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>

  );
}

export default App;
