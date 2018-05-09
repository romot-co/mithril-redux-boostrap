import m from 'mithril'
import '../../bootstrap/dist/css/bootstrap.css'
import routes from './routes'

m.route(document.querySelector('#app'), '/', routes)
