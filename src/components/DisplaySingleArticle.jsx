import React from 'react';
import { connect } from 'react-redux';
import { IonContent, IonGrid } from '@ionic/react';


const DisplaySingleArticle = props => {
  let articleDetails;
  let article = props.singleArticle;
  articleDetails = (
    <IonGrid key={article.id} align="center">
      <h1>{article.title}</h1>
      <h4>{article.lead}</h4>
      <p>{article.content}</p>
    </IonGrid>
  );
  return <IonContent id="single-article">{articleDetails}</IonContent>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);