import React from 'react'
import Link from 'next/link'
const Form = ({
  type,
  post,
  setPost,
  submitting,
  handlesubmit,
}) => {
  return (
    <section className='flex-start flex-col w-full max-w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type}</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nemo quidem tempore atque esse laborum consequatur. Ipsa officiis nobis cumque nam nesciunt quasi maiores beatae id nostrum maxime! Quia, unde. Voluptates necessitatibus incidunt facere! Rem voluptatem dolores magni culpa est saepe, ad sed illum vero molestiae ipsum mollitia molestias sapiente?
      </p>
      <form
        onSubmit={handlesubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmporphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'> Your Ai Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            placeholder='Enter your Prompt Here'
            className='form_textarea'
          >

          </textarea>
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'> Tag</span>
          <span className='font-normal'>(#product,#webdevelopment,#idea)</span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            placeholder='Enter your Tag Here'
            className='form_textarea'
          >

          </input >
        </label>
        <div className='mb-5 gap-4 flex-end mx-3'>
          <Link className={'text-sm text-gray-500'} href="/">
            Cancel
          </Link>
          <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
            {submitting? `${type}...`: type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
