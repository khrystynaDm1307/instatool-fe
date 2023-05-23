import Typography from "@mui/material/Typography";
import InfluencerCell from "../../components/InfluencerCell";

const getRows = (owner) => {
  const {
    profilePicUrl,
    ownerFullName,
    ownerUsername,
    verified,
    followersCount,
    total_engagement,
    overall_engagement,
    biography,
    email,
    url
  } = owner;

  return {
    user: (
      <InfluencerCell
        image={profilePicUrl}
        fullName={ownerFullName}
        username={ownerUsername}
        verified={verified}
        url={url}
      />
    ),
    biography: (
      <Typography maxWidth={350} textOverflow={"ellipsis"} fontSize={"0.8rem"}>
        {biography}
      </Typography>
    ),
    followersCount,
    total_engagement,
    overall_engagement: overall_engagement.toFixed(2),
    email,
  };
};

export default getRows;
