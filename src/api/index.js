import ajax from './ajax'

export const reqCategory = () => {
  return ajax('/goods')
}
export const reqHome=()=>{
  return ajax('/home')
}
export const reqClassify=()=>{
  return ajax('/classify')
}
