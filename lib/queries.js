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

export const workTypeQuery = gql`
  query {
    types {
      data {
        attributes {
          Title
          Order
          Icon {
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

export const allWorksQuery = gql`
  query {
    works(pagination: { limit: 200 }, sort: "Date:DESC") {
      data {
        attributes {
          Date
          Description
          Gallery {
            data {
              attributes {
                url
                name
              }
            }
          }
          Icon {
            data {
              attributes {
                url
                name
              }
            }
          }
          Tags {
            Tag
            id
          }
          Title
          types {
            data {
              attributes {
                Title
              }
            }
          }
          updatedAt
        }
        id
      }
    }
  }
`;