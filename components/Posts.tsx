import Heading from './Heading';
import RainbowText from './RainbowText';
import Post from './Post';

const Posts = ({ posts }: any) => {
    return (
        <div>
            <Heading>
              <RainbowText text="Blog Posts"/>
            </Heading>
            {
              posts.map((post: any, key: number) => (
                <Post key={key} post={post}>something</Post>
              ))
            }
        </div>
    )
}

export default Posts;
