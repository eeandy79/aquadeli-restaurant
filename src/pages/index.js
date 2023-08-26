import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const links = [
  {
    text: "海家小品-西灣河店",
    url: "https://aquadeli-swh.povalab.com",
    addr: "香港筲箕灣道128號地下",
    tel: "2967-9480",
  },
  {
    text: "海家小品-北角店",
    url: "https://aquadeli.povalab.com",
    addr: "香港英皇道431號地下",
    tel: "3702-1099",
  },
  {
    text: "海家酸菜魚-北角店",
    url: "https://aquafishpot.ecorder.net",
    addr: "香港英皇道483-497號東寶大廈地下",
    tel: "2117-3312",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/aquadeli_logo_small.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />

      <h1>
        <b>海家。網上落單系統</b>
      </h1>

    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <div className={styles.listItemLink}>
          <a
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          </div>
          <p className={styles.listItemDescription}>
            <FaMapMarkerAlt className={styles.listItemAddr} size="12"/>
            {link.addr}
          </p>
          <p className={styles.listItemDescription}>
            <FaPhoneAlt className={styles.listItemTel} size="11"/>
            {link.tel}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="海家網上落單系統" />

export default IndexPage
