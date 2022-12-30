import { gql } from "@apollo/client";

export const navQuery = gql`
  query {
    indexPage {
      data {
        attributes {
          Name
          Email
          Profile {
            data {
              attributes {
                url
                name
              }
            }
          }
          SocialLinks {
            Title
            Link
            Icon {
              data {
                attributes {
                  url
                }
              }
            }
            Color
            id
          }
          Music {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;


export const indexPageQuery = gql`
  query {
    indexPage {
      data {
        attributes {
          Title
          Description
        }
      }
    }
  }
`;