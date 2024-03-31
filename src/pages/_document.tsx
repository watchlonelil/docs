import PlausibleProvider from "next-plausible";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <PlausibleProvider
          domain="docs.watch.lonelil.com"
          customDomain="https://wink.lonelil.com"
          selfHosted
          trackOutboundLinks
          trackFileDownloads
          taggedEvents
        >
          <Main />
        </PlausibleProvider>
        <NextScript />
      </body>
    </Html>
  );
}
