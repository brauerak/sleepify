import { useEffect, useLayoutEffect, useState } from "react";

const quotes = [
    '"The journey of a thousand miles begins with a single step"',
    '"Travel is the only thing you buy that makes you richer"',
    '"It’s better to see something once than to hear about it a thousand times…”"',
    '"I haven’t been everywhere but IT’s on my list"'
    
]

const styles = {
    color: '#fff',
    top: '50px',
    right: 0,
    left: 0,
    textAlign: 'center',
    fontSize: '1.5rem',
    fontStyle: 'italic',
    fontWeight: 'lighter'
    

}

function Quotes() {
    const [quote, setQuote] = useState('Loading...');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ///...
        setLoading(true);
    }, []);

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, [loading])

    return (
        <p style={styles}>
            {quote}
        </p>
    )
}

export default Quotes;