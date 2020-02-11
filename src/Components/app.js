import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Logo from './Logo/logo'
import Score from './Score/score'
import Level from './Level/Level'
import QuestionItem from './QuestionItem/QuestionItem'
import Card from './Card/Card'
import ResultBtn from './ResultButton/ResultButton'

import store from '../Store/birds'

import './app.css'

export default class App extends Component {
    state = {
        option: {
            stage: 0,
            score: 0,
            isAnswered: false,
            answer: null
        }, 
        user: {
            isBirdClick: false,
            id: null
        }      
    }

    RightBird = () => {
        console.log('update')
        return Math.ceil(Math.random() * store[this.state.option.stage].length)
    }

    isRight = (id=null) => {
        const check = id===(this.state.option.answer + 1) ? true : false
        if (check) {
            this.setState(prevState => ({
                option: {
                    ...prevState.option,
                    isAnswered: check
                }}))
        }
        
        this.setState(prevState => ({ user: {isBirdClick: true, id: id}}))
        console.log(this.state,"isRight")
        
        return check
    }

    isNextStage = (next=false) => {
        console.log("next stage " + next)
        //option: {..isAnswered: false, answer: null} user: isBird: false, id: false
        if(next) {
            this.setState(prevState => ({
                option: {
                    ...prevState.option,
                    stage: ++prevState.option.stage,
                    isAnswered: false,
                    answer: null
                },
                user: {
                    isBirdClick: false,
                    id: null
                }
            }))
        }
    }

    componentDidMount() {
        const answer = this.RightBird();
        const next = this.isNextStage()
        this.setState(prevState => ({
            option: {
                ...prevState.option,
                answer: answer
            }}))
    }

    render() {

        if(this.state.option.answer === null)
           return <div></div> 
        console.log("Render App")
        return (
            <main>
            <header>
                <Logo></Logo>  
                <Score></Score>
            </header>
            <Level></Level>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Card option={this.state.option} store={store}></Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <QuestionItem store={store} user={this.state.user} checkAnswer={this.isRight} stage={this.state.option.stage} ></QuestionItem>
                    </Grid.Column>
                    <Grid.Column>
                        <Card option={this.state.option} user={this.state.user} store={store} ></Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <ResultBtn isRightAnswer={this.state.option.isAnswered} isNextStage={this.isNextStage} ></ResultBtn>
            </main>
        ) 
    }
}
