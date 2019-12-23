import Head from 'next/head';

const HeadContent = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/styles.css" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link href="/static/fontawesome/css/all.css" rel="stylesheet" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154478998-1"></script>
    <script dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-154478998-1');`
    }}></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <title>iShop | Home of Quality Items</title>
  </Head>
);

export default HeadContent;
