import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'


const variants = {
    open: {opacity: 1, x: 0},
    closed: {opacity: 0, x: "-100%"}
}
const navStyle = "fixed top-0 left-0 bottom-0 w-[300px] z-10 shadow-lg"
const innerNavStyle = "absolute top-0 left-0 bottom-0 w-[100%] bg-white"
const btnToggle = "bg-white z-20 fixed outline-none border-none top-[18px]left-[15px] ml-[15px] mt-[10px] w-[50px] h-[50px] rounded-full text-2xl flex justify-center items-center"
const ulStyle = "p-0 relative top-[100px] m-0 border-t border-pink-500"
const liStyle = "curser-pointer leading-3 py-[20px] px-[26px] border-b border-pink-500 hover:bg-gradient-to-l from-purple-500 to-pink-500 hover:text-white r"
const linkStyle = "text-[1.2rem] transition-all duration-[.4s] ease-in-out "

const SideBar = () => {
    const [show,setShow] = useState(false)
  return (
    <>
        <motion.nav animate={show ? "open" : "closed"}
        variants={variants}
        transition={{duration: 0.5}}
        className={navStyle}
        >
                 <motion.div className={innerNavStyle}>
                <ul className={ulStyle}>
                    <motion.li className={liStyle}
                    >
                        <a className={linkStyle} href="">Home</a>
                    </motion.li>
                    <motion.li className={liStyle}
                    >
                        <a className={linkStyle} href="">About</a>
                    </motion.li>
                    <motion.li className={liStyle}
                    >
                        <a className={linkStyle} href="">Contact</a>
                    </motion.li>

                </ul>
            </motion.div>
        </motion.nav>

        <motion.button
            className={btnToggle}
            onClick={() => setShow(show => !show)}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
            {!show ? <FaBars/> : <GrClose/>}
        </motion.button>
    </>
  )
}

export default SideBar