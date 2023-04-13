export const getCookie = (name: string) => {
  try {
    return localStorage.getItem(name)
  } catch (error) {
    console.log(error);
    return ''
  }
}

export const setCookie = (name: string, value: string) => {
  try {
    return localStorage.setItem(name, value)
  } catch (error) {
    console.log(error);
  }
}

export const removeCookie = (name: string) => {
  try {
    return localStorage.removeItem(name)
  } catch (error) {
    console.log(error);
  }
}