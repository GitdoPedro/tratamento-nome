"use client"

import {useState} from 'react'

import Nome from '../components/Nome'
import NomeTratado from '../components/NomeTratado'


export default function Home() {
  const [socket, setSocket] = useState(null)
  return (
    <div>
      <Nome setSocket={setSocket}/>
      {socket && <NomeTratado socket={socket} />}
    </div>
  )
}
