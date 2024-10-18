import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import UserProfile from '../../components/User/UserProfile';
import { UserProfileData } from '../../types/userProfileTypes';
import { useRecoilState } from 'recoil';
import { loggedInUserName } from '../../atoms/userName';
import { ApolloClient, InMemoryCache, useMutation, gql  } from '@apollo/client';
import {initializeApollo} from "../../lib/apollo-client";
import { PROFILE_QUERY, PROFILE_MUTATION } from "../../src/stories/auth/NextAuth";
import Cookies from 'cookies';

interface ProfilePageProps {
  initialLoggedInUsername: string | null;
  userProfileData: UserProfileData | null;
  isOwner: boolean;
  error?: {
    message: string;
  };
}

const mockProfiles: { [key: string]: UserProfileData } = {
  johndoe: {
    id: '1',
    username: 'johndoe',
    member_tier: 'pro',
    preferred_sport: 'snowboarding',
    skill_level: 'advanced',
    years_experience: 5,
    favorite_resort: 'Whistler Blackcomb',
    current_resort_location: 'Vancouver, Canada',
    visited_resorts: ['Whistler Blackcomb', 'Banff Sunshine'],
    preferred_terrain: 'off-piste',
    preferred_resort_type: 'hardcore',
    equipment_brand: 'Burton',
    owns_equipment: true,
    season_pass_type: 'Epic Pass',
    emergency_contact_name: 'Jane Doe',
    emergency_contact_phone: '123-456-7890',
    bio: 'Passionate snowboarder and adventure seeker.',
    profile_picture: '/images/johndoe.jpg',
    preferred_lessons: ['private', 'off-piste'],
    interested_in_competitions: true,
    achievements: ['Completed park course', 'Black diamond mastered'],
  },
  janedoe: {
    id: '2',
    username: 'janedoe',
    member_tier: 'free',
    preferred_sport: 'skiing',
    skill_level: 'intermediate',
    years_experience: 2,
    favorite_resort: 'Aspen Snowmass',
    current_resort_location: 'Aspen, USA',
    visited_resorts: ['Aspen Snowmass', 'Vail'],
    preferred_terrain: 'groomed',
    preferred_resort_type: 'family',
    equipment_brand: 'Rossignol',
    owns_equipment: false,
    season_pass_type: 'Ikon Pass',
    emergency_contact_name: 'John Doe',
    emergency_contact_phone: '987-654-3210',
    bio: 'Enjoying the slopes one day at a time.',
    profile_picture: 'https://lh3.googleusercontent.com/ogw/AF2bZyglPyEFm4b62iHIYJBimPhUp937NSGC1QnJCtQYkkWiDhw=s64-c-mo',
    preferred_lessons: ['group'],
    interested_in_competitions: false,
    achievements: ['Completed first blue run'],
  },
};

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (context) => {
  const { username } = context.params as { username: string };

  // Simulate fetching the profile data based on the username
  // const userProfileData = mockProfiles[username] || null;

  const token = context.req.cookies['shred_47h'];
  const client = new initializeApollo();

  try {
    const { data } = await client.mutate({
      mutation: PROFILE_MUTATION,
      variables: { username },
      context: {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      },
    });

    const userProfileData = data.userProfile.shredProfile || null;
    if (!userProfileData) {
      return { notFound: true };
    }
    console.log("check 1");
    console.log(userProfileData);
    console.log(initialLoggedInUsername);
    const initialLoggedInUsername = context.req.cookies.loggedInUser || null;

    console.log("check 2");
    console.log(initialLoggedInUsername);
    return {
      props: {
        userProfileData,
        initialLoggedInUsername,
      },
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    console.log(error);
    return {
      props: {
        error: {
          message: 'Failed to fetch user profile.',
        },
      },
    };
  }
};

const ProfilePage: React.FC<ProfilePageProps> = ({
  userProfileData,
  initialLoggedInUsername,
  error,
}) => {
  const [loggedInUsername, setLoggedInUsername] = useRecoilState(loggedInUserName);

  useEffect(() => {
    // Update Recoil state with the initial value from SSR
    if (initialLoggedInUsername && initialLoggedInUsername !== loggedInUsername) {
      setLoggedInUsername(initialLoggedInUsername);
    }
  }, [initialLoggedInUsername, loggedInUsername, setLoggedInUsername]);

  const isOwner = loggedInUsername === userProfileData?.username;

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!userProfileData) {
    return <p>User profile data not found.</p>;
  }

  return <UserProfile userProfileData={userProfileData} isOwner={isOwner} />;
};

export default ProfilePage;
