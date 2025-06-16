import type { FC } from 'react'
import './App.css'
import play from './assets/icons/play.svg'
import logo from './assets/images/logo.png'
import logoText from './assets/images/logoText.png'
import Herick from './assets/images/characters/herick.png';
import Ikunat from './assets/images/characters/ikunat.jpg';
import Samario from './assets/images/characters/samario.jpg';
import Story from './components/Story/Story';
import Presentation from './components/Presentation/Presentation';

const App: FC = () => {
  return (
    <>
      <Presentation playIcon={play} logo={logo} logoText={logoText}/>
      <Story />
      <section className='characters'>
        <h2>Personajes</h2>
        <div className='content'>
          <div className='character'>
            <img src={Herick} />
            <h3>Herick</h3>
            <p>El eric tiene una espada to gorda que hace que la imagen se recorte mal</p>
          </div>
          <div className='character'>
            <img src={Ikunat}/>
            <h3>Ikunat</h3>
            <p>Los píxeles de la imagen tienen lore propio</p>
          </div>
          <div className='character'>
            <img src={Samario}/>
            <h3>Samario</h3>
            <p>El más guapo del barrio</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
