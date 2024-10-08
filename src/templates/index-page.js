import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient" style={{paddingBottom: "0px"}}>
        <div className="container">
          <div className="section section-bg" style={{paddingTop: "0px"}}>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                
                  <div className="content">
                    <div className="tile">
                      <h1 className="title" className="has-text-weight-semibold is-size-2">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <hr></hr>
                    {/*
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>*/}
                    <div className="columns" id="visit">
                      <div className="column is-6">
                        <h3 className="has-text-weight-semibold is-size-2">
                          Visit Us
                        </h3>
                        <p><strong>Address:</strong><br/>11735 Glacier Hwy, Juneau, AK 99801</p>
                        <p><strong>Phone:</strong><br/>(907) 789-7342</p>
                        <p><strong>Hours:</strong><br/>
                          Sunday-Saturday 6am-8pm<br/>
                          Liquor 8am-8pm<br/>
                          Deli 6am-730pm<br/>
                          </p>
                      </div>
                      <div className="column is-6">
                        <iframe style={{borderRadius: "25px", border: "2px solid #363636"}} title="location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.425971267845!2d-134.6470273477049!3d58.386217181247325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54011df160e66eb5%3A0x897de458f5971ab1!2sDe%20Hart&#39;s%20Auke%20Bay%20Store!5e0!3m2!1sen!2sus!4v1661959932165!5m2!1sen!2sus" width="100%" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="content">
                    <div className="columns" id="pizza">
                      <div className="column is-6">
                        <img className="custom-image" src="https://heroic-crisp-fe6d89.netlify.app/img/deharts_pizza_cropped.jpeg"></img>
                      </div>
                      <div className="column is-6">
                        
                        <h3 className="has-text-weight-semibold is-size-2">
                          Auke Bay Pizza Co.
                        </h3>
                        <p>Established in 2022, Auke Bay Pizza Co. brings fresh, quality pizza to the area.  Located within DeHart’s, try one of our delicious specialty pizzas or build your own.  We offer hot sandwiches made to order as well.  </p>
                        <p><strong>Available from 10:00 AM to 8:00 PM</strong></p>
                        <a href="tel:(907)-789-7342">Call to order at 907-500-7437</a>
                      </div>
                      </div>
                    </div>
                    <hr></hr>
                  <div className="content" style={{paddingBottom: "40px"}}>  
                    <div className="columns">
                      <div className="column is-6">
                        <h3 className="has-text-weight-semibold is-size-2">
                        Chicken, burritos, jojos, and more await!
                        </h3>
                        <p> Made fresh daily, stop in and grab a quick bite at any time of the day.</p>
                        <p><strong>Available from 10:00 AM to 8:00 PM</strong></p>
                      </div>
                      <div className="column is-6">
                      <img className="custom-image" src="https://heroic-crisp-fe6d89.netlify.app/img/hot_case_menu.png"></img>
                      </div>
                      <div id="hot-bar"></div>
                    </div>
                    
                 {/* <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>*/}
                  {/*div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
