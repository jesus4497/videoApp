import React from 'react';
import '../assets/styles/components/Carousel.scss'

const Carousel = ( {children} ) =>(
    <section className="carousel">
        <div id="carousel__container">
            {children}
        </div>
    </section>
)

export default Carousel;