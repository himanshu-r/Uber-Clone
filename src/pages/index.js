import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <Wrapper>
       UBER-CHALLENGE-APP
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex bg-black text-white
`
