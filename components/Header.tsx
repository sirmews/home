import DarkModeToggle from "react-dark-mode-toggle";
import { useAppContext } from '../utils/state';
import content from '../content';
import RainbowText from './RainbowText';

const Header = () => {
    const { darkMode, setDarkMode } = useAppContext();

    return (
        <header id="header" className="">
            <div className="container m-auto">
                <div className="flex justify-between py-6">
                    <div className="">
                        <div className="">
                            <div className="text-4xl animated-text font-extrabold">
                                <p className="mb-4"><span className="text-xl">( * ^ *) <span className="wave">ノシ</span></span></p>
                                <RainbowText text={content.title} />
                                <div className="text-xl py-2">
                                    <RainbowText text={content.tagline} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6">
                        <DarkModeToggle
                            onChange={(e) => setDarkMode(e)}
                            checked={darkMode}
                            size={50}
                            speed={1.3}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
