import RandomBackground from './RandomBackground';
type LinkProp = {
  title: string,
  link: string
};

const Link = ({title, link}: LinkProp) => (
  <a className="border-b-2 py-1" href={link}>{title}</a>
)

export default Link;
