
import React, {useRef, useState,useEffect} from 'react'




export default function NomeTratado ({socket}) {

    const [nameList,setNameList] = useState([])

    useEffect(()=>{
        socket.on('nome_recebido', data => {
            setNameList((current) => [...current,data])
        })

        return () => socket.off('nome_recebido')
    },[socket])


    return (
        <div>
            <h1>Nomes Tratados: </h1>
            <ul>
            {
            nameList.map((name,index) => (
                    <li key={name.nameId}>{name.nomeCompleto}</li>
                ))
            }  
            </ul> 
        </div>
      
    )
  }