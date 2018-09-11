export function createUser(params) {
  let users = localStorage.getItem("saved_users_data")
  if(users===undefined || users===null) {
    users = []
  } else {
    users = JSON.parse(users)
  }
  
  let exist = false;
  for(let i=0;i<users.length;i++) {
    if(users[i].email===params.email) {
      exist = true;
      break;
    }
  }
  if(!exist) {
    users.push(params)
    users = JSON.stringify(users)
    localStorage.setItem("saved_users_data", users);
    return params;
  } else {
    return {error: "User with this email already exists"}
  }
}

export function createSession(params) {
  let users = localStorage.getItem("saved_users_data")
  if(users===undefined || users===null) {
    users = []
  } else {
    users = JSON.parse(users)
  }
  
  let user = null;
  for(let i=0;i<users.length;i++) {
    if((users[i].email===params.email) && (users[i].password===params.password)) {
      user = users[i];
      break;
    }
  }
  if(user) {
    user = JSON.stringify(user)
    localStorage.setItem("current_user", user);
    return user;
  } else {
    return {error: "Email or password is incorrect."}
  }
}

export function SessionCheck() {
  let user = localStorage.getItem("current_user")
  if(user===undefined || user===null) {
    return null;
  } else {
    return JSON.parse(user)
  }
}

export function clearSession() {
  localStorage.removeItem("current_user");
  return null;
}