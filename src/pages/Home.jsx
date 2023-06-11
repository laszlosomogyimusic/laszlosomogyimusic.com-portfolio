import bassGuitarImg from 'assets/images/hero-bg.jpg';
import "styles/Home.css";

const Home = () => {
  return ( 
    <div className="Home">
      <p>
        Hi there. I'm Laszlo Somogyi. Front end web developer and musician.
        <img src={ bassGuitarImg } alt="bass guitar" className="home__img--size" />
      </p>
    </div>
   );
}
 
export default Home;