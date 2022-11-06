import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>boxer's boilerplate</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1, viewport-fit=cover"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
