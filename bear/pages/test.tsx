import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const OpenAIArticle: NextPage = () => {
    const [response, setResponse] = useState<string>('');

    useEffect(() => {
        const fetchResponse = async () => {
            const res = await fetch('/api/hello');
            const data = await res.json();
            setResponse(data.message);
        };

        fetchResponse();
    }, []);

    return (
        <div>
            <Head>
                <title>Super cool article</title>
            </Head>
            <main>
                <h1>Wow you are poor and you want a house????????</h1>
                <p>
                    Too bad you don't have an accountant :(
                </p>
                <pre>
                    <code>
                        {response}
                    </code>
                </pre>
            </main>
            <style jsx>{`
                main {
                    padding: 2rem;
                    font-family: Arial, sans-serif;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                p {
                    margin-bottom: 1rem;
                }
                pre {
                    background: #f4f4f4;
                    padding: 1rem;
                    overflow-x: auto;
                    border-radius: 5px;
                }
                code {
                    font-family: 'Courier New', Courier, monospace;
                }
            `}</style>
        </div>
    );
};

export default OpenAIArticle;
