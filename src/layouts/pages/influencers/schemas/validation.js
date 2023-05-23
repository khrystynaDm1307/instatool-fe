import * as Yup from "yup";

const getInfluencersSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username must contain at least 2 characters")
    .max(50, "Username mustn't contain more than 50 characters")
    .required("Username is required"),
  //   followers_min: Yup.number().optional(),
  //   followers_max: Yup.number().optional(),

  //   bio: Yup.string().optional(),
  //   keywords: Yup.string().optional(),
  //   mentions: Yup.array().of(Yup.string()).optional(),
  //   language: Yup.string().optional(),
  //   hashtags: Yup.array().of(Yup.string()).optional(),
  //   lastPost: Yup.number().optional(),
  //   engagement: Yup.number().optional(),
  //   overallEngagement: Yup.number().optional(),
  //   postType: Yup.string().optional(),
  //   contacts: Yup.string().optional(),
});

export default getInfluencersSchema;
