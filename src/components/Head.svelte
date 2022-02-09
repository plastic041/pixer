<script>
  import { page } from "$app/stores";
  const text = $page.url.pathname.slice(1);
</script>

<svelte:head>
  <meta name="title" content="Pixer - Paint and share minimal pixel art" />
  <meta
    name="description"
    content="Pixer is a simple pixel art editor. You can easily paint and share some minimal pixel art."
  />
  <meta name="copyright" content="snubi" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pixer-phi.vercel.app/" />
  <meta
    property="og:title"
    content="Pixer - Paint and share minimal pixel art"
  />
  <meta
    property="og:description"
    content="Pixer is a simple pixel art editor. You can easily paint and share some minimal pixel art."
  />
  <meta
    property="og:image"
    content={`https://og-image-theta-ruddy.vercel.app/${text}.jpeg?size=16`}
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://pixer-phi.vercel.app/" />
  <meta
    property="twitter:title"
    content="Pixer - Paint and share minimal pixel art"
  />
  <meta
    property="twitter:description"
    content="Pixer is a simple pixel art editor. You can easily paint and share some minimal pixel art."
  />
  <meta
    property="twitter:image"
    content={`https://og-image-theta-ruddy.vercel.app/${text}.jpeg?size=16`}
  />
</svelte:head>
