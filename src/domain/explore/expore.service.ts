import axios from "axios";

export const getAllVideos = async () => {
  try {
    const response = await axios.get("https://api.vhx.tv/videos", {
      headers: {
        Authorization: "Basic UFdNeXZqNnZ1NEx1S1J6YTl5Z2R4WHJodHNNNEplZVc6",
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "__cf_bm=1aoQlb7D8.yeqtddfAUhqpGapdPTJx9kqFx1ZxAC7uo-1685436672-0-AWA5fZs5SCwPS+U2VNjoB415h9iU0Vi0g7u8kyEobCBi0SiZf4Bs/XUSRAJUqWtd2Myv030eB9++IIQ6MNQ3zNQ=",
      },
    });
    return response.data._embedded.videos.filter(
      (i: any) =>
        i.status === "complete" && i.additional_images?.aspect_ratio_16_14
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};
