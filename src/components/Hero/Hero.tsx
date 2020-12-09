import {FC} from "react"
import Img, {FluidObject} from "gatsby-image"
import styled from "styled-components"
import {graphql, useStaticQuery} from "gatsby"

const HeroWrapper = styled.div`
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    align-items: center;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

type HeroImageProps = {
    fluid: FluidObject
}

const HeroImage = styled(Img)<HeroImageProps>`
    width: 100%;
    max-width: 25rem;
`

const HeroText = styled.div`
    display: grid;
    font-size: 1.75rem;
`

const Hero: FC = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "bg-shadow.png"}) {
                id
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <HeroWrapper>
            <HeroImage fluid={data.file.childImageSharp.fluid} />

            <HeroText>
                <span>i use code</span>
                <span>to create things</span>
                <span>that benefit others</span>
            </HeroText>
        </HeroWrapper>
    )
}

export default Hero
