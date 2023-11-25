import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Developer from '/public/developer-dark.svg'
import Image from 'next/image'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="JorCodeCraft's homepage" />
        <meta name="author" content="Jorge Leon" />
        <meta name="author" content="Jorsch" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
        <meta property="og:site_name" content="JorCodeCraft" />
        <meta name="og:title" content="JorCodeCraft" />
        <meta property="og:type" content="website" />
        <title>JorCodeCraft - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Image
          src={Developer}
          alt=""
          style={{
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
