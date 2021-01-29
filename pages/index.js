import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Hunter x Hunter</title>
        <meta property="og:url" content="https://aluraquiz.nickithine.vercel.app/" />
        <meta property="og:title" content="Quiz - HunterxHunter" />
        <meta property="og:description" content="Um quiz feito com muito carinho na Imersão Alura!" />
        <meta property="og:image" content="https://images6.alphacoders.com/840/thumb-1920-840252.jpg" />
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Hunter x Hunter</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Anime filé!</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Se liga que estará aqui em breve</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nickithine" />
    </QuizBackground>
  );
}
