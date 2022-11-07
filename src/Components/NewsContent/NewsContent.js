import React from "react";
import Container from "@mui/material/Container";
import "./NewsContent.css";
import Newscard from "../NewsCard/Newscard";

function NewsContent({ newsResults, newsArray, loadmore, setLoadmore }) {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="apple store"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="play store"
            height="80%"
          />
        </div>
        {newsArray.map((newsItem) => (
          <Newscard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadmore <= newsResults && (
          <>
            <hr />
            <button className="loadMore" onClick={()=>setLoadmore(loadmore + 20)}>Load More</button>
          </>
        )}
      </div>
    </Container>
  );
}

export default NewsContent;
