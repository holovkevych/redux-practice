import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { inputText } from './redux/actions'

function Title(props) {
  console.log('props title >>', props)
  const text = useSelector(state => {
    const { inputReducer } = state
    return inputReducer.text
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    console.log('handle text >>', e.target.value)
    dispatch(inputText(e.target.value))
  } 

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} placeholder="Enter title..."/>
      </div>
      <h2>{text}</h2>
    </div>

  )
}

export default Title