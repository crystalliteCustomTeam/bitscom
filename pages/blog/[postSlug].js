import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import styles from '@/styles/InnerBlog.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import { getPostSlugs, getSinglePost } from "@/lib/posts";
import Date from "@/components/Date";
//
import arrow from '../../public/images/blogBanners/right-arrow.webp'
import logo from '../../public/images/icons/favicon.png'


export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);

    let featuredImageUrl = "https://wp23.cryscampus.com/BitsBlogs/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png";

    if (postData.featuredImage) {
        featuredImageUrl = `https://wp23.cryscampus.com/BitsBlogs/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`;
    }

    return {
        props: {
            postData,
            featuredImageUrl,
        }
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: false
    }
}

export default function Post({ postData, featuredImageUrl }) {

    return (
        <>
            <Head>
                <title key="title">{postData.title}</title>
                <meta name="description" content={postData.metaDesc} key="metadesc" />
                <meta property="og:title" content={postData.opengraphTitle} />
                <meta key="og-description" property="og:description" content={postData.metaDesc} />
                <meta property="og:url" content={postData.opengraphUrl} />
                <meta property="og:type" content={postData.opengraphType} />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={postData.opengraphSiteName} />
                <link rel="icon" href="/images/icons/favicon.png" />
            </Head>

            <section className={styles.innerBlog}>
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={8}>
                            <div className={styles.blogContent}>
                                <div className={`${styles.contentHeading}`}>
                                    <h1>{postData.title}</h1>
                                    <h6 className={`${styles.detailDate} mt-5`}>
                                        <Image src={logo} alt="BitsWits" width={25} height={25} />
                                        <span>By BitsWits Team in 2023</span>
                                    </h6>
                                    <h6 className="mt-3 mb-0 fw-bold font14">
                                        Published on  <Date dateString={postData.date} />
                                    </h6>
                                </div>
                                <div className="mt-4">
                                    <Image src={featuredImageUrl} alt="BitsWits" width={736} height={450} />
                                </div>
                                <div className={`${styles.contentBody} mt-4`}
                                    dangerouslySetInnerHTML={{ __html: postData.content }}>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div className={`${styles.cta} mt-5 mt-lg-0`}>
                                <div className={styles.ctaImg}>
                                    <Link href="/blog" className={`${styles.ctaBtn} mt-5`}>
                                        get custom web designs
                                    </Link>
                                </div>
                            </div>

                            <div className={`${styles.platForm} mt-5`}>
                                <h5 className={styles.subTitle}>
                                    Endorsements on different Platforms
                                </h5>
                                <h5 className={styles.title}>
                                    Awards And Recognition
                                </h5>
                                <p className={styles.para}>
                                    Thriving on accelerating the path to disruption and value creation in all directions has enabled
                                    us to receive acknowledgment and recognition by leading ratings and review platforms.
                                </p>
                                <Link href="/blog" className={`${styles.arrowBtn} mt-3`}>
                                    <span>View Reviews</span>
                                    <Image className='img-fluid' src={arrow} alt="bitswits" />
                                </Link>
                            </div>

                            <div className={`${styles.newsLetter} mt-5`}>
                                <h4>Signup for</h4>
                                <h5>Newsletter</h5>
                                <form className="mt-4">
                                    <div>
                                        <input type="text" name="name" id="name" placeholder="FULL NAME" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" />
                                    </div>
                                    <button type="submit" className={`${styles.arrowBtn} mt-4`}>
                                        <span>Submit Details</span>
                                        <Image className='img-fluid' src={arrow} alt="bitswits" />
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}