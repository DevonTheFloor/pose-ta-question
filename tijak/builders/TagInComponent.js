export default class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn) {
    this.tag = tag;
    this.idTag = idTag;
    this.classAtt = classAtt;
    this.mountOn = mountOn;

    const markup = document.createElement(this.tag);
    markup.id = this.idTag;
    markup.setAttribute('class', this.classAtt);
    switch (this.tag) {
      case 'p':
        this.crateAttributeForPara(markup)
      break;
    
      case 'a':
        this.createAttributeForLink(markup)
        break;
      case 'h1':
        this.createAttributeForTitle1(markup)
        break;
        case 'h2':
          this.createAttributeForTitle2(markup)
          break;
          case 'h3':
            this.createAttributeForTitle3(markup)
          break;

            case 'h4':
              this.createAttributeForTitle4(markup)
          break;
              case 'h5':
                this.createAttributeForTitle5(markup)
          break;
                case 'h6':
                  this.createAttributeForTitle6(markup)
          break;
        default:
          console.error('unknew tag');
        break;
    }
    this.mountOn.appendChild(markup);

  }
    

  createAttributeForTitle1(markup) {
    const titre = this.mountOn.getAttribute('titre1');
    markup.textContent = titre;
  }
  createAttributeForTitle2(markup) {
    const titre = this.mountOn.getAttribute('titre2');
    markup.textContent = titre;
  }
  createAttributeForTitle3(markup) {
    const titre = this.mountOn.getAttribute('titre3');
    markup.textContent = titre;
  }
  createAttributeForTitle4(markup) {
    const titre = this.mountOn.getAttribute('titre4');
    markup.textContent = titre;
  }
  createAttributeForTitle5(markup) {
    const titre = this.mountOn.getAttribute('titre5');
    markup.textContent = titre;
  }
  createAttributeForTitle6(markup) {
    const titre = this.mountOn.getAttribute('titre6');
    markup.textContent = titre;
  }
  crateAttributeForPara(markup) {
    const content = this.mountOn.getAttribute('texte');
    markup.textContent = content;
  }
  createAttributeForLink(markup) {
    const site = this.mountOn.getAttribute('site'),
      url = this.mountOn.getAttribute('url'),
      choice = this.mountOn.getAttribute('choice')
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  }
  createAttributeForImg(markup) {
    const source = this.mountOn.getAttribute('source');
      description = this.mountOn.getAttribute('description');
    markup.setAttribute('src', source);
    markup.setAttribute('alt', description);
  }

}