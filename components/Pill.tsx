import { useAppContext } from '../utils/state';

const Pill = (props) => {
  const { darkMode } = useAppContext();

  return (<span className={`${darkMode ? 'bg-blue-900 bg-opacity-25 border-blue-700 text-white' : 'bg-blue-500 border-blue-600 text-red-100'} inline-block border-solid border-2 font-medium py-1 px-3 rounded-full mb-2 mr-2 text-sm`}>{props.toolchain}</span>)
}

export default Pill;
