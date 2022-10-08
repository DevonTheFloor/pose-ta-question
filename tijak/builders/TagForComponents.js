export class TagForComponents {
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
      if (this.tag === "p") {}
    }
}