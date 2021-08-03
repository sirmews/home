import { getAllPosts } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import { useAppContext } from '../../utils/state';

export default function Posts({ allPosts }) {
  

  return (
    <>
      <div className='resume lg:w-2/3 py-6 px-6 lg:px-12 '>
        {
        allPosts && allPosts.map((post, index) => (
          <div key={index}>
            <section id="employers" className="lh-copy mw7 pl-6">
                <h2 className="text-3xl">Work Experience</h2>
                <p className="mb-4">The nine-to-fives that often ended after five.</p>
                <div className="mt-12">
                    {post.title}
                </div>
            </section>
          </div>
        ))
        }
      </div>
    </>
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
