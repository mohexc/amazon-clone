import React from 'react'
import Product from '../Product/Product'
import './Home.less'

const Home = () => {

    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="https://source.unsplash.com/random/1500x600" alt="" />
                <div className="home-row">
                    <Product title image price rating index={1} />
                    <Product index={2} />

                </div>
                <div className="home-row">
                    <Product index={3} />
                    <Product index={4} />
                    <Product index={5} />
                </div>
                <div className="home-row">
                    <Product index={6} />
                </div>

            </div>
        </div>
    )
}

export default Home
