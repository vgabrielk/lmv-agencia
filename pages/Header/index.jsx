import React, { useState } from 'react'

/* import Logo from '../../assets/images/logo2.png' */

import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImMenu } from 'react-icons/im'
import { MdOutlineClose } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

import {
    Button, Container
} from 'reactstrap'
const Header = () => {

    const [menuMob, setMenuMob] = useState(true)

    return (
        <>
            {menuMob ? <ImMenu color='light' onClick={() => setMenuMob(!menuMob)} className='menu-mobile text-light' size={30} /> : <MdOutlineClose onClick={() => setMenuMob(!menuMob)} className='menu-mobile text-light' size={30} />}

            <div className={menuMob ? "header " : "header menuOpen"}>
                <Container className="nav">
                    <Link className='logo' href="/">
                        <>
                            <Image
                                src={"/images/logo.png"}
                                width="70px"
                                height="70px"

                            />
                        </>
                    </Link>
                    <div className='text-light d-flex ul'>
                        <div className="social-icons">
                            <Link href='#' target="_blank" color="transparent">
                                <>

                                    <FaLinkedin size={30} className="mx-2 text-light social" />
                                </>
                            </Link>
                            <Link href='https://instagram.com/agencialmv' target="_blank" color="transparent" >
                                <>

                                    <AiFillInstagram size={30} className="mx-2 text-light social" />
                                </>
                            </Link>
                            <Link href='#' target="_blank" color="transparent">
                                <>
                                    <IoLogoWhatsapp size={30} className="mx-2 text-light social" />
                                </>
                            </Link>
                        </div>
                        <Button
                            id="PopoverClick"
                            color='transparent'
                            type="button"
                            className='btn-md ms-4 text-light together my-0 fs-800 btn-cta'
                            style={{ boxShadow: 0 }}
                        >Falar com especialista
                            <IoLogoWhatsapp size={20} className="mx-2 text-success m-0 wpp " />
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header