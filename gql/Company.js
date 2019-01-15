import gql from "graphql-tag";

export const COMPANY = gql`
query{
    company{
          id
          account_number_prefix
          account_number_start
          account_number_last
          max_users
  
          name
          address1
          address2
          city
          state
          postal
          postal4
          country
  
          phone
          fax
          email
          website
  
          domain
          domain_tld
  
          twitter
          facebook
          youtube
          google
          instagram
          snapchat
          linkedin
    }
}`;




