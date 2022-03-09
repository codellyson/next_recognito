export function localStorage(data, key) {
  if (data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  } else {
    return JSON.parse(window.localStorage.getItem(key));
  }
}
