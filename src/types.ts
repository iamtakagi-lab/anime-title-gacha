/* Media */
interface Facebook {
  og_image_url: string;
}

interface Twitter {
  mini_avatar_url: string;
  normal_avatar_url: string;
  bigger_avatar_url: string;
  original_avatar_url: string;
  image_url: string;
}

interface Images {
  recommended_url: string;
  facebook: Facebook;
  twitter: Twitter;
}

/* Works */
type WorkId = number;

interface Work {
  id: number;
  title: string;
  title_kana: string;
  title_en: string;
  media: string;
  media_text: string;
  released_on: string;
  released_on_about: string;
  official_site_url: string;
  wikipedia_url: string;
  twitter_username: string;
  twitter_hashtag: string;
  syobocal_tid: string;
  mal_anime_id: string;
  images: Images;
  episodes_count: number;
  watchers_count: number;
  reviews_count: number;
  no_episodes: boolean;
  season_name: string;
  season_name_text: string;
}

interface WorksGetResponse {
  works: Work[];
  total_count: number;
  next_page: number;
  prev_page: number;
}

export {
    Facebook,
    Twitter,
    Images,
    WorkId,
    Work,
    WorksGetResponse
}
