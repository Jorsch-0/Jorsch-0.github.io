import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Discord Clone">
    <Container>
      <Title>
        Discord Clone <Badge>2024</Badge>
      </Title>
      <P>Fullstack Discord Clone.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://discord-clone-fullstack.onrender.com/"
            target="_blank"
          >
            https://discord-clone-fullstack.onrender.com/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Tailwind, Socket.io, Prisma, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/Jorsch-0/discord-clone-fullstack"
            target="_blank"
          >
            https://github.com/Jorsch-0/discord-clone-fullstack{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/discord.png" alt="Discord clone" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
