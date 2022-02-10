<script>
  import { page } from "$app/stores";
  const text = $page.url.pathname.slice(1);

  const title = "도트링 - 간단하게 픽셀아트 만들고 공유하기";
  const description =
    "도트링은 간단하게 픽셀아트를 만들고 공유하는 사이트입니다.";
  const image = `https://og-image-theta-ruddy.vercel.app/${text}.jpeg?size=16`;
</script>

<svelte:head>
  <title>{title}</title>

  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="copyright" content="snubi" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pixer-phi.vercel.app/" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://pixer-phi.vercel.app/" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</svelte:head>
