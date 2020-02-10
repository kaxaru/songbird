import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Score = () => (
    <Header as='h2' className='score'>
        <Icon name='angle double right' />
        <Header.Content>Score: 0</Header.Content>
    </Header>
    );

export default Score;