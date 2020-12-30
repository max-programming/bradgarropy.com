import Link from "next/link"
import PropTypes from "prop-types"
import styled from "styled-components"

const PostMetaWrapper = styled.div`
    p {
        margin: 0rem;
        text-transform: lowercase;
    }

    a {
        color: rgba(0, 0, 0, 0.8);

        &:hover {
            color: ${({theme}) => theme.colors.primary};
        }
    }
`

const PostMeta = ({date, topic}) => {
    const {name} = topic

    return (
        <PostMetaWrapper>
            <p>
                {date} in{" "}
                <Link href={`/topic/${name}`}>
                    <a>#{name}</a>
                </Link>
            </p>
        </PostMetaWrapper>
    )
}

PostMeta.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.object.isRequired,
}

export default PostMeta
