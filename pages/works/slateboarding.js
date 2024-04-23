import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Slateboarding">
    <Container>
      <Title>
        Slateboarding <Badge>2023</Badge>
      </Title>
      <P>
        Slateboarding takes the pain out of onboarding and help you get the
        paperwork out of the way. Many businesses currently benefit from it as
        they onboard clients, vendors, or staff.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.slateboarding.com/" target="_blank">
            https://www.slateboarding.com/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/slateboarding.png" alt="Slateboarding" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/0kF3FxJ0qrQ?si=6tdGEkN4lnxLDxfZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
