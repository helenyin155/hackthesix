"use client";
import Layout from "../../components/Layout.js";

import { useEffect, useState } from 'react';

const Goal = ({ params }: { params: { id: string } }) => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      setId(params.id);
    }
  }, [params]);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>

    <div className="goal-page">
      <header className="goal-header">
        <div className="headerContainer">
          <div className="circle"></div>
          <div className="title">Saving for a House</div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
      </header>
      <section className="bookmarks">
         <div className="bookmarksContainer">
        <div className="bookmarkContent">
            <span className="bookmarkIcon">🔖</span>
            <span>My Bookmarks</span>
        </div>
        <span className="arrowIcon">➡️</span>
        </div>
      </section>
      <section className="topics">
        <div className="topic">
          <h3>Topic One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
          <div className="articles">
            <div className="article">How to Be Rich <span>5 minute read</span></div>
            <div className="article">How to Be Rich <span>5 minute read</span></div>
            <div className="articleSelected">How to Be Rich <span>5 minute read</span></div>
            <div className="article">How to Be Rich <span>5 minute read</span></div>
          </div>
        </div>
        <div className="topic">
          <h3>Topic Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
          <div className="articles">
            <div className="article">How to Be Rich <span>5 minute read</span></div>
            <div className="article">How to Be Rich <span>5 minute read</span></div>
            <div className="article">How to Be Rich <span>5 minute read</span></div>
            <div className="article">How to Be Rich <span>5 minute read</span></div>
          </div>
        </div>
      </section>
    </div>
    <style jsx>{`
    
        .bookmarksContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-top: 1px solid #A9A9A9;
            border-bottom: 1px solid #A9A9A9;
            margin: 50px 0;
        }
        
        .bookmarkContent {
            display: flex;
            align-items: center;
        }
        
        .bookmarkIcon {
            font-size: 24px;
            margin-right: 10px;
        }
        
        .arrowIcon {
            font-size: 24px;
        }

      .goal-page {
        padding: 60px;
        padding-left: 80px;
        padding-right: 80px;
        background-color: #fff;
      }

      .headerContainer {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
      
      .circle {
        width: 70px;
        height: 70px;
        background-color: #d1d5db;
        border-radius: 50%;
        margin-right: 20px;
      }
     
    .title {
        font-size: 36px;
        font-weight: bold;
        margin: 0;
    }

      .goal-header {
        margin-bottom: 40px;
      }
      .goal-header p {
        color: #666;
        margin-bottom: 60px;
      }
      .bookmarks {
        margin: 40px 0;
        margin-bottom: 40px;
      }
      .topics {
        margin-bottom: 40px;
      }
      .topics h3 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .topics p {
        margin-bottom: 20px;
      }

      .topic {
        margin-bottom: 50px;
      }
      .articles {
        background: #fff; /* Set background to white */
        padding: 20px; /* Add padding for better spacing */
        border-radius: 8px; /* Add border radius for rounded corners */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add subtle shadow for better visibility */
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .article {
        padding: 10px;
        background: #fff;
        border-radius: 4px;
      }
      .articleSelected{
        padding: 10px;
        background: #f5f5f5;
        border-radius: 4px;
      }
      .article span {
        float: right;
        color: #888;
      }
      .articleSelected span {
        float: right;
        color: #888;
      }
    `}</style>
  </Layout>
  );
};

export default Goal;
