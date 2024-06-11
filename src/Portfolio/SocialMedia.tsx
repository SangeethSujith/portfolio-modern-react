import { useTheme } from "@emotion/react"
import {
  faGithub,
  faGitlab,
  faSteam,
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { Card, CardGroup } from "../components"

export const SocialMedia = () => {
  const { color } = useTheme()
  return (
    <CardGroup>
      <Card
        url={"https://github.com/SangeethSujith"}
        icon={faGithub}
        color={color.dark}
      >
        SangeethSujith
      </Card>
      <Card
        url={"https://gitlab.com/SangeethSujith"}
        icon={faGitlab}
        color={color.orange}
      >
        SangeethSujith
      </Card>
      <Card
        url={"https://www.facebook.com/sangeeth.sujith.7/"}
        icon={faFacebook}
        color={color.green}
      >
        Sangeeth Sujith
      </Card>
      <Card
        url={"https://www.instagram.com/the__john__wick/"}
        icon={faInstagram}
        color={color.red}
      >
        @the__john__wick
      </Card>
      <Card
        url={"https://wa.me/+918547104788"}
        icon={faWhatsapp}
        color={"#28D146"}
      >
        Sangeeth Sujith
      </Card>
      <Card
        url={"mailto:sangeethps2255@gmail.com"}
        icon={faEnvelope}
        color={color.yellow}
      >
        Email
      </Card>
      <Card
        url={"https://x.com/Offensivetech69"}
        icon={faTwitter}
        color={color.dark}
      >
        @Offensivetech69
      </Card>
      <Card
        url={"https://t.me/Homelander47"}
        icon={faTelegram}
        color={color.dark}
      >
        @Homelander47
      </Card>
      <Card
        url={"https://steamcommunity.com/profiles/76561199349790197"}
        icon={faSteam}
        color={color.blue}
      >
        JOHNWICKX
      </Card>
    </CardGroup>
  )
}
