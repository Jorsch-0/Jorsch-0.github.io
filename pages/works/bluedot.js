import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="BlueDot">
    <Container>
      <Title>
        BlueDot Capital <Badge>2023</Badge>
      </Title>
      <P>
        Investment platform dedicated to raising funds that will flow directly
        to the areas of natural capital crucial for systemic change (including
        sustainable landscapes, food systems, nature-based enterprises, enabling
        tech, substitution tech such as modern food, awareness and behavioral
        change, decentralized and circular systems, and nature-based solutions
        financing).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.bluedotproject.com/about-us/" target="_blank">
            https://www.bluedotproject.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Styled Components, Material UI, NodeJS, GraphQl, Apollo, GCP
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bluedot.png" alt="BlueDot" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
