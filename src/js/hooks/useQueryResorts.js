import { gql } from '@apollo/client';

export const QUERY_RESORTS = gql`
query Resorts($first: Int! $page: Int!){
  resorts(
    first: $first
    page: $page
    orderBy: {
      type_name: "total_score",
      direction: "desc"
    }
  ) {
    data {
      id
      title
      url_segment
      url
      affiliate_url
      description
      location {
        id
        city
        country {
          id
          code
          name
        }
        state {
          id
          code
          name
        }
      }
      total_score {
        value
      }
      highlights {
        id
        title
        value
      }
      lowlights {
        id
        title
        value
      }
      resort_images {
        id
        name
        alt
        sort_order
        image {
          path
          content_type
        }
      }
      comments {
        id
        comment
        author
      }
    }
    paginatorInfo {
      currentPage
        lastPage
    }
  }
}
`;

export default QUERY_RESORTS;
