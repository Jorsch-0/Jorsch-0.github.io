import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Symphony">
    <Container>
      <Title>
        Symphony <Badge>2024</Badge>
      </Title>
      <P>
        Put your fanbase growth on autopilot. SymphonyOS is the easiest way to
        grow your fanbase and build your business. Smart automated marketing,
        all on-the-go.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.symphonyos.co/" target="_blank">
            https://www.symphonyos.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Tailwind, NodeJS, REST, AWS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/symphony_01.png" alt="Symphony" />
      <WorkImage src="/images/works/symphony_02.png" alt="Symphony" />
      <WorkImage src="/images/works/symphony_03.png" alt="Symphony" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
