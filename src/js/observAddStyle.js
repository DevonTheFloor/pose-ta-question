export default function observeIt(q, style, targetId) {
    const ratio = q,
    options = {
      root: null,//document.querySelector('#observed'),
      rootMargin: '0px',
      threshold: ratio
      }
  
    let voir = function(entries, observer) {
      entries.forEach(entry => {
        if(entry.intersectionRatio > ratio){ 
          observer.unobserve(entry.target)
          entry.target.classList.add(style);
        } 
      })
    }
  
    let observer = new IntersectionObserver(voir, options);
  
    let target = document.querySelector(targetId);
    observer.observe(target);
  }