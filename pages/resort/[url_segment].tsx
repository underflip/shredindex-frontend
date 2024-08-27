import React from "react";
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { initializeApollo } from '../../lib/apollo-client'; // Adjust the import path as needed
import Resort from '../../components/ResortSingle/Resort';

// GraphQL query to fetch all resort URL segments
const QUERY_ALL_RESORTS = gql`
  query AllResorts {
    resorts {
      url_segment
    }
  }
`;

// GraphQL query to fetch a specific resort by URL segment
const QUERY_RESORT = gql`
  query ResortByURLSegment($url_segment: String!) {
    resortByUrlSegment(url_segment: $url_segment) {
      id
      title
      url_segment
      description
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
      total_score {
        title
        value
      }
      location {
        id
        latitude
        longitude
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
      ratingScores {
        id
        title
        value
        name
        type {
          type_group {
            id
            title
          }
        }
      }
      numerics {
        id
        title
        value
        name
        type {
          unit
          max_value
        }
      }
      generics {
        id
        title
        value
        name
      }
      comments {
        id
        author
        comment
      }
    }
  }
`;

// GetStaticPaths function to generate all possible paths
export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query({ query: QUERY_ALL_RESORTS });

    const paths = data.resorts.map((resort: { url_segment: string }) => ({
      params: { url_segment: resort.url_segment },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error fetching resort paths:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

// GetStaticProps function to fetch data for each resort
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query({
      query: QUERY_RESORT,
      variables: { url_segment: params?.url_segment },
    });

    if (!data || !data.resortByUrlSegment) {
      return { notFound: true };
    }

    return {
      props: {
        resortData: data.resortByUrlSegment,
        initialApolloState: apolloClient.cache.extract(),
      },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching resort data:', error);
    return {
      props: {
        error: {
          message: error.message,
        },
        resortData: null,
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  }
};

// The main page component
const ResortPage = ({ resortData, error }) => {
  const router = useRouter();

  // Show loading state if the page is being generated
  if (router.isFallback) {
    return <Resort loading={true} resortData={null} />;
  }

  return <Resort resortData={resortData} error={error} />;
};

export default ResortPage;
