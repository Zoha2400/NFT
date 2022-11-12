import React from 'react'
import CreatorNetwork from '../CreatorNetwork/CreatorNetwork'
import Recomendation from '../Recomendation/Recomendation'
import './Home.scss'

function Home() {
  return (
    <div className='Home'>

        <StartSearch/>
        <CreatorNetwork/>
        <Recomendation/>

    </div>
  )
}

function StartSearch() {
  return (
    <section className='StartSearch'>
            <div className='Wrapper'>
                <p>Create, explore, & collect digital art NFTs.</p>
                <h1>The new creative economy.</h1>
                <button>Start your search</button>
            </div>

    </section>
  )
}



export default Home