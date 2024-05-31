import Document, { Html, Head, Main, NextScript } from 'next/document';
import styles from '*.module.css'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet" href="/styles/Home.module.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
