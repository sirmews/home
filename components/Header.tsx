import content from '../content';
import RainbowText from './RainbowText';

const Header = () => {

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
                </div>
            </div>
        </header>
    )
};

export default Header;
