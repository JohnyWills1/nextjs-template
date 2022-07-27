// #region Global Imports
import Head from 'next/head';
import React from 'react';
// #endregion Global Imports

function Home(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Nextjs Template</title>
                <meta name="description" content="Johny Wills | Next.js Template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello World!</h1>
        </div>
    );
}

export default Home;
