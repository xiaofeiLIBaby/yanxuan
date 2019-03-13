import ajax from './ajax'
const BASE = '/api'
export const reqCategory = () => {
  return ajax('/goods')
}
export const reqHome=()=>{
  return ajax('/home')
}
export const reqClassify=()=>{
  return ajax('/classify')
}
export const reqTab = () => ajax( BASE + '/topic/v1/find/getTabs.json')

export const reqAutoData = ajax(BASE+'/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383')

 export const reqRecommendData = () => ajax(BASE+'/topic/v1/find/recManual.json')
