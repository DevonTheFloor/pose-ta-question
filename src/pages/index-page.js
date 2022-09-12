import { mountingPageElements } from "../../tijak/builders/mounting-page";
import { dGEBId } from "../../tijak/helpers/myDomHelper";

import MyHeader from "../components/myHeader/my-header";
//assets images
import baffe from '../assets/question/question.gif';
import detente from '../assets/question/repondra-repondra.gif';
import marche from '../assets/question/offre-demande.gif';
import pose from '../assets/question/pose-question.gif';
import magne from '../assets/question/pas-time.gif';
import toi from '../assets/question/compte-sur-toi.gif';
//scss


export default class IndexPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    mountingPageElements(
      this,
      `<my-header h1title="Pose ta question... bordel !!"></my-header>
        <main>
        <h2>Quand t'es sur un réseau social d'entraide et que tu cherches quelqu'un pour t'aider en demandant: "J'ai une question, y a quelqu'un pour m'aider?"</h2>
         <h3>Ce qu'on a envie de te dire c'est :</h3>
          <section class="gif-sec">
            <h3>Hey! T'sais quoi?!</h3>
            <img id="baffe">
          </section>
         
          <section class="gif-sec">
            <h3>Principalement parce qu'on ne sait pas quand est ce qu'on verra ton message, on est pas un SAV, on ne te doit rien. </h3>
            <img id="detente">
          </section>

          
          <section class="gif-sec">
            <h3>Si t'as pas envie que, dans le meilleur des cas, ton message reste lettre morte. </h3>
            <img id="marche">
          </section>

          
          <section class="gif-sec">
            <h3> Tu conviendras que </h3>
            <img id="pose">
          </section>

          
          <section class="gif-sec">
            <h3> Si tu demandes d'abord "est ce que il y a uelqu'un", si on te repond "oui" 2h plus tard et que t'es pas là, il faut qu'on attende que tu reponde, pour PEUT ETRE savoir ce que tu veux. T'es gentil mais </h3>
            <img id="magne">
          </section>

          
          <section class="gif-sec">
            <h3> Merci de ta comprehension </h3>
            <img id="toi">
          </section>

          <h4>Cordialement</h4>
          <h5>Bisous</h5>
        </main>
        `);
        dGEBId('baffe').src = baffe;
        dGEBId('detente').src= detente;
        dGEBId('marche').src = marche;
        dGEBId('pose').src = pose;
        dGEBId('magne').src = magne;
        dGEBId('toi').src = toi;
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
    
  }
  customElements.define('index-page', IndexPage);

