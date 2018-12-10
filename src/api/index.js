const BASE = 'http://localhost:3000'

let getApartments = function() {
  return fetch(BASE + '/apartments')
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
}


let getUserHikes= function(user_id){
  return fetch(`${BASE}/users/${user_id}/hikes`)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
    }

let getEmail = function(user_id){
  return fetch(BASE + '/apartments/email/' + user_id)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
    .catch((error) =>
      console.log(error))
    }


let createHike = function(hike) {
  // console.log(hike);
  return fetch(BASE + '/hikes', {
    body: JSON.stringify(hike),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

let deleteHike = function(id) {
  console.log(id);
  return fetch(BASE + '/hikes/' + id, {
    method: "DELETE"
  })
  .then((resp) => {
      console.log(resp)
  })
}

let getHike = function(id) {
  console.log("this is my id in the getHike function " + id)
  return fetch(BASE + '/hikes/' + id)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

let getProfile = function(id) {
  return fetch(BASE + '/profiles/' + id)
    .then(resp => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

export {
  getApartments, createHike, getHike, getUserHikes, deleteHike, getEmail, getProfile
}
