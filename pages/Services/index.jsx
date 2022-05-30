import React from 'react'
import { AccordionBody, AccordionHeader, AccordionItem, Card, CardTitle, Col, Container, Label, Row, UncontrolledAccordion } from 'reactstrap'

import Image from 'next/image'




const Services = () => {
    return (
        <>
            <section className='mt-5 services text-center container'>
                <h4 >O QUE ENTREGAMOS:</h4>
                <h5 >Somos uma agência digital que integra seu marketing e <br /> tecnologia. Trata-se de oferecer diferenciação com objetivo.</h5>
                <Row className='mt-5'>
                    <Col sm="6">
                        <UncontrolledAccordion className='mb-4'>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <p className='m-0'>GESTÃO DE TRÁFEGO</p>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    De forma profissional, podemos levar seu anúncio, Instagram, site ou aplicativo pra outro nível! Alcançando de 30.000 à 200.000 pessoas, dependendo apenas da sua escolha!
                                    Também podemos aumentar sua quantidade de clientes, de vendas ou visualizações no que precisar!
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </Col>
                    <Col sm="6">
                        <UncontrolledAccordion className='mb-4'>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <p className='m-0'>DESENVOLVIMENTO DE SITES</p>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    Criar um site é essencial para que a sua empresa ganhe mais visibilidade na internet e conquiste, por consequência, um número maior de clientes. Ele funciona como uma vitrine para o seu negócio, reunindo todas as informações importantes para o seu público-alvo.
                                </AccordionBody>

                            </AccordionItem>
                        </UncontrolledAccordion>
                    </Col>
                </Row>
                <Row >
                    <Col sm="6">
                        <UncontrolledAccordion className='mb-4'>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <p className='m-0'>DESIGN GRÁFICO</p>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                O design gráfico é essencial no desenvolvimento de uma marca corporativa ou identidade visual. A forma como uma empresa se apresenta aos seus clientes define a sua identidade e os seus valores, marca a imagem pública da empresa.
                                </AccordionBody>

                            </AccordionItem>
                        </UncontrolledAccordion>
                    </Col>
                    <Col sm="6">
                        <UncontrolledAccordion className='mb-4'>
                            <AccordionItem>
                                <AccordionHeader targetId="1">
                                    <p className='m-0'>SEO</p>
                                </AccordionHeader>
                                <AccordionBody accordionId="1">
                                SEO é a sigla de Search Engine Optimization (otimização de mecanismos de busca) e é o conjunto de técnicas usadas, geralmente divididas entre tecnologia, conteúdo e autoridade, para alcançar bom posicionamento de páginas de um site no Google e em outros buscadores, gerando tráfego orgânico.
                                </AccordionBody>

                            </AccordionItem>
                        </UncontrolledAccordion>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Services