import React, { Component } from "react";
import { connect } from "react-redux";
import { getListNews } from "../../reducers/newsReducer";

import NewsItem from "../../components/news";
import preloader from "../../assets/prl.gif";
import "../../sass/news.sass";

class News extends Component {
  componentDidMount() {
    const { onGetListNews } = this.props;
    onGetListNews();
  }

  render() {
    const { newsList, isLoading } = this.props;

    return (
      <>
        {!isLoading ? (
          newsList.map((news, i) => {
            return <NewsItem key={i} newsData={news} />;
          })
        ) : (
          <img className="news-preloader" src={preloader} alt="preloader" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  newsList: state.News.newsList,
  isLoading: state.News.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetListNews: () => {
      dispatch(getListNews());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(News);
