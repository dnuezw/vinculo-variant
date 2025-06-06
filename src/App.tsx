import type { FC } from 'react'
import './App.css'
import play from './assets/icons/play.svg'
import logo from './assets/images/logo.png'
import logoText from './assets/images/logoText.png'

const App: FC = () => {
  return (
    <main className='presentation'>
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
    </main>
  );
}

export default App
