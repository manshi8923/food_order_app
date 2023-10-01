import food from '../img/burger-image.png';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-left'>
        <h1>
          Welcome to <br/>
          The world of <br/>
          <span>
            Tasty and Fresh Food
          </span>
        </h1>
      </div>
      <div className='about-right'>
        <img src={food} alt='Food Image' />
      </div>
    </div>
  )
}

export default About