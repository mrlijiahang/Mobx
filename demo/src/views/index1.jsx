import React from 'react'
import {connect} from 'react-redux'
export default  class Demo2 extends React.Component{
    componentDidMount(){

    }
   
    render(){
        const {text,onChangeText,onButtonClick} =this.props
        return(
            <div>
                <div>index2</div>
                {/* <div>{text}</div> */}
                {/* <button onClick={onButtonClick}>clickme</button> */}
            </div>
        )
    }
}
// Demo2 =connect(mapStateToProps, mapDispatchToProps)(Demo2)
