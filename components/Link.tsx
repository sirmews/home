type LinkProp = {
  title: string,
  link: string
};

const Link = ({title, link}: LinkProp) => (
  <a className="bg-white text-gray-900 px-2 py-1" href={link}>{title}</a>
)

export default Link;
