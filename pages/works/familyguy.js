import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Family Guy">
    <Container>
      <Title>
        Family Guy Wiki <Badge>2023</Badge>
      </Title>
      <P>Characters wiki. Test your knowledge with a quiz!</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://familyguy-nextjs.vercel.app/">
            https://familyguy-nextjs.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Tailwind</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/familyguy_01.png" alt="Family Guy" />
        <WorkImage src="/images/works/familyguy_03.png" alt="Family Guy" />
      </SimpleGrid>
      <WorkImage src="/images/works/familyguy_02.png" alt="Family Guy" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
