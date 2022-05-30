import React, { useState, useEffect } from 'react'

/* import Logo from '../../assets/images/logo2.png' */

import { FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImMenu } from 'react-icons/im'
import { MdOutlineClose } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

import {
    Button, Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown
} from 'reactstrap'

const Header = () => {

    const [menuMob, setMenuMob] = useState(true)
    const [windowScroll, setWindowScroll] = useState(false)

    

    return (
        <>
            {menuMob ? <ImMenu color='light' onClick={() => setMenuMob(!menuMob)} className='menu-mobile text-dark' size={30} /> : <MdOutlineClose onClick={() => setMenuMob(!menuMob)} className='menu-mobile text-dark' size={30} />}

            <div className={menuMob ? "header " : "header menuOpen"}>
                <Container className="nav">
                    <Link className='logo' href="/">
                        <>
                            <Image
                                src={"/images/logo.png"}
                                width="50px"
                                height="60px"

                            />
                        </>
                    </Link>
                    <div className='text-light d-flex ul'>
                        <div className="social-icons">
                            <Link href='#' target="_blank" color="transparent">
                                <>


                                </>
                            </Link>
                            <Link href='https://instagram.com/agencialmv' target="_blank" color="transparent" >
                                <>


                                </>
                            </Link>
                            <Link href='#' target="_blank" color="transparent">
                                <>

                                </>
                            </Link>
                        </div>
                        <UncontrolledButtonDropdown className='btn-secondary btn btn-sm d-flex justify-content-center'>
                            <DropdownToggle caret>Falar com especialistas</DropdownToggle>
                            <DropdownMenu className='mx-auto' >
                                <DropdownItem className='dropdown'>
                                    <FaLinkedin size={30} className="mx-2 text-dark social" />
                                    Linkedin
                                </DropdownItem>
                                <DropdownItem className='dropdown'>
                                    <AiFillInstagram size={30} className="mx-2 text-dark social" />
                                    Instagram
                                </DropdownItem>
                                <DropdownItem className='dropdown'>
                                    <IoLogoWhatsapp size={30} className="mx-2 text-dark social" />
                                    Whatsapp
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header