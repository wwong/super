import API from './API'

export class APIPlugin extends API {
  constructor() {
    super('')
  }

  list = () => this.get('/plugins')
  add = (data) => this.put(`/plugins/${data.Name}`, data)
  update = (data) => this.add(data)
  remove = (data) => this.delete(`/plugins/${data.Name}`, data)
  getPlusToken = () => this.get('/plusToken')
  setPlusToken = (data) => this.put('/plusToken', data)
  stopPlusExtension = (name) => this.put(`/stopPlusExtension`, name)
  startPlusExtension = (name) => this.put(`/startPlusExtension`, name)
}

export const pluginAPI = new APIPlugin()
