import Container from "../../ui/Container/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section className=" relative overflow-hidden bg-gradient-to-b from-[var(--color-background)] via-whiteto-[var(--color-primary-light)] " >
      {/* Decorative Background */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl " />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[var(--color-secondary)] opacity-10 blur-3xl"/>
          <Container>
          <div className="grid min-h-[75vh] lg:min-h-[calc(100vh-80px)] items-center gap-16 py-16 lg:grid-cols-2 lg:py-24" >
            {/* Left Content */}
            <div>
              <HeroContent />
              <HeroStats />
           </div>

           {/* Right Image */}
           <HeroImage />
        </div>
      </Container>
    </section>
  );
}

export default Hero;