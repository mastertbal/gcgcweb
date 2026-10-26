import MissingCogent from './MissingCogent'

const MissingLayer = () => {
    return (
        <section className='missing-layer'>
            <div className='missing-content'>
                <h3>THE MISSING LAYER</h3>
                <h1>A building code is a start.</h1>
                <h1>Geography goes further.</h1>
                <p>An address may identify a building. Real economic life happens in shops, farms, markets, delivery<br /> points, mobile workspaces and temporary locations. GCGC helps institutions connect these places<br /> to useful services—without requiring every place to fit a conventional street address.</p>
                <div className='know-how'>
                    <MissingCogent head='01 / DISCOVER' info1='Make places findable' info2='Resolve descriptions and location references into usable geographic context, including spaces beyond traditional buildings.' />
                    <MissingCogent head='02 / VERIFY' info1='Establish trusted presence' info2='Support authorized, evidence-based verification of places, premises and their associations with economic activity.' />
                    <MissingCogent head='03 / CONNECT' info1='Unlock economic value' info2='Enable more precise delivery, business visibility, risk assessment and location-aware services through interoperable interfaces.' />
                </div>
            </div>
        </section>
    )
}

export default MissingLayer