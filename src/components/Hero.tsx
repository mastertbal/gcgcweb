import Anchor from "./Anchor"
import Info from "./Info"
import hero_img from '../assets/hero_img.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className='hero-content'>
                <div className='left'>
                    <h3>Computational geography • Built for Africa</h3>
                    <h1 className="one">Every place has</h1>
                    <h1 className="two">potential.</h1>
                    <h1 className="three">Make it visible.</h1>
                    <p>We turn physical locations—even places without conventional addresses—into discoverable, verifiable and useful connections for people, businesses and institutions.</p>
                    <div className="links">
                        <Anchor text="Explore the demonstration" />
                        <a href="#" className="how">How it works</a>
                    </div>
                    <div className="proof">
                        <Info text="Beyond Building" />
                        <Info text="Designed for constrained environment" />
                        <Info text="Privacy aware by design" />
                    </div>
                </div>
                <div className='right'>
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero