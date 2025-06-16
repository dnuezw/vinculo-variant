import type { FC } from "react"

type PresentationProps = {
  logo: string,
  logoText: string,
  playIcon: string
}

const Presentation: FC<PresentationProps> = (source) => {
  return (
    <main className='presentation'>
      <div className='content'>
        <div className='title'>
          <div className='logo'>
            <img className='icon' src={source.logo} />
            <img className='text' src={source.logoText} />
          </div>
          <p className='subtitle'>One bufanda one destiny...</p>
        </div>
        <div className='actions'>
          <button className='trailer'><img src={source.playIcon} className='playIcon'/>Play trailer</button>
          <button className='coming-soon'>coming soon</button>
        </div>
      </div>
    </main>
  )
}

export default Presentation;