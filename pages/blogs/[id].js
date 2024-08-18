import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query

  // Ensure `id` is available before searching for the post
  const post = blogdata.find((post) => post.id === parseInt(id))

  // Handle the case when `post` is undefined
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat.' />
              <p className='desc-p'> Nulla iaculis convallis fermentum...</p>
              <p className='desc-p'>Suspendisse eget elit mauris...</p>
              <p className='desc-p'>Quisque congue ante in consequat auctor...</p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='Integer a justo vitae arcu fermentum...' />
              <p className='desc-p'> Phasellus nec tempor neque...</p>
              <p className='desc-p'>Morbi finibus velit erat...</p>
              <p className='desc-p'>Suspendisse eget elit mauris...</p>
              <p className='desc-p'>Quisque congue ante in consequat auctor...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost