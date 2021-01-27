import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index.js';
import QuizBackground from '../src/components/QuizBackground/index.js';
import Footer from '../src/components/Footer/index.js';
import GitHubCorner from '../src/components/GitHubCorner/index.js';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;

// `;

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
      <title>Quiz Hunter x Hunter</title>
      <meta property="og:{db.bg}" content="Quiz HxH" key="title" />
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
        <Footer>

        </Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nickithine"></GitHubCorner>
    </QuizBackground>
  );
}
