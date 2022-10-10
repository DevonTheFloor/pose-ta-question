import * as craf from './create-attribute-tag';

export class TagForComponents{
  constructor( tag,number, classAtt, mountOn, getContext) {
    this.tag = tag;
    this.number = number;
    this.classAtt = classAtt;
    this.mountOn = mountOn;
    this.getContext = getContext;


    const markup = document.createElement(this.tag),
      idTag = 'id-'+this.tag+this.number;
    markup.setAttribute('id', idTag);
    //markup.id = 'id'+markup.tagName+this.number;
    markup.setAttribute('class', this.classAtt);
    if (this.tag === "p") {
      craf.Para(markup, idTag, this.getContext);
    } 
    else if(this.tag === "a") {
      craf.Link(markup, idTag, this.getContext);
    }
    else if (this.tag === "h1") {
      craf.Title1(markup, idTag, this.getContext);
    }
    else if (this.tag === "h2") {
      craf.Title2(markup, idTag, this.getContext);
    }
    else if (this.tag === "h3") {
      craf.Title3(markup, idTag, this.getContext);
    }
    else if (this.tag === "h4") {
      craf.Title4(markup, idTag, this.getContext);
    }
    else if (this.tag === "h5") {
      craf.Title5(markup, idTag, this.getContext);
    }
    else if (this.tag === "h6") {
      craf.Title6(markup, idTag, this.getContext)
    } else if (this.tag === "img") {
      craf.Img(markup, idTag, this.getContext);
    }
    this.mountOn.appendChild(markup);

    return markup;
  }
}
