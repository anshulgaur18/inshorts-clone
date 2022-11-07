import { useState ,useEffect} from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsContent from "./Components/NewsContent/NewsContent";
import apiKey from "./data/config";
import Footer from "./Components/Footer/Footer";
// import category from "./data/category";

function App() {

const [category, setCategory] = useState("General");
const [newsArray,setNewsArray] = useState([]);
const [newsResults,setNewsResults] = useState();
const [loadmore , setLoadmore] = useState(20);

const newsApi = async()=>{
  try {
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loadmore}`);
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
  } catch (error) {
    console.log(error);
  }
}


useEffect(() => {
  newsApi();
  
}, [newsResults , category,loadmore]);


  return (
    <div className="App">
      <Navbar setCategory={setCategory}/>
       
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore}/>
      <Footer/>
    </div>
  );
}

export default App;
