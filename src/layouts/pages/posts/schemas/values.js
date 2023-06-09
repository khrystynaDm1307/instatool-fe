export const ENGAGEMENT_VALUES = [
  {
    name: "Any",
    value: "any",
  },
  {
    name: ">1%",
    value: 0.01,
  },
  {
    name: ">2%",
    value: 0.02,
  },
  {
    name: ">3%",
    value: 0.03,
  },
  {
    name: ">4%",
    value: 0.04,
  },
  {
    name: ">5%",
    value: 0.05,
  },
  {
    name: ">6%",
    value: 0.06,
  },
  {
    name: ">7%",
    value: 0.07,
  },
  {
    name: ">8%",
    value: 0.08,
  },
  {
    name: ">9%",
    value: 0.09,
  },
  {
    name: ">10%",
    value: 0.1,
  },
];

export const POST_TYPE_VALUES = [
  {
    name: "Any",
    value: "any",
  },
  {
    name: "Carousel",
    value: "Sidecar",
  },
  {
    name: "Video",
    value: "Video",
  },
  {
    name: "Image",
    value: "image",
  },
];

export const LIKES_VALUES = [
  {
    name: "Any",
    value: "any",
  },
  {
    name: "> 1000",
    value: 1000,
  },
  {
    name: "> 5000",
    value: 5000,
  },
  {
    name: "> 10 000",
    value: 10000,
  },
  {
    name: "> 50 000",
    value: 50000,
  },
  {
    name: "> 100 000",
    value: 100000,
  },
];

export const PERIOD_VALUES = [
  {
    name: "Any",
    value: "any",
  },
  {
    name: "30 days",
    value: 30,
  },
  {
    name: "3 months",
    value: 30 * 3,
  },
  {
    name: "6 months",
    value: 30 * 6,
  },
];

export const SORT_POSTS_VALUES = [
  { label: "Likes (from low to high)", value: "post.likesCount-asc" },
  { label: "Likes (from high to low)", value: "post.likesCount-desc" },
  { label: "Published (from low to high)", value: "post.timestamp-asc" },
  { label: "Published (from high to low)", value: "post.timestamp-desc" },
  { label: "Engagement (from low to high)", value: "engagement-asc" },
  { label: "Engagement (from high to low)", value: "engagement-desc" },
  { label: "Engagement rate(from low to high)", value: "engagement_rate-asc" },
  { label: "Engagement rate (from high to low)", value: "engagement_rate-desc" },
];
