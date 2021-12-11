import client from '../../utils/contentful';
import Posts from '../../components/Posts';

export default function PostsIndex({ posts }) {
  return (
    <div className="container m-auto">
      <article className="w-full sm:w-2/3 md:w-1/2">
        <Posts posts={posts} />
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const response = await client(`
    {
      postsCollection (order: [sys_id_DESC]) {
        items {
            sys {
              id
            }
            title
            content {
                json
                links {
                  entries {
                    inline {
                      sys {
                        id
                      }
                    }
                  }
                }
            }
        }
      }
    }`
  );

  const { postsCollection } = response;

  return {
    props: {
      posts: postsCollection.items,
    }
  }

}
