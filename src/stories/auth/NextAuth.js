import { gql } from '@apollo/client';




export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
      login(data: {
        email: $email,
        password: $password
      }) {
        user {
          first_name
          last_name
          email
          username
        }
        token
      }
    }
  `;

export const PROFILE_MUTATION = gql`
    mutation UserProfile($username: String!){
      userProfile(data : {username: $username}) {
        shredProfile{
          user{
            username
            first_name
            last_name
          }
          member_tier
          preferred_sport
          skill_level
          years_experience
          favorite_resort
          current_resort_location
          visited_resorts
          preferred_terrain
          preferred_resort_type
          equipment_brand
          owns_equipment
          season_pass_type
          emergency_contact_name
          emergency_contact_phone
          bio
          profile_picture
          preferred_lessons
          interested_in_competitions
          achievements
        }
      }
    }

  `;

export const PROFILE_QUERY = gql`
    query userProfile($username: String!) {
      userProfile(username: $username) {
        username
        member_tier
        preferred_sport
        skill_level
        years_experience
        favorite_resort
        current_resort_location
        visited_resorts
        preferred_terrain
        preferred_resort_type
        equipment_brand
        owns_equipment
        season_pass_type
        emergency_contact_name
        emergency_contact_phone
        bio
        profile_picture
        preferred_lessons
        interested_in_competitions
        achievements
      }
    } 
  `;