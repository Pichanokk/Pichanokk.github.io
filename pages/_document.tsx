import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang=''>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@300&family=Marcellus&display=swap" rel="stylesheet">
          </link>
            </Head>
            <body className="bg-fixed bg-gradient-to-r from-purple-300 to-blue-300 dark:from-gray-500 dark:to-dark-700 dark:text-white">
              <Main />
              <NextScript />
            </body>
          </Html>
          );
  }
}
export default MyDocument;
