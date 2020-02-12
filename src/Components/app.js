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
            score: 0,  // need del it's variable in global options
            isAnswered: false,
            answer: null,
            maxScore: null   
        }, 
        user: {
            stageEls: null,
            isBirdClick: false,
            id: null,
            score: 0
        }      
    }



    static getDerivedStateFromProps(props, state) {
        const {option, user} = state
        let newState = {}
        console.log("getDerivedStateFromProps")
        let fabrica = (obj, key, keyname) => {
           obj = Object.assign(obj, key)
           if (keyname === 'option') {
                return { option: obj, user: user}
           } else {
                return { option, user: obj}
           }      
        }


        if (state.option.maxScore === null) {
            const maxScore = store.map((el) => el.length-1).reduce((a, b) => a+b)
            newState = fabrica(option, {maxScore}, 'option')
        }

        if(state.option.answer === null) {
            const answer = Math.ceil(Math.random() * store[state.option.stage].length)
            if (Object.keys(newState).length > 0) {
                let { option, user } = newState
                newState = fabrica(option, {answer}, 'option')      
            } else {
                newState = fabrica(option, {answer}, 'option')
            }
        }

        if(state.user.stageEls === null) {
            const stageEls = store[option.stage]
            console.log(stageEls)
            newState = fabrica(user, {stageEls})
        }
        console.log(newState, "getDerivedStateFromProps last")
        return newState
    }

    isRightAnswer = (id=null) => {
        const { option, user } = this.state
        const check = id===(option.answer + 1) ? true : false
        if(user.stageEls.filter((el) => el.id === id).length > 0) {

            const idx = user.stageEls.map((el, idx) => {
                if(el.id === id)
                    return idx
            }).filter((el) => el > 0)[0]
            let stageEls = user.stageEls
            if (!option.isAnswered)
                stageEls = [...user.stageEls.slice(0, idx), ...user.stageEls.slice(idx+1, user.stageEls.length)]
           console.log(stageEls, "============isRightAnswer=====stageEls========")
            this.setState(prevState => ({
                user: {
                    ...user,
                    stageEls: stageEls,
                    isBirdClick: true,
                    id: id
                }
            }))
        } else {
            console.log(user.stageEls, "constanta 2 ")
            this.setState(prevState => ({ 
                user: {
                    ...user,
                     isBirdClick: true,
                     id: id
                } 
            }))

        }

        if (check) {
            //let maxScoreStage = store[option.stage].length - 1;
            let score = user.stageEls.length - 1;
            console.log("=============================")
            //console.log(maxScoreStage, "Maxscore")
            console.log( user.stageEls, "userstage")
            console.log(score, "score")
            console.log("=============================")
            this.setState(prevState => ({
                option: {
                    ...prevState.option,
                    isAnswered: check
                },
                user: {
                    ...user,
                    score
                }
            
            }, () => {

            }))


        }
        
        console.log(this.state,"isRightAnswered")
        
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
                    stageEls: null,
                    isBirdClick: false,
                    id: null,
                    score: 0
                }
            }))
        }
    }

    render() {
        console.log('Render app!!!!')
            return (
                <main>
                <header>
                    <Logo></Logo>  
                    <Score score={this.state.user.score}></Score>
                </header>
                <Level stage={this.state.option.stage}></Level>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Card option={this.state.option} store={store}></Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <QuestionItem store={store} user={this.state.user} checkAnswer={this.isRightAnswer} stage={this.state.option.stage} ></QuestionItem>
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
