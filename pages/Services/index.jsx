import React from 'react'
import { Card, CardTitle, Col, Container, Label, Row } from 'reactstrap'

import { SiGoogleads } from 'react-icons/si'
import { BiCodeCurly } from 'react-icons/bi'
import { IoIosColorPalette } from 'react-icons/io'
import Image from 'next/image'




const Services = () => {
    return (
        <>
            <Container className='mt-5'>
                <Card className="p-3 px-5 services bg-cinzaEscuro d-flex justify-content-center">
                    <Row>
                        <Col className='d-flex align-items-center text-center flex-column' sm="4">
                            <SiGoogleads className='mb-4 icon' size={80} />
                            <Label>Gestão de tráfego</Label>
                            <p >De forma profissional, podemos levar seu anúncio, Instagram, site ou aplicativo pra outro nível! Alcançando de 30.000 à 200.000 pessoas, dependendo apenas da sua escolha!
                                Também podemos aumentar sua quantidade de clientes, de vendas ou visualizações no que precisar!</p>
                        </Col>
                        <Col className='d-flex align-items-center text-center flex-column' sm="4">
                            <BiCodeCurly className='mb-4 icon' size={80} />
                            <Label >Desenvolvimento de websites</Label>
                            <p>Promovendo sua marca no Google e nas redes sociais, consequentemente as chances de atrair mais visitantes para conhecer o seu negócio através do site, que tenham interesse em fechar uma venda, é enorme! Além disso sua empresa ganha um funcionário/vitrine bônus. </p>
                        </Col>
                        <Col className='d-flex align-items-center text-center flex-column' sm="4">
                            <IoIosColorPalette className='mb-4 icon' size={80} />
                            <Label>Design gráfico</Label>
                            <p>Aumenta a atração de clientes. O investimento em design gráfico é algo necessário e não pode ser mais uma questão de escolha... O projeto gráfico profissional cria uma impressão positiva da empresa e evita distorções e mal-entendidos.</p>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default Services