import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbRickAndMorty from '../public/images/works/ricknmorty_eyecatch.png'
import thumbFamilyGuy from '../public/images/works/familyguy_eyecatch.png'
import thumbSlateboarding from '../public/images/works/slateboarding_eyecatch.png'
import thumbBlueDot from '../public/images/works/bluedot_eyecatch.png'
import thumbSymphony from '../public/images/works/symphony_eyecatch.png'
import thumbXmasChat from '../public/images/works/xmas-chat_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="symphony"
            title="SymphonyOS"
            thumbnail={thumbSymphony}
          >
            SAAS platform that helps music artists grow their fanbase and build
            their business.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="bluedot"
            title="BlueDot Capital"
            thumbnail={thumbBlueDot}
          >
            Fintech platform for managing investments.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="slateboarding"
            title="Slateboarding"
            thumbnail={thumbSlateboarding}
          >
            Simplify your onboarding process to save time, reduce complexity,
            and minimize risks in your business relationships.
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="xmaschat"
            title="Xmas Chat"
            thumbnail={thumbXmasChat}
          >
            Xmas Real Time Chat App.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="familyguy"
            title="Family Guy Wiki"
            thumbnail={thumbFamilyGuy}
          >
            Test your knowledge with a quiz!
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="ricknmorty"
            title="Rick and Morty"
            thumbnail={thumbRickAndMorty}
          >
            Rick n Morty World. Search for characters based on location.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
