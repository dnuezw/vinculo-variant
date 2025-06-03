import type { FC } from 'react'
import './App.css'
import play from './assets/icons/play.svg'

const App: FC = () => {
  return (
    <main className='presentation'>
      <div className='title'>
        <h1>The game</h1>
        <p>Un juego to wapo hecho por el samu</p>
      </div>
      <div className='actions'>
        <button className='trailer'><img src={play} className='playIcon'/>Play trailer</button>
        <button className='coming-soon'>coming soon</button>
      </div>
    </main>
  );
}

export default App
