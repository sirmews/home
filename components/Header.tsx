import content from '../content';
import RainbowText from './RainbowText';

const Header = () => {

    return (
        <header id="header" className="container mx-auto">
            <div className="py-8">
                <div className="font-bold">
                    <div className="">
                        <h1 className="text-4xl mb-4">{content.title}</h1>
                        <h2 className="text-xl leading-3">{content.tagline}</h2>
                    </div>
                    <div>
                        <RainbowText text="" className="" />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
