import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* 
        Placeholder for future analytics.
        Example Google Analytics:
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      */}
    </>
  );
}
