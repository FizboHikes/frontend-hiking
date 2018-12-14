import AuthService from '../services'
const BASE = 'http://localhost:3000'
const auth = new AuthService()

let getUserHikes= function(user_id){
  return auth.authFetch(`${BASE}/users/${user_id}/hikes`)
    .then((resp) => {
      let json = resp.json()
      // console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
    }

let getFriendHikes= function(user_id){
  return auth.authFetch(`${BASE}/users/${user_id}/friend_hikes`)
    .then((resp) => {
      let json = resp.json()
      // console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
    }


let getEmail = function(user_id){
  return auth.authFetch(BASE + '/apartments/email/' + user_id)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
    }


let createHike = function(hike) {
  return auth.authFetch(BASE + '/hikes', {
    body: JSON.stringify(hike),
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

let followFriend = function(email, id) {
  return auth.authFetch(BASE + '/users/' + id + '/add_friend', {
    body: JSON.stringify(email),
    method: "POST"
  })
  .then((resp) => {
    return resp.json()
  })
}

let deleteHike = function(id) {
  return auth.authFetch(BASE + '/hikes/' + id, {
    method: "DELETE"
  })
  .then((resp) => {
      console.log(resp)
  })
}

let getHike = function(id) {
  return auth.authFetch(BASE + '/hikes/' + id)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

let getProfile = function(id) {
  return auth.authFetch(BASE + '/profiles/' + id)
    .then(resp => {
      let json = resp.json()
      // console.log(json);
      return json
    })
}


export {
  createHike, getHike, getUserHikes, deleteHike, getEmail, getProfile, followFriend, getFriendHikes
}
