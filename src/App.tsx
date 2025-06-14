import type { FC } from 'react'
import './App.css'
import play from './assets/icons/play.svg'
import logo from './assets/images/logo.png'
import logoText from './assets/images/logoText.png'
import Herick from './assets/images/characters/herick.png';
import Ikunat from './assets/images/characters/ikunat.jpg';
import Samario from './assets/images/characters/samario.jpg';

const App: FC = () => {
  return (
    <>
      <main className='presentation'>
        <div className='content'>
          <div className='title'>
            <div className='logo'>
              <img className='icon' src={logo} />
              <img className='text' src={logoText} />
            </div>
            <p className='subtitle'>One bufanda one destiny...</p>
          </div>
          <div className='actions'>
            <button className='trailer'><img src={play} className='playIcon'/>Play trailer</button>
            <button className='coming-soon'>coming soon</button>
          </div>
        </div>
      </main>
      <section className='story'>
        <p>
          En una profunda cueva, donde el Sol es desconocido, el reino de las altas torres de mármol se sume en una cruenta guerra santa. La Vinculación, habilidad que permite a los habitantes del reino adoptar las propiedades de un objeto cercano a ellos durante su nacimiento, y los límites éticos de esta se encuentran en el centro del conflicto. Un ciudadano de baja alcurnia descubre en el caos una antigua llave y se dirige al palacio, decidido a darle uso.
        </p>
      </section>
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
