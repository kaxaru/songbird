import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class ResultBtn extends Component {

btnClick = (e) => {
    this.props.isNextStage(this.props.isRightAnswer)
}

render() {
    return (<Button fluid className='resultBtn green' disabled={(this.props.isRightAnswer) ? false : true} onClick={this.btnClick} >Следующий уровень</Button>)
}}

