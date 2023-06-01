import { Grid } from "@mui/material";
import FormField from "components/Form/FormField";
import form from "../../schemas/form";
import FilterComponent from "../Autocomplete";

function PostsForm({
  formData,
  setSelectedCountries,
  setSelectedValues,
  selectedCountries,
  selectedValues,
}) {
  const {
    likes,
    keywords,
    mentions,
    period,
    hashtags,
    engagement,
    postType,
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
        <Grid item xs={12} sm={6}>
          <FormField {...{ ...likes, formData }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField {...{ ...keywords, formData }} />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}></Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...engagement, formData }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField {...{ ...period, formData }} />
        </Grid>
        <Grid item xs={12} sm={4}>
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
      <Grid item lg={12} mt={3}>
        <FilterComponent
          setSelectedCountries={setSelectedCountries}
          setSelectedValues={setSelectedValues}
          selectedCountries={selectedCountries}
          selectedValues={selectedValues}
        />
      </Grid>
    </>
  );
}

export default PostsForm;
