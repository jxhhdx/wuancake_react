import React from 'react'
import { Button } from 'element-react'
import 'element-theme-default'
import '@/assets/css/home.less'
import { connect } from 'react-redux'
import http  from '@/http'
// import aa from '@/mock'
import Mock from 'mockjs'
class Home extends React.Component {

    add(number) {
        this.props.dispatch({type: 'ADD_1', number})
    }

    http() {
        http.test.hello().then(resp=>{
            console.log(resp)
        })
    }
    componentWillMount(){
        
    }

    render() {
        let { number = 0 } = this.props
        return (
            <div>
                <span> number: { number } </span>
                <Button type="primary" onClick={() => this.add(number)} >添加</Button>
                <br/>
                <Button type="primary" onClick={() => this.http()} >请求</Button>
            </div>
        )
    }
}

const mapStateToProps = (state/*, props*/) => {
    return {
      number: state.test.number,
    }
  }

export default connect(mapStateToProps)(Home)