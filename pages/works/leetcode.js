import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Leetcode Clone">
    <Container>
      <Title>
        Leetcode Clone <Badge>2024</Badge>
      </Title>
      <P>Fullstack Leetcode Clone.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://leetcode-clone-jorsch.vercel.app/"
            target="_blank"
          >
            https://leetcode-clone-jorsch.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Tailwind, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link
            href="https://github.com/Jorsch-0/leetcode-clone"
            target="_blank"
          >
            https://github.com/Jorsch-0/leetcode-clone{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/leetcode.png" alt="Leetcode Clone" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
