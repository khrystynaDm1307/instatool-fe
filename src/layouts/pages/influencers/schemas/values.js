import { LANGUAGES } from "assets/feeds/languages";

export const FOLLOWES_MIN_VALUES = [
  { name: "From", value: "any" },
  { name: "1,000", value: 1000 },
  { name: "3,000", value: 3000 },
  { name: "5,000", value: 5000 },
  { name: "10,000", value: 10000 },
  { name: "15,000", value: 15000 },
  { name: "25,000", value: 25000 },
  { name: "35,000", value: 35000 },
  { name: "50,000", value: 50000 },
  { name: "75,000", value: 75000 },
  { name: "100,000", value: 100000 },
  { name: "125,000", value: 125000 },
  { name: "175,000", value: 175000 },
  { name: "200,000", value: 200000 },
  { name: "250,000", value: 250000 },
  { name: "300,000", value: 300000 },
  { name: "350,000", value: 350000 },
  { name: "500,000", value: 500000 },
  { name: "1,000,000", value: 1000000 },
  { name: "2,000,000", value: 2000000 },
];

export const FOLLOWES_MAX_VALUES = [
  { name: "To", value: "any" },
  { name: "3,000", value: 3000 },
  { name: "5,000", value: 5000 },
  { name: "10,000", value: 10000 },
  { name: "15,000", value: 15000 },
  { name: "25,000", value: 25000 },
  { name: "35,000", value: 35000 },
  { name: "50,000", value: 50000 },
  { name: "75,000", value: 75000 },
  { name: "100,000", value: 100000 },
  { name: "125,000", value: 125000 },
  { name: "175,000", value: 175000 },
  { name: "200,000", value: 200000 },
  { name: "250,000", value: 250000 },
  { name: "300,000", value: 300000 },
  { name: "350,000", value: 350000 },
  { name: "500,000", value: 500000 },
  { name: "1,000,000", value: 1000000 },
  { name: "2,000,000", value: 2000000 },
  { name: "3,000,000+", value: null },
];

export const VERIFIED_VALUES = [
  {
    name: "Any",
    value: "any",
  },
  {
    name: "Verified",
    value: true,
  },
  {
    name: "Not verified",
    value: false,
  },
];

export const LANGUAGE_VALUES = LANGUAGES;

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

export const OVERALL_ENGAGEMENT_VALUES = [
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

export const LAST_POST_VALUES = [
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
    value: "Image",
  },
];

export const CONTACTS_VALUES = [
  {
    name: "Any",
    value: "any",
  },
  {
    name: "Has email",
    value: "email",
  },
];

export const SORT_VALUES = [
  { label: "Followers (from low to high)", value: "postOwner.followersCount-asc" },
  { label: "Followers (from high to low)", value: "postOwner.followersCount-desc" },
  { label: "Engagement rate (from low to high)", value: "engagement_rate-asc" },
  { label: "Engagement rate (from high to low)", value: "engagement_rate-desc" },
];
