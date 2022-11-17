import { mountingPageElements } from "../../tijak/builders/mounting-page";
import { dGEBId } from "../../tijak/helpers/myDomHelper";

//assets images
/*import connait from '../assets/question/kisiconnait.gif';
import baffe from '../assets/question/question.gif';
import detente from '../assets/question/repondra-repondra.gif';
import marche from '../assets/question/offre-demande.gif';
import pose from '../assets/question/pose-question.gif';
import magne from '../assets/question/pas-time.gif';
import toi from '../assets/question/compte-sur-toi.gif';*/
//scss

export default class IndexPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    mountingPageElements(
      this,
      `<my-header h1title="Pose ta question !"></my-header>
        <main>
        <h2>Quand t'es sur un réseau social d'entraide et que tu cherches quelqu'un pour t'aider en demandant: "J'ai une question, y a quelqu'un qui s'y connait pour m'aider?"</h2>
          <h3>Ce qu'on a envie de te dire c'est :</h3>
          <rest-in-gif
            h3txt="On ne sait pas quel niveau tu as, alors quand tu demandes quelqu'un qui s'y connait, nous on pense ça:"
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/kisiconnait.gif"
          ></rest-in-gif> 

          <rest-in-gif
            h3txt="Apres s'être pris la tête un quart d'heure à se demander si on a le level pour t'aider, on a bien envie de te dire ça:"
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/question.gif"
          ></rest-in-gif>
         
          <rest-in-gif
            h3txt="Aussi parce qu'on ne sait pas quand est ce qu'on verra ton message, on est pas un SAV, on ne te doit rien. "
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/repondra-repondra.gif"
          ></rest-in-gif>

          <rest-in-gif
            h3txt="Si t'as pas envie que, dans le meilleur des cas, ton message reste lettre morte."
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/offre-demande.gif"
          ></rest-in-gif>
          
          <rest-in-gif
            h3txt="Tu conviendras que"
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/pose-question.gif"
          ></rest-in-gif>

          <rest-in-gif
            h3txt="Si tu demandes d'abord: est ce que il y a quelqu'un, si on te repond oui 2h plus tard et que t'es pas là, il faut qu'on attende que tu repondes, pour PEUT ETRE savoir ce que tu veux. T'es gentil mais"
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/pas-time.gif"
          ></rest-in-gif>

          <rest-in-gif
            h3txt="Merci de ta comprehension "
            imaId=""
            srcImg="https://posetaquestion.fr/my-assets/server_assets/ptq/compte-sur-toi.gif"
          ></rest-in-gif>

          <h4>Cordialement</h4>
          <h5>Bisous</h5>
        </main>
        `);
        /*dGEBId('connait').src = connait;
        dGEBId('baffe').src = baffe;
        dGEBId('detente').src= detente;
        dGEBId('marche').src = marche;
        dGEBId('pose').src = pose;
        dGEBId('magne').src = magne;
        dGEBId('toi').src = toi;*/
        
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}   
  }
  customElements.define('index-page', IndexPage);

