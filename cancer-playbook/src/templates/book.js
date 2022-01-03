import React from "react"
import Layout from "../components/layout"

import * as styles from "../styles/book.module.scss"

const BookLayout = ({ children }) => {
  return (
    <Layout>
      <div className={styles.bookContainer}>{children}</div>
    </Layout>
  )
}

export default BookLayout
