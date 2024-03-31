import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
} from "@neato/guider/client";

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: "page" }}>
      <Hero>
        <Hero.Title>watch.lonelil.com</Hero.Title>
        <Hero.Subtitle>
          watch.lonelil.com is your one-stop destination for free movies, anime,
          TV shows, and Live TV.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/extension/introduction">
            View Extension Introduction
          </Button>
          <Button to="https://watch.lonelil.com" type="secondary">
            Visit Site
          </Button>
        </Hero.Actions>
      </Hero>
      <CardGrid>
        <Card icon="lucide:clapperboard" title="Movies">
          Watch a wide range of movies from various genres for free.
        </Card>
        <Card icon="lucide:tv" title="TV Shows">
          Enjoy your favorite TV shows without any subscription.
        </Card>
        <Card icon="lucide:cat" title="Anime">
          Dive into the world of anime with our extensive collection.
        </Card>
        <Card icon="lucide:antenna" title="Live TV">
          Stream live TV channels without any interruptions.
        </Card>
        <Card icon="ic:twotone-catching-pokemon" title="Pokémon">
          Catch all the Pokémon episodes and movies in one place.
        </Card>
      </CardGrid>
    </GuiderLayout>
  );
}
