import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";


class App extends Component {
    render () {

        return (
               <div style={{backgroundColor: '#222'}}>
                   <Layout>
                       <Quiz />
                   </Layout>
               </div>
        )
    }
}

export default App;
