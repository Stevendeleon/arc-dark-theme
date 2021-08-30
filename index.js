import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <script
            type="text/javascript"
            src="https://kit.fontawesome.com/459e337eda.js"
            defer
          ></script>
        </Head>
        <body className="text-gray-900 bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
