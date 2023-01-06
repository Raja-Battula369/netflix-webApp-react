import React,{ useEffect, useState }  from 'react'
import './Home.scss';
import axios from 'axios';
import {BiPlay} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai'

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";


const Card=({img})=> <img className='card' src={img} alt='cover'/>

const Row=({title,arr=[]})=> (
  <div className='row'>
      <h2>{title}</h2>

      <div>
        {arr.map((items,index)=> <Card key={index} img={`${imgUrl}/${items.poster_path}`}/>)}
      
      </div>
  </div>
  
)

const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  // const [genre, setGenre] = useState([]);
   
 
  
const fetcher=async(Title)=>await axios.get(`${url}/movie/${Title}?api_key=${apiKey}`);
  useEffect(()=>{
    
    
    
    const upcomingFetch=fetcher(upcoming);
    const nowPlayingFetch=fetcher(nowPlaying);
    const popularFetch=fetcher(popular);
    const topRatedFetch=fetcher(topRated);
    const Results=async()=>{
      const  UpComing=(await upcomingFetch).data.results
      const  NowPlay=(await nowPlayingFetch).data.results
      const  PopularMovies=(await popularFetch).data.results
      const  TopRated=(await topRatedFetch).data.results
      setUpcomingMovies(UpComing);
      setNowPlayingMovies(NowPlay);
      setPopularMovies(PopularMovies);
      setTopRatedMovies(TopRated);
      
    }
    Results();
    
  },[])

  return (
    <section className='Home'>
      
      <div className="banner" style={{backgroundImage: popularMovies[0]?`url(${`${imgUrl}/${popularMovies[0].poster_path}`})`:'black'}}>
        
      {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
      {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        <div>
            <button><BiPlay /> Play  </button>
            <button>My List <AiOutlinePlus /> </button>
        </div>
      </div>
      

      <Row title={"Upcoming"} arr={ upcomingMovies}/>
      <Row title={"Now Playing"} arr={ nowPlayingMovies}/>
      <Row title={"Popular"} arr={ popularMovies}/>
      <Row title={"Top Rated"} arr={topRatedMovies}/>

    

    </section>
  )
};

export default Home
