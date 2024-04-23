import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Xmas Chat">
    <Container>
      <Title>
        Xmas Chat <Badge>2024</Badge>
      </Title>
      <P>Xmas Real Time Chat App.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://xmas-chat.onrender.com/" target="_blank">
            https://xmas-chat.onrender.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Tailwind, DaisyUI, NodeJS, Socket.io, MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Jorsch-0/xmas-chat" target="_blank">
            https://github.com/Jorsch-0/xmas-chat <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/xmas-chat.png" alt="Xmas Chat" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
