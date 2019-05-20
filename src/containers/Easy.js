import React, { Component } from 'react'
import { MDBBadge, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import Latency from '../components/Latency';
import AnswerTitle from '../components/AnswerTitle';
import NewsMenu from '../components/NewsMenu';
import ResultScore from '../components/ResultScore';
import { yleMajorNews, yleMostRead, yleFinancial, yleNewsInEnglish } from '../serviceclients/rssService';
import './styles/easy.css';
import '../containers/styles/components.css';

let allTitles = [];
let referenceResult = [];
let randomIndexes = [];
let totalScore = 0;
let userScore = 0;

const spanStyle = {
  backgroundColor: "lightblue",
  margin: "2px",
  borderRadius: "4px"
};

export default class Easy extends Component {
  state = {
    isAnswer: false,
    resultScore: 0,
    spinner: false,
    title: [],
    words: [],
  };

  componentDidMount() {
  //   this.getNewsTitles();
  }

  getYleMajorNews = e => {
    this.setState({ title: [], words: [], spinner: true });
    yleMajorNews(response => {
      allTitles = response;
      this.getQuizTitle();
    })
  };

  getYleMostRead = e => {
    this.setState({ title: [], words: [], spinner: true });
    yleMostRead(response => {
      allTitles = response;
      this.getQuizTitle();
    })
  };

  getYleFinancial = e => {
    this.setState({ title: [], words: [], spinner: true });
    yleFinancial(response => {
      allTitles = response;
      this.getQuizTitle();
    })
  };

  getYleInEnglish = e => {
    this.setState({ title: [], words: [], spinner: true });
    yleNewsInEnglish(response => {
      allTitles = response;
      this.getQuizTitle();
    })
  };

  getRandomIndexes = (amount) => {
    let rndIndexes = [];
    let randomNumber;
    for (let i = 0; rndIndexes.length < (Math.floor(amount / 3)); ++i) {
      randomNumber = (Math.floor(Math.random() * (amount - 1)));
      if (rndIndexes.indexOf(randomNumber) === -1) {
        rndIndexes.push(randomNumber);
      }
    }
    return rndIndexes
  }

  getQuizTitle = () => {
    let hiddenWords = [];
    let randomTitleArray = [];
    let randomIndex = Math.floor(Math.random() * allTitles.length);
    let cache = allTitles.splice(randomIndex, 1);
    let cacheTitleArray = cache[0].split(" ");
    cacheTitleArray.forEach((item, index) => {
      randomTitleArray.push({ index: index, word: item });
    });
    referenceResult = [...randomTitleArray];
    randomIndexes = this.getRandomIndexes(randomTitleArray.length);
    for (let i = 0; i < randomIndexes.length; ++i) {
      const hiddenWord = (randomTitleArray.splice(randomIndexes[i], 1, { index: i, word: "empty" }));
      hiddenWords.push(hiddenWord[0]);
    }
    this.setState({ title: randomTitleArray, words: hiddenWords, spinner: false, isAnswer: false });
  }

  onDragStart = (event, word, index, value) => {
    event.dataTransfer.setData("indexWord", word.index);
    event.dataTransfer.setData("word", word.word);
    event.dataTransfer.setData("indexInArray", index);
    event.dataTransfer.setData("isWords", value);
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDropHidden = (event, ind) => {
    let title = [...this.state.title];
    let words = [...this.state.words];
    let indexWord = event.dataTransfer.getData("indexWord");
    let word = event.dataTransfer.getData("word");
    let index = event.dataTransfer.getData("indexInArray");
    let isWords = event.dataTransfer.getData("isWords");
    if (isWords === "true") {
      title[ind] = { index: indexWord, word: word };
      words.splice(index, 1);
      this.setState({ title, words });
    } else {
      title[ind] = { index: indexWord, word: word };
      title[index] = { index: indexWord, word: "empty" };
      this.setState({ title });
    }
  }

  onDropInWord = (event, ind) => {
    let title = [...this.state.title];
    let words = [...this.state.words];
    let indexWord = event.dataTransfer.getData("indexWord");
    let word = event.dataTransfer.getData("word");
    let index = event.dataTransfer.getData("indexInArray");
    let isWords = event.dataTransfer.getData("isWords");
    let cacheWord = title[ind];
    title[ind] = { index: indexWord, word: word };
    if (isWords === "true") {
      words.splice(index, 1);
      words.push(cacheWord);
      this.setState({ title, words });
    } else {
      title[index] = { index: index, word: "empty" };
      words.push(cacheWord);
      this.setState({ title, words });
    }
  }

  checkResult = () => {
    let userAnswer = [...this.state.title];
    for (let i = 0; i < randomIndexes.length; ++i) {
      if (userAnswer[randomIndexes[i]].word === referenceResult[randomIndexes[i]].word) {
        userAnswer[randomIndexes[i]].index = 88;
        userScore++;
        totalScore++;
      } else {
        userAnswer[randomIndexes[i]].index = 99;
        totalScore++;
      }
    }
    this.setState({ title: userAnswer, words: [], isAnswer: true });
  }

  renderNewsMenu() {
    return (
      <NewsMenu
        yleMajorNews={this.getYleMajorNews}
        yleMostRead={this.getYleMostRead}
        yleFinancial={this.getYleFinancial}
        yleInEnglish={this.getYleInEnglish}
      />
    )
  }
  renderAnswerTitle() {
    return (
      <AnswerTitle
        title={this.state.title}
      />
    )
  }

  renderResultScore(uScore, tScore) {
    return (
      <ResultScore
        userScore={uScore}
        totalScore={tScore}
      />
    )
  }

  render() {

    let quizTitle = this.state.title.map((t, index) => {
      if (t.word === "empty") {
        return <span key={index}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDropHidden(e, index)}
          style={spanStyle}>
          *****&nbsp;
          </span>
      } else if (randomIndexes.indexOf(index) !== -1) {
        return <MDBBadge key={index}
          onDragStart={(e) => this.onDragStart(e, t, index, false)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDropInWord(e, index)}
          draggable>
          {t.word}&nbsp;
            </MDBBadge>
      } else {
        return <span key={index}>{t.word}&nbsp;</span>
      }
    })

    let quizWord = this.state.words.map((w, index) =>
      <MDBBadge key={index} onDragStart={(e) => this.onDragStart(e, w, index, true)} draggable>{w.word}</MDBBadge>
    )

    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div>{this.renderNewsMenu()}</div>
            </MDBCol>
            <MDBCol size="8">
              {this.state.spinner ? <Latency />
                : <>{this.state.isAnswer ? <div><span className="head">Quiz Result</span></div> : <div><span className="head">Quiz News Title</span></div>}</>
              }
              {this.state.isAnswer
                ? this.renderAnswerTitle()
                : <div>
                  <p>{quizTitle}</p>
                  <p>{quizWord}</p>
                </div>
              }
              <div>
                {this.state.isAnswer
                  ? <button onClick={() => this.getQuizTitle()}>Next</button>
                  : <button color="info" onClick={() => this.checkResult()}>Verify</button>
                }
              </div>
            </MDBCol>
            <MDBCol>
              <div>{this.renderResultScore(userScore, totalScore)}</div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}
