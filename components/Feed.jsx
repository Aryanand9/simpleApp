'use client'
import { useState, useEffect } from "react"
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-14 prompt_layout">
      {
        data.map((post)=>(
          <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
    )

}

const Feed = () => {
  const [post,setPost] = useState([])
  const [searchText, setsearchText] = useState('')
  const fetchposts = async () => {
    const response = await fetch('/api/prompt')
    const data = await response.json()
    setPost(data) 
  }
  useEffect(() => {
  
    fetchposts()
  }, [])
  const handleChange = (e) => {
  }
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for Something"
          value={searchText}
          onChange={handleChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={post}
        handleTagClick={() => { }}

      />
    </section>
  )
}

export default Feed
