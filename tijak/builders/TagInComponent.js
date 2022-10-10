import * as craf from './create-attribute-tag';

export class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn, getContext) {
    this.tag = tag;
    this.idTag = idTag;
    this.classAtt = classAtt;
    this.mountOn = mountOn;
    this.getContext = getContext;


    const markup = document.createElement(this.tag);
    markup.id = this.idTag;
    //markup.id = 'id'+markup.tagName+this.number;
    markup.setAttribute('class', this.classAtt);
    if (this.tag === "p") {
      craf.Para(markup, this.idTag, this.getContext);
    } 
    else if(this.tag === "a") {
      craf.Link(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h1") {
      craf.Title1(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h2") {
      craf.Title2(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h3") {
      craf.Title3(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h4") {
      craf.Title4(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h5") {
      craf.Title5(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h6") {
      craf.Title6(markup, this.idTag, this.getContext)
    } else if (this.tag === "img") {
      craf.Img(markup, this.idTag, this.getContext);
    }
    this.mountOn.appendChild(markup);

    return markup;
  }
}


export const tagMethod = {
  liMenuCreator: (direction, links, olIdMount, site, url) =>{
    
    if (direction === "in") {
      const url = new URL(window.location.href),
        hach = url.hash;
      const newLinks = links.filter(link => link.url != hach);
      newLinks.forEach(link => {
        linkedListIn(olIdMount, link)
      })
    } else {
      links.forEach(link => {
        linkedListOut(olIdMount, link);
      })
    }
  }
}
function linkedListIn(olIdMount, link) {
  const li = document.createElement('li'),
    olMount = document.getElementById(olIdMount);
    olMount.appendChild(li);
    //<a></a>1
    const a = document.createElement('a')
    a.setAttribute('href', link.url);
    a.textContent = link.site;
  li.appendChild(a);
}
function linkedListOut(olIdMount, link) {
  const li = document.createElement('li'),
  olMount = document.getElementById(olIdMount);
  olMount.appendChild(li);
  //<a></a>1
  const a = document.createElement('a')
  a.setAttribute('href', link.url);
  a.setAttribute('target', '_blank');
  a.textContent = link.site;
  li.appendChild(a);
}
export function multipleComponents(selector) {
  const tags = document.querySelectorAll(selector);

}
  /*const links = [
      { site: "", url: ""},
      { site: "", url: "" },
      { site: "", url: "" },
      { site: "", url: "" }
    ]*/
