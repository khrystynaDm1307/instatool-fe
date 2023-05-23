import { LANGUAGES } from "assets/feeds/languages";
import {
  CONTACTS_VALUES,
  ENGAGEMENT_VALUES,
  FOLLOWES_MAX_VALUES,
  FOLLOWES_MIN_VALUES,
  LAST_POST_VALUES,
  OVERALL_ENGAGEMENT_VALUES,
  POST_TYPE_VALUES,
  VERIFIED_VALUES,
} from "./values";

const form = {
  formId: "filters-form",
  formField: {
    username: {
      type: "text",
      label: "Username",
      name: "username",
      placeholder: "Typer here ...",
    },
    keywords: {
      type: "text",
      label: "Keywords",
      name: "keywords",
      placeholder: "Any",
    },
    mentions: {
      type: "multiple",
      label: "Mentions",
      name: "mentions",
      placeholder: "Any",
    },
    verified: {
      name: "verified",
      label: "Verified",
      placeholder: "Any",
      type: "select",
      children: VERIFIED_VALUES,
    },
    bio: {
      type: "text",
      label: "Bio",
      name: "bio",
      placeholder: "Any",
    },
    hashtags: {
      type: "multiple",
      label: "Hashtags",
      name: "hashtags",
      placeholder: "Any",
    },
    followers: {
      type: "diapason",
      label: "Followers",
      subItems: [
        {
          name: "followers_min",
          type: "select",
          placeholder: "From",
          children: FOLLOWES_MIN_VALUES,
        },
        {
          name: "followers_max",
          type: "select",
          placeholder: "To",
          children: FOLLOWES_MAX_VALUES,
        },
      ],
    },
    language: {
      name: "language",
      label: "Language",
      type: "select",
      placeholder: "Any",
      children: LANGUAGES,
    },
    engagement: {
      name: "engagement",
      label: "Engagement",
      type: "select",
      placeholder: "Any",
      children: ENGAGEMENT_VALUES,
    },
    overallEngagement: {
      name: "overallEngagement",
      label: "Overall engagement",
      placeholder: "Any",
      type: "select",
      children: OVERALL_ENGAGEMENT_VALUES,
    },
    lastPost: {
      name: "lastPost",
      label: "Last post",
      type: "select",
      placeholder: "Any",
      children: LAST_POST_VALUES,
    },
    postType: {
      name: "postType",
      label: "Post type",
      type: "select",
      placeholder: "Any",
      children: POST_TYPE_VALUES,
    },
    contacts: {
      name: "contacts",
      label: "Contacts",
      type: "select",
      placeholder: "Any",
      children: CONTACTS_VALUES,
    },
  },
};

export default form;
