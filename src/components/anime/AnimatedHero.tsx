import { useNavigate } from "react-router-dom";
import DepthText from "../DepthText/DepthText";
import Galaxy from "../Galaxy/Galaxy";
import MagicRings from "../MagicRings/MagicRings";
import SpecularButton from "../SpecularButton/SpecularButton";
import { NAV_LINKS } from "../../lib/nav";
import "./AnimatedHero.css";

export function AnimatedHero() {
  const navigate = useNavigate();

  return (
    <section className="home-stage">
      <div className="home-stage__fx home-stage__fx--galaxy">
        <Galaxy
          starSpeed={0.1}
          density={2.0}
          hueShift={130}
          speed={0.3}
          glowIntensity={0.15}
          saturation={0}
          mouseRepulsion={true}
          repulsionStrength={0}
          twinkleIntensity={0.5}
          rotationSpeed={0.0}
          transparent
        />
      </div>

      <div className="home-stage__fx home-stage__fx--rings">
        <MagicRings
          color="#b5aebb"
          colorTwo="#959595"
          ringCount={6}
          speed={0.8}
          attenuation={11.5}
          lineThickness={2}
          baseRadius={0.36}
          radiusStep={0.12}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.7}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      <div className="home-stage__content">
        <div className="home-stage__title">
          <div className="pointer-events-none mix-blend-screen">
            <DepthText
              text="Nikhil Epili"
              layers={31}
              depth={2.0}
              faceColor="#f8fafc"
              depthColor="#363636"
              tilt={7.5}
              pointerTracking
              smoothing={0.3}
              perspective={1500}
              autoOrbit
              orbitSpeed={0.05}
              fontSize="clamp(4rem, 14vmin, 7rem)"
              fontWeight={900}
              shadow={false}
            />
          </div>
        </div>

        <div className="home-stage__nav">
          {NAV_LINKS.map((link) => (
            <SpecularButton
              key={link.to}
              size="sm"
              radius={60}
              tint="#ffffff"
              tintOpacity={0}
              blur={0}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={2.4}
              shineSize={10}
              shineFade={40}
              thickness={5}
              speed={0.3}
              followMouse
              proximity={250}
              autoAnimate={false}
              className="home-nav-button"
              onClick={() => navigate(link.to)}
            >
              {link.label}
            </SpecularButton>
          ))}
        </div>
      </div>
    </section>
  );
}
