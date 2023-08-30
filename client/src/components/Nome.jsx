import {useRef} from 'react'
import io from 'socket.io-client'



export default function Nome({setSocket}) {

    const nomeRef = useRef()

    const handleSubmit =  async () => {
        const nomeColetado = nomeRef.current.value
                
        if(!nomeColetado.trim()) return;
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_Nome_Completo',(toLowerCaseAll(nomeColetado)))
        setSocket(socket)
        clearInput()
        

    }

    const clearInput = () => {
        nomeRef.current.value = ''
      
    }
    const toLowerCaseAll = inputString => inputString.toLowerCase();

    return (
        <div>
            <h1>Digite o nome completo:</h1>
            <input type="text"require ref= {nomeRef}/>
            <button onClick={()=>handleSubmit()}>Enviar</button>
        </div>
    )
  
}
