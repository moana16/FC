import TheHeader from './componets/TheHeader'
import {Component} from './core/jimin'

export default class App extends Component {
    render() {
        const routerView = document.createElement('router-view')
        const theHeader = new TheHeader().el
        this.el.append(
            theHeader,
            routerView
        )
    }
}