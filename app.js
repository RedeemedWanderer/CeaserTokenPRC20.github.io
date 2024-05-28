const { useState } = React;

function App() {
    const [details1Visible, setDetails1Visible] = useState(false);
    const [details2Visible, setDetails2Visible] = useState(false);

    const toggleDetails1 = () => setDetails1Visible(!details1Visible);
    const toggleDetails2 = () => setDetails2Visible(!details2Visible);

    return (
        <div>
            <header>
                CeaserToken (CSR) - Immutable PRC20 with Redistribution and Burn Mechanisms
            </header>
            <main>
                <section className="intro">
                    <p>Welcome to <span className="highlight">CeaserToken (CSR)</span>, a revolutionary cryptocurrency crafted for the PulseChain network. CeaserToken is not just a digital asset; it's a financial ecosystem where every transaction benefits the entire community. With innovative tokenomics and a transparent fee structure, CeaserToken is poised for sustainable growth and rewarding experiences for its holders.</p>
                    <button className="button" onClick={toggleDetails1}>Join the Community</button>
                    {details1Visible && <div className="details">Stay tuned ! As The official contract address for Ceaser will be publicly announced upon depolyment to PulseChain! </div>}
                </section>
                <section className="features">
                    <h2>Key Features</h2>
                    <p>CeaserToken offers a range of features designed to enhance value and usability:</p>
                    <ul>
                        <li><span className="badge">Name:</span> CeaserToken</li>
                        <li><span className="badge">Symbol:</span> CSR</li>
                        <li><span className="badge">Decimals:</span> 9</li>
                        <li><span className="badge">Total Supply:</span> 110,000,000 CSR</li>
                    </ul>
                    <p>Each of these features is designed to maximize the token's utility and potential for growth, providing a robust foundation for a thriving community.</p>
                </section>
                <section className="fees">
                    <h2>Transaction Fees</h2>
                    <p>CeaserToken incorporates a unique fee structure to support its ecosystem:</p>
                    <ul>
                        <li><span className="highlight">Redistribution Fee (1.69%):</span> A portion of every transaction is automatically redistributed to all existing token holders, encouraging long-term holding and participation.</li>
                        <li><span className="highlight">Burn Fee (0.31%):</span> Another portion of every transaction is permanently removed from circulation, reducing the total supply over time and increasing the scarcity and potential value of the remaining tokens.</li>
                    </ul>
                    <div className="tax-theme">Supporting Growth and Rewarding Participation</div>
                </section>
                <section className="ownership">
                    <h2>Ownership and Transparency</h2>
                    <p>Upon deployment to the PulseChain network, CeaserToken will renounce ownership, ensuring a fully decentralized and community-driven future. This commitment guarantees that no single entity can alter the contract or its core functions, fostering trust and security among all token holders.</p>
                    <p>Transparency is at the heart of CeaserToken, with all transactions and contract details available for public review, ensuring a secure and trustworthy ecosystem.</p>
                </section>
                <section className="contract">
                    <h2>Smart Contract Details</h2>
                    <p>The CeaserToken smart contract leverages OpenZeppelin's secure and battle-tested libraries to ensure robust functionality. Key components include:</p>
                    <ul>
                        <li>Automatic Fee Application: Fees are calculated and applied during each transaction, with the net amount transferred to the recipient and the fees handled transparently.</li>
                        <li>Ownership Management: Initially set to the contract deployer, ownership will be renounced post-deployment, securing the contract's immutable and decentralized nature.</li>
                    </ul>
                </section>
                <section className="why full-width">
                    <h2>Why Choose CeaserToken?</h2>
                    <p>CeaserToken is designed to create a thriving, engaged community. By combining redistribution and deflationary mechanisms, CSR ensures that every transaction supports the ecosystem and rewards its participants. Our commitment to decentralization and transparency sets CeaserToken apart, making it a reliable and forward-thinking choice for cryptocurrency enthusiasts.</p>
                    <p>Designed for PulseChain pre bull market, CeaserToken is set to capitalize on the upcoming growth and excitement, providing unparalleled opportunities for its holders.</p>
                    <p>Join us in building a sustainable, community-focused financial future with CeaserToken!</p>
                    <button className="button" onClick={toggleDetails2}>Learn More</button>
                    {details2Visible && <div className="details">Ceaser Token is inspired by Julius Ceaser's pioneering tax system, which brought stability and growth to Rome's economy. As a digital Tax coin CeaserToken intends to replicate his success!</div>}
                </section>
            </main>
            <footer>
                &copy; 2024 CeaserToken. All rights reserved.
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
