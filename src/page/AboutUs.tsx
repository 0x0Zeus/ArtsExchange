import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 font-inter sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[850px] space-y-4 sm:space-y-5 pb-4 sm:pb-6 md:pb-20 pt-[100px] sm:pt-[120px] md:pt-[150px]">
          <p className="text-base sm:text-lg md:text-lg">
            Welcome to Arts Exchange, a premier destination for discovering,
            celebrating, and connecting with the world of renowned artists,
            timeless masterpieces, and iconic sculptures.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Our platform is dedicated to preserving the legacy of fine art while
            embracing the evolving role of the global art community in shaping
            the cultural landscape of tomorrow.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            At Arts Exchange, we believe art is more than just visual
            expression—it is a language of history, emotion, identity, and
            innovation.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            From the brushstrokes of Renaissance masters to the bold expressions
            of contemporary sculptors, our mission is to bring these works to
            life for collectors, scholars, and admirers across the globe.
          </p>
          <h1 className="pt-4 sm:pt-5 text-xl sm:text-2xl font-bold">Who We Are</h1>
          <p className="text-base sm:text-lg md:text-lg">
            Arts Exchange was founded by a collective of curators, historians,
            and art enthusiasts who share a passion for classical beauty,
            artistic heritage, and creative excellence.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Our team works closely with galleries, institutions, private
            collectors, and artists' estates to offer a curated selection of
            paintings, sculptures, and artist profiles that span centuries and
            continents.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Our platform is designed not only to showcase famous artworks but
            also to foster deeper appreciation through rich context, insightful
            commentary, and community engagement.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            We're here to connect art lovers with the stories behind the pieces,
            the lives of the creators, and the cultural movements they inspired.
          </p>
          <h1 className="pt-4 sm:pt-5 text-xl sm:text-2xl font-bold">What We Offer</h1>
          <p className="text-base sm:text-lg md:text-lg">
            <b>Iconic Artworks: </b>Explore a digital gallery of famous
            paintings and sculptures from legendary artists such as Van Gogh,
            Michelangelo, Frida Kahlo, and Rodin.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>Artist Spotlights: </b>Learn about the lives, inspirations, and
            techniques of history's most celebrated artists.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>Sculpture Showcase: </b>Discover the evolution of sculpture—from
            ancient marble to modern installations—through high-resolution
            images and expert analysis.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            <b>Educational Resources: </b>Access in-depth articles, virtual
            tours, and exclusive interviews that enhance your understanding of
            art history and theory.
          </p>
          <h1 className="pt-4 sm:pt-5 text-xl sm:text-2xl font-bold">
            A Community of Collectors and Creators
          </h1>
          <p className="text-base sm:text-lg md:text-lg">
            Arts Exchange is more than an archive—it's a living network of art
            lovers, collectors, educators, and emerging talent.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Our community-driven approach encourages dialogue, discovery, and
            collaboration.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Whether you're a seasoned collector, an aspiring artist, or simply
            passionate about the arts, you'll find a welcoming space to connect,
            learn, and grow.
          </p>
          <h1 className="pt-4 sm:pt-5 text-xl sm:text-2xl font-bold">
            The Future of Art and Artists
          </h1>
          <p className="text-base sm:text-lg md:text-lg">
            We are committed to preserving the past while investing in the
            future. As technology reshapes how we experience art, Arts Exchange
            embraces innovation to support the next generation of artists.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Through virtual exhibitions, online residencies, and community
            events, we are creating new pathways for artistic visibility and
            sustainability. Art is timeless, and its impact is limitless.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            At Arts Exchange, we honor the greats of the past while championing
            the voices of the future.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Join us as we build a global platform where history, creativity, and
            culture converge.
          </p>
          <p className="text-base sm:text-lg md:text-lg font-bold italic">
            Experience the legacy. Empower the future. Welcome to Arts Exchange.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
