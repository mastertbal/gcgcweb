import Anchor from './Anchor'

const Header = () => {
    return (
        <header>
            <div className='header-content'>
                <div className='left'>
                    <p>G<sup>2</sup></p>
                    <div>
                        <h2>GCGC</h2>
                        <h3>GRANDVIEW COMPUTATIONAL GEOGRAPHY</h3>
                    </div>
                </div>
                <ul className='right'>
                    <li>What we do</li>
                    <li>See the value</li>
                    <li>Applications</li>
                    <Anchor text='Explore a pilot' />
                </ul>
            </div>
        </header>
    )
}

export default Header