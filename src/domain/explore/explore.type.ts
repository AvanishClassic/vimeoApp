export interface VideoResponse {
  thumbnail: any;
  additional_images: any;
  _links: any;
  id: number;
  description: string;
  short_description: string;
  title: string;
  created_at: number;
  name: string;
  is_free: boolean;
  image: Image;
  video_page: any;
  duration: any;
}

interface Image {
  bannerImage: string;
  source: string;
  small: string;
  medium: string;
}

export interface ExploreVideoInitialState {
  loading: boolean;
  paidVideos: Array<VideoResponse>;
  observationalComedy: Array<VideoResponse>;
  allVideos: Array<VideoResponse>;
  physicalPropsBasedComedy: Array<VideoResponse>;
  freeVideos: Array<VideoResponse>;
  politicalStoryTelling: Array<VideoResponse>;
  newReleases: Array<VideoResponse>;
  viratHits: Array<VideoResponse>;
  alternativeAbsurdistComedy: Array<VideoResponse>;
}
