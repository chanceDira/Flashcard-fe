import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import styles from "./Index.module.css";
import { Icon } from "@iconify/react";

const Home: NextPage = () => {
  const GetCards = gql`
    query {
      feed {
        id
        category
        task
        plan
        createdBy {
          name
          email
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GetCards);

  return (
    <div className="container">
      {/* <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img
              src="img_avatar.png"
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className={styles.flipCardBack}>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div> */}

      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : data.feed.length > 0 ? (
        data.feed.map((card: any, index: any) => {
          return (
            <div className="border-l-4 border-black-700 ">
              <div key={index} className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    {/* <img
                  src="img_avatar.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                /> */}
                   
                    <p>({card["category"]})</p>
                    <p>{card["task"]}</p>
                  </div>
                  <div className={styles.flipCardBack}>
                    {/* <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p> */}
                    <p>{card["plan"]}</p>
                  </div>
                </div>
              </div>
              <div className="flex">  <button className={styles.btnUpdate}>Update</button>
              <button className={styles.btnUpdate}>Delete</button>
              <button className={styles.btnUpdate}>Mark as Done</button>
              {/* <Icon icon="ic:round-update" className={styles.pending}/> */}
              <Icon icon="el:ok-sign" className={styles.pending}/>
              </div>
            
            </div>
          );
        })
      ) : (
        <h2>No saved cards found</h2>
      )}
      <style jsx>{`
        .container {
          margin-top: 2rem;
          width: 60%;
          margin: 0px auto;
          padding: 2rem 0px;
        }
        .container a {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Home;
