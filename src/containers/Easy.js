import React, { Component } from 'react'
import { MDBBadge, MDBBtn } from "mdbreact";
import Latency from '../components/Latency';
// import AnswerTitle from '../components/AnswerTitle';
import getRSSFeed from '../serviceclients/rssService';
import './styles/easy.css';

let referenceResult = [];
let randomIndexes = [];
const spanStyle = {
  backgroundColor: "lightblue",
  margin: "2px",
  borderRadius: "4px"
};

export default class Easy extends Component {
  state = {
    isAnswer: false,
    spinner: false,
    title: [],
    words: [],
  };

 componentDidMount() {
    this.getNewsTitles();
  }

  getNewsTitles() {
    this.setState({ spinner: !this.state.spinner });
    getRSSFeed(response => {
      this.getQuizTitle(response);
    })
  }

  getRandomIndexes = (amount) => {
    let rndIndexes = [];
    let randomNumber;
    for(let i=0; rndIndexes.length < (Math.floor(amount/3)); ++i) {
      randomNumber = (Math.floor(Math.random()*(amount-1)));
      if (rndIndexes.indexOf(randomNumber) === -1) {
        rndIndexes.push(randomNumber);
      }
    }
    return rndIndexes
  }

  getQuizTitle = (titles) => {
    let hiddenWords = [];
    let randomTitleArray = [];
    let randomIndex = Math.floor(Math.random()*titles.length);
    let cacheTitleArray = titles[randomIndex].split(" ");
    cacheTitleArray.forEach((item, index) => {
      randomTitleArray.push({index: index, word: item });
    });
    referenceResult = randomTitleArray;
    randomIndexes = this.getRandomIndexes(randomTitleArray.length);
    for (let i=0; i<randomIndexes.length; ++i) {
      const hiddenWord = (randomTitleArray.splice(randomIndexes[i], 1, {index: i, word: "hidden"}));
      hiddenWords.push(hiddenWord[0]);
    }
    this.setState({ title: randomTitleArray, words: hiddenWords, spinner: !this.state.spinner });
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
    let title = [...this.state.title ];
    let words = [...this.state.words];
    let indexWord = event.dataTransfer.getData("indexWord");
    let word = event.dataTransfer.getData("word");
    let index = event.dataTransfer.getData("indexInArray");
    let isWords = event.dataTransfer.getData("isWords");
    console.log(isWords);
    if (isWords === "true") {
      title[ind] = { index: indexWord, word: word };
      words.splice(index, 1);
      this.setState({ title, words });
    } else {
      title[ind] = { index: indexWord, word: word };
      title[index] = { index: indexWord, word: "hidden" };
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
      title[index] = { index: index, word: "hidden" };
      words.push(cacheWord);
      this.setState({ title, words });
    }
  }

  checkResult = () => {
    let userAnswer = [...this.state.title];
    console.log("Reference: ", referenceResult);
    console.log("userAnswer: ", userAnswer);

    for (let i=0; i<randomIndexes.length; ++i) {
      if (userAnswer[randomIndexes[i]].word === referenceResult[randomIndexes[i]].word) {
        userAnswer[randomIndexes[i]].index = 88;
      } else {
        userAnswer[randomIndexes[i]].index = 99;
      }
    }
    this.setState({ title: userAnswer, isAnswer: true });
  }

  // renderQuizTitle() {
  //   return(
  //     <AnswerTitle
  //       title={this.state.title}
  //       words={this.state.words}
  //     />
  //   )
  // }

  // renderAnswerTitle() {
  //   return(
  //     <QuizTitle
  //       title={this.state.title}
  //     />
  //   )
  // }

  render() {

    let quizTitle = this.state.title.map((t, index) => {
      if (t.word === "hidden") {
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
        {this.state.spinner ? <Latency/> : <span>Otsikko: </span> }
        <br />
        <p>
          {quizTitle}
        </p>
        <p>
          {quizWord}
        </p>
        <MDBBtn color="indigo" onClick={() => this.checkResult()}>Verify & Next</MDBBtn>
      </>
    )
  }
}
