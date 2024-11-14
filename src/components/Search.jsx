import React, { useState } from 'react'
import { useRef } from 'react'
import "./Search.css"

function Search({setLocationId}) {
    const [error,setError]= useState("")
    const inputRef = useRef()
    
    const onSubmit= (e)=>{
        e.preventDefault()
        const id =parseInt(inputRef.current.value)

        if(isNaN(id)){
            setError('Invalid Number')
            setTimeout(()=>{setError("")},3000)
            return
        }
        if(id<1 || id>126){
            setError('❌Hey! You must provide an Id from 1 to 126')
        }
        setLocationId(id)
        inputRef.current.value=''
        // e.target.reset() este limpia todos los campos de un formulario
    }
  return (
    <form onSubmit={onSubmit} className='search'>
        <input ref={inputRef} type='text' className='search__input'/>
        <button className='search__btn'>Search</button>
        <p className='search__error'>{error && error}</p>
    </form>
  )
}

export default Search
