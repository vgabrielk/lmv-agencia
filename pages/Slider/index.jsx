import React from 'react'
import { Container } from 'reactstrap'
import Image from 'next/image';
import Slider from "react-slick";

const SliderView = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <section className='slider-content m-0 p-0 py-5'>
            <Container >

                <Slider {...settings}>
                    <div>
                        <h3 className='slider-h3'>
                        Apoie seu negócio com nossos serviços especializados. Não importa quão grande ou pequeno seja seu projeto, nós o cobrimos. Somos especialistas em gerenciamento e design de tráfego, bem como em websites.
                        </h3>
                    </div>
                    <div>
                        <h3 className='slider-h3'>Nós o ajudaremos a construir uma base forte de visitantes direcionados que estejam prontos para fazer negócios com você. </h3>
                    </div>
                    <div className='w-100'>
                        <h3 className='slider-h3'> Gestão de tráfego, design e websites para empresas.</h3>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default SliderView