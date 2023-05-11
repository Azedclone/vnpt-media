export interface Place {
  id?: string;
  headLine?: string;
  contentType?: string;
  avgRatingPoint?: number;
  totalRatingTime?: number;
  totalComment?: number;
  totalEmotion?: TotalEmotion;
  createdDate?: number;
  lastModifiedDate?: number;
  title?: string;
  description?: string;
  slug?: string;
  thumbnail?: Thumbnail;
  medias?: {
    order?: number;
    medias?: Media[];
  }[];
  restaurantName?: string;
  restaurantCountryCode?: string;
  restaurantCountry?: string;
  restaurantAddress?: string;
  restaurantType?: number;
  placeLevel?: PlaceLevel;
  status?: number;
  isFavored?: boolean;
  chef?: Chef;
  submitDate?: number;
  publishDate?: number;
  chefFeature?: string;
  homeFeature?: string;
  spotLightFeature?: string;
  userId?: string;
  preview?: boolean;
}

interface TotalEmotion {
  totalLove?: number;
  totalLike?: number;
}

interface Thumbnail {
  id?: string;
  originalFilename?: string;
  filename?: string;
  subThumbnail?: SubThumbnail;
  contentType?: string;
  url?: string;
  uploadDate?: number;
  cdnOrigin?: string;
  cdnLarge?: string;
  cdnMedium?: string;
  cdnSmall?: string;
  typeOfMedia?: number;
  guid?: string;
  width?: number;
  height?: number;
  credit?: string;
}

interface SubThumbnail {
  id?: string;
  originalFilename?: string;
  filename?: string;
  contentType?: string;
  url?: string;
  cdnOrigin?: string;
  typeOfMedia?: number;
  guid?: string;
  width?: number;
  height?: number;
}

interface Media {
  id?: string;
  originalFilename?: string;
  filename?: string;
  contentType?: string;
  url?: string;
  uploadDate?: number;
  cdnOrigin?: string;
  cdnSmall?: string;
  typeOfMedia?: string;
  guid?: string;
  width?: number;
  height?: number;
  credit?: string;
}

interface PlaceLevel {
  placeId?: string;
  country?: string;
  countryCode?: string;
  administrativeAreaLevel2?: string;
  administrativeAreaLevel1?: string;
  latitude?: number;
  longitude?: number;
  address?: number;
}

export interface Chef {
  userId?: string;
  code?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  avatar?: Avatar;
  live?: boolean;
  socialEmail?: boolean;
  isFirstTimeLogin?: boolean;
  contentType?: string;
  status?: number;
  description?: string;
  totalSubscribers?: number;
  subscribed?: boolean;
  selected?: boolean;
  tag?: string[];
  lastActionDate?: number;
  isTopChef?: boolean;
  isFeatureChef?: boolean;
  isMostPopularChef?: boolean;
}

interface Avatar {
  id?: string;
  originalFilename?: string;
  filename?: string;
  contentType?: string;
  url?: string;
  uploadDate?: number;
  cdnOrigin?: string;
  cdnMedium?: string;
  cdnSmall?: string;
  typeOfMedia?: number;
  guid?: string;
  width?: number;
  height?: number;
}
