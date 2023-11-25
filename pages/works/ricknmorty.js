import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rick and Morty">
    <Container>
      <Title>
        Rick and Morty <Badge>2022</Badge>
      </Title>
      <P>Rick n Morty World. Search for characters based on location.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jorsch-rick-n-morty.netlify.app/">
            https://jorsch-rick-n-morty.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ricknmorty_01.png" alt="Rick and Morty" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
