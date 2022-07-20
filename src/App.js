import logo_netflix from './assets/logo_netflix.png';
import data from './data/netflix.json';
function App() {
  return (
    <div className='container'>
      <img className='logo_netflix' src={logo_netflix} alt='logo_netflix' />
      <section>
        {data.map((element) => {
          return (
            <div>
              <h1>{element.category}</h1>
              <nav className='carrouselSection'>
                {element.images.map((moviePoster) => {
                  return <img src={moviePoster} alt='movie-poster' />;
                })}
              </nav>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
