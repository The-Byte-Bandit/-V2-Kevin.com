import '../assets/styles/hero.css'

function Hero() {
  return (
    <div id='home' className='flex flex-1 flex-col'>
      <h3>Web Developer</h3>

      <div>
        <h1>Turning Imagination <br/>Into Reality</h1>
      </div>

      <div className='flex flex-1 flex-col'>
        <p className='hero-paragraph'>Crafting exciting and responsive digital masterpieces, powered by the latest in modern technology. Elevate your online presence. Lets craft something extraordinary together!</p>
        {/* <button>My Resume</button> */}
      </div>
    </div>
  );
}

export default Hero;
