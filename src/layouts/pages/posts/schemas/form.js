import { ENGAGEMENT_VALUES, LIKES_VALUES, PERIOD_VALUES, POST_TYPE_VALUES } from "./values";

const form = {
  formId: "posts-form",
  formField: {
    period: {
      type: "select",
      label: "Period",
      name: "period",
      placeholder: "Any",
      children: PERIOD_VALUES,
    },
    mentions: {
      type: "multiple",
      label: "Mentions",
      name: "mentions",
      placeholder: "Any",
    },
    hashtags: {
      type: "multiple",
      label: "Hashtags",
      name: "hashtags",
      placeholder: "Any",
    },
    keywords: {
      type: "text",
      label: "Keywords",
      name: "keywords",
      placeholder: "Any",
    },
    engagement: {
      name: "engagement",
      label: "Engagement",
      type: "select",
      placeholder: "Any",
      children: ENGAGEMENT_VALUES,
    },
    likes: {
      name: "likes",
      label: "Likes",
      type: "select",
      placeholder: "Any",
      children: LIKES_VALUES,
    },
    postType: {
      name: "postType",
      label: "Post type",
      type: "select",
      placeholder: "Any",
      children: POST_TYPE_VALUES,
    },
  },
};

export default form;
