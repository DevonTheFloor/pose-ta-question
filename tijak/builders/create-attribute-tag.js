export const crateAttributFor = {
  Title1: (markup, idTag, context) =>{
    const titre = context.getAttribute('h1-'+idTag);
    markup.textContent = titre;
  },
  Title2: (markup, idTag, context) => {
      const titre = context.getAttribute('h2-'+idTag);
      markup.textContent = titre;
  },
  Title3: (markup, idTag, context) => {
    const titre = context.getAttribute('h3-'+idTag);
    markup.textContent = titre;
  },
  Title4: (markup, idTag, context) => {
    const titre = context.getAttribute('h4-'+idTag);
    markup.textContent = titre;
  },
  Title5: (markup, idTag, context) => {
    const titre = context.getAttribute('h5-'+idTag);
    markup.textContent = titre;
  },
  Title6: (markup, idTag, context) => {
    const titre = context.getAttribute('h6-'+idTag);
    markup.textContent = titre;
  },
  Para(markup, idTag, context) {
    const content = context.getAttribute('text-'+idTag);
    markup.textContent = content;
  },
  Link: (markup, idTag, context) => {
    const site = context.getAttribute('site-'+idTag),
      url = context.getAttribute('url-'+idTag),
      choice = context.getAttribute('choice-'+idTag)
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  },
  Img: (markup, idTag, context) => {
    const source = context.getAttribute('source-'+idTag),
      description = context.getAttribute('description-'+idTag);
    markup.setAttribute('src', source);
    markup.setAttribute('alt', description);
  }
}