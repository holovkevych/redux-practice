import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate } from './redux/actions'

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('')
  const { text, id } = data
  const dispatch = useDispatch()

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
  }

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  return (
    <form onSubmit={handleUpdate} className="comments-item-create">
      <div className="comments-item-delete">&times;</div>
        <input type='text' value={commentText} onChange={handleInput} />
        <input type='submit' hidden/>
    </form>
  )
}

export default SingleComment