import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Carousel, CarouselItem } from "../../components"

const Text = styled.div`
  ${({ theme: { color } }) => css`
    color: ${color.dark};
    > h3 {
      font-weight: 500;
    }
    font-weight: 400;
    max-width: 300px;
  `}
`
const links = [
  { href: "https://uiverse.io/", text: "uiverse.io" },
  { href: "https://daisyui.com/", text: "daisyUI" },
  { href: "https://ui.shadcn.com/", text: "shadcn/ui" },
  { href: "https://ui.aceternity.com/", text: "Aceternity UI" },
  { href: "https://getbootstrap.com/", text: "Bootstrap" },
  { href: "https://picocss.com/", text: "Pico CSS" },
]

export const Playground = () => {
  return (
    <Carousel>
      <CarouselItem headline="Personal Info About Me">
        <Text>
          <h3>
            As a React and React Native enthusiast. I love creating awesome,
            user-friendly apps with React’s component-based magic. I’m also a
            big fan of Tailwind CSS for styling and various UI frameworks that
            speed up development. Always learning, I keep up with the latest
            React features and trends. When I’m not coding, I enjoy exploring
            sipping good coffee. Let’s build something amazing!
          </h3>
        </Text>
      </CarouselItem>
      <CarouselItem headline="Websites i like to visit when building new UI">
        <Text>
          <h3>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </h3>
        </Text>
      </CarouselItem>
    </Carousel>
  )
}
