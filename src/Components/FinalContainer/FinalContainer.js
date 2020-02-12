import React, { Component } from 'react'
import { Container, Divider, Header, Icon } from 'semantic-ui-react'


const FinalContainer = ({isBestResult, maxScore, userScore}) => {

    return (
        <section>
        <Container textAlign="center">
            <Header as='h2' icon textAlign='center'>
                <Icon name='chess queen' circular />
                <Header.Content>Поздравляем!</Header.Content>
                <Header.Content>Вы прошли викторину и набрали {userScore} из {maxScore} возможных баллов</Header.Content>
            </Header>
        </Container>
        <Divider />
        </section>
    )
}

export default FinalContainer
