import Heading from './Heading';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Post = ({ post }: any) => {
    return (
        <div>
          {post.title}
          {documentToReactComponents(post.content.json)}
        </div>
    )
}

export default Post;
