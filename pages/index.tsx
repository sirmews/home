import Head from 'next/head'
import Image from 'next/image'

import Intro from '../components/intro';
import Header from '../components/header';
import Resume from '../components/resume';
import Footer from '../components/footer';

import { useAppContext } from '../utils/state';
import { getAllPosts } from '../utils/api';

export default function Home({ allPosts }: any) {

  const { darkMode, setDarkMode } = useAppContext();

  const morePosts = allPosts.slice(1)

  console.log(allPosts);

  return (    
    <div className={`App font-sans ${darkMode ? 'bg-gray-900 text-gray-400' : 'mode-light bg-gray-200 text-gray-900'}`}>
      <Intro isdarkmode={darkMode} toggledarkmode={(e: any) => {setDarkMode(e)}} />
      <Resume />
      <Footer />
      morePosts.
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}