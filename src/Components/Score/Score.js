import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Score = ({score}) => (
    <Header as='h2' className='score'>
        <Icon name='angle double right' />
<Header.Content>Score: {score}</Header.Content>
    </Header>
    );

export default Score;