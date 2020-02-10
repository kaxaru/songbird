import React from 'react'
import { Grid } from 'semantic-ui-react'
import Logo from './Logo/logo'
import Score from './Score/score'
import Level from './Level/Level'
import QuestionItem from './QuestionItem/QuestionItem'
import Card from './Card/Card'
import ResultBtn from './ResultButton/ResultButton'

import './app.css'



const App = () => {
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
                    <Card></Card>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <QuestionItem></QuestionItem>
                </Grid.Column>
                <Grid.Column>
                    <Card></Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <ResultBtn></ResultBtn>
        </main>
    );
};

export default App;