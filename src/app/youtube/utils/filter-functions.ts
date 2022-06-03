import { ResponseVidInt } from "../models/yt-models";
const sortFuncs = {
  date: (a: ResponseVidInt, b: ResponseVidInt): number => {
    const dOne = new Date(a.snippet.publishedAt).getTime();
    const dTwo = new Date(b.snippet.publishedAt).getTime();
    return dOne > dTwo ? 1 : dOne < dTwo ? -1 : 0;
  },
  views: (a: ResponseVidInt, b: ResponseVidInt): number => {
    const v1 = a.statistics.viewCount;
    const v2 = b.statistics.viewCount;
    return v1 > v2 ? 1 : v1 < v2 ? -1 : 0;
  },
  phrase: (a: ResponseVidInt, b: ResponseVidInt): number => {
    return 0;
  },
};
export default sortFuncs;
