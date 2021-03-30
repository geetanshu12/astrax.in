import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
