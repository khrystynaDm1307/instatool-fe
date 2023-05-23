import { Typography } from "@mui/material";
import InfluencerCell from "../../components/InfluencerCell";

const getRows = (post) => {
  const {
    owner,
    engagement,
    caption,
    type,
    likesCount,
    commentsCount,
    timestamp,
    locationName,
    hashtags,
    mentions,
    videoPlayCount,
    videoViewCount,
    id
  } = post;

  const { ownerFullName, ownerUsername, verified, email, followersCount } = owner;

  return {
    user: <InfluencerCell fullName={ownerFullName} username={ownerUsername} verified={verified} />,
    engagement,
    engagement_rate: ((engagement>0?engagement:0) / (followersCount || 1)).toFixed(2),
    post_pic:<img src={`https://storage.googleapis.com/instagram-global-data-images/media/${id}.jpg`} width={300}/>,
    caption: (
      <Typography maxWidth={350} textOverflow={"ellipsis"} fontSize={"0.8rem"}>
        {caption}
      </Typography>
    ),
    followersCount,
    type,
    likesCount,
    commentsCount,
    timestamp,
    locationName,
    hashtags: (
      <Typography maxWidth={350} textOverflow={"ellipsis"} fontSize="0.875rem">
        {hashtags.map((hash) => `#${hash.name} `)}{" "}
      </Typography>
    ),
    mentions: (
      <Typography maxWidth={350} textOverflow={"ellipsis"} fontSize="0.875rem">
        {mentions.map((hash) => `@${hash.username} `)}
      </Typography>
    ),
    videoPlayCount,
    videoViewCount,
    email,
  };
};

export default getRows;
