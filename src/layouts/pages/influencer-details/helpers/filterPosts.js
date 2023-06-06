import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
import { LANGUAGE_VALUES } from "layouts/pages/influencers/schemas/values";

export const filterPosts = (array, filters) => {
  const {
    likes,
    lang,
    mentions,
    keywords,
    hashtags,
    locations,
    postType,
    engagement,
    day,
    month,
    year,
  } = filters;

  if (postType.length) {
    array = array.filter((post) => postType.includes(post.type));
  }

  if (engagement && engagement !== "Any") {
    const rate = +engagement.split("")[1] / 100;
    array = array.filter((post) => {
      return post.eng_rate > rate;
    });
  }

  if (likes && likes !== "Any") {
    const likesValue = likes.split(">")[1];
    array = array.filter((post) => post.likesCount >= +likesValue);
  }

  if (lang.length) {
    const iso_arr = lang.map(
      (l) => LANGUAGE_VALUES.find((language) => language.name === l).value
    );
    array = array.filter((post) => iso_arr.includes(post.language));
  }

  if (mentions.length) {
    array = array.filter((post) => {
      return (
        post.mentions.some((mention) => mentions.includes(mention.id)) ||
        post.tagged_accounts.some((mention) =>
          mentions.includes(mention.username)
        )
      );
    });
  }

  if (hashtags.length) {
    array = array.filter((post) => {
      return post.hashtags.some((hashtag) => hashtags.includes(hashtag.id));
    });
  }

  if (locations.length) {
    array = array.filter((post) => locations.includes(post.locationName));
  }

  if (keywords) {
    array = array.filter((post) => post.caption.includes(keywords));
  }

  if (day || month || year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = 0;
    const currentDay = 1;

    const selectedYear = +year || currentYear;
    const selectedMonth = month
      ? selectData.birthDate.indexOf(month)
      : currentMonth;
    const selectedDay = +day || currentDay;

    const date = new Date(selectedYear, selectedMonth, selectedDay);

    array = array.filter((post) => {
      return new Date(post.timestamp) > date;
    });
  }

  return array;
};
