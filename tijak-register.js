/*import MyHeader from "./src/components/myHeader/my-header";
import RestInGif from "./src/components/restInGif/rest-in-gif";*/
const myheader = await import('./src/components/myHeader/my-header'),
  restingif = await import('./src/components/restInGif/rest-in-gif'),
  indexpage = await import('./src/pages/index-page')
//page
//import IndexPage from "./src/pages/index-page";

export const registerComponents = [
    /*MyHeader,
    RestInGif,*/
    myheader,
    restingif
  
  ]
  
  export const registerPages = [
    //IndexPage
    indexpage
  ]