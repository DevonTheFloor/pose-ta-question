export default function observAddAttribute(q, targetId, imgId, urlImg, style) {
  const ratio = q;
  var observer;
  let setSrc = (entries, observer)=> {
    entries.forEach(entry => {
      if(entry.intersectionRatio > ratio){ 
        observer.unobserve(entry.target)
        const imgToSet = document.getElementById(imgId);
        imgToSet.setAttribute('src', urlImg);
        imgToSet.classList.add(style);
      } 
    })
  }
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
  };
  observer = new IntersectionObserver(
    setSrc,
    options,
  );
  const  target = document.getElementById(targetId);
  observer.observe(target);
}
