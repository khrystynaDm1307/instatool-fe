import { Grid } from "@mui/material";
import FormField from "components/Form/FormField";
import form from "../../schemas/form";

function InfluencerForm({ formData }) {
  const {
    followers,
    verified,
    bio,
    keywords,
    mentions,
    language,
    hashtags,
    lastPost,
    engagement,
    overallEngagement,
    postType,
    contacts,
    username,
  } = form.formField;
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField {...{ ...username, formData }} />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...followers, formData }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...verified, formData }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...bio, formData }} />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...keywords, formData }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...contacts, formData }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...language, formData }} />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={3}>
          <FormField {...{ ...overallEngagement, formData }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormField {...{ ...engagement, formData }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormField {...{ ...lastPost, formData }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormField {...{ ...postType, formData }} />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6}>
          <FormField {...{ ...mentions, formData }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField {...{ ...hashtags, formData }} />
        </Grid>
      </Grid>
    </>
  );
}

export default InfluencerForm;
