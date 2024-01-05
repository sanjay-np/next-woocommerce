import { fetchQuery } from "@/utils/fetchQuery"

export async function getHomePageContent(){
    const query={
        query: `{
            acfOptionsGlobalSettings {
                acfHomePage {
                    banner {
                        bannerContent
                        bannerImage {
                            mediaItemUrl
                        }
                    }
                    categories {
                        image {
                            mediaItemUrl
                        }
                        id
                        name
                        slug
                    }
                }
            }
        }`,
    }
    const response  = await fetchQuery(query)
    return  response?.data?.acfOptionsGlobalSettings?.acfHomePage
}
