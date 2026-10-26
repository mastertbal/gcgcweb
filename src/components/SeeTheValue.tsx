const SeeTheValue = () => {
    return (
        <section className="stv">
            <div className="stv-content">
                <h3 className="stv-head">SEE THE VALUE</h3>
                <h1 className="stv-desc">One geography.Different needs.</h1>
                <p className="stv-full-desc">Select a scenario to see how granular location information can improve a real-world workflow. This<br /> is a simulated demonstration—not a live lookup or verification service.</p>
                <div className="caa-section">
                    <form className="form">
                        <div className="choose">
                            <label htmlFor="application">Choose an application</label>
                            <select name="" id="application">
                                <option value="Find a trader in an open-air market">Find a trader in an open-air market</option>
                                <option value="Deliver to an exact business unit">Deliver to an exact business unit</option>
                                <option value="Verify a specific insured premises">Verify a specific insured premises</option>
                                <option value="Reference a non-building farm location">Reference a non-building farm location</option>
                            </select>
                        </div>
                        <div className="location">
                            <label className="nll" htmlFor="irrigation">Natural-language location description</label>
                            <input id="irrigation" type="text" placeholder="Irrigation pump near the eastern field boundary" />
                        </div>
                        <button className="simulate">Simulate Resolution</button>
                        <p className="sample">Sample scenerios contain fictional data. No location is transmitted or stored by this page</p>
                    </form>
                    <div className="form-result">
                        <span className="simulated">SIMULATED · FIND A TRADER IN AN OPEN-AIR MARKET</span>
                        <h3 className="market">Market trader located</h3>
                        <div className="grid">
                            <div className="child grid-one">
                                <span className="name">Place type</span>
                                <span className="value">Open-air trading point</span>
                            </div>
                            <div className="child grid-two">
                                <span className="name">Spatial reference</span>
                                <span className="value">DEMO-MKT-01</span>
                            </div>
                            <div className="child grid-three">
                                <span className="name">Useful outcome</span>
                                <span className="value">Reachable trading location</span>
                            </div>
                            <div className="child grid-four">
                                <span className="name">Next workflow</span>
                                <span className="value">Customer discovery</span>
                            </div>
                        </div>
                        <p className="example">Example output demonstrates the concept only. It is not a real GALOCO code, verification, ownership record or government approval.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeeTheValue