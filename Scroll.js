const mainTitle = document.querySelector('.title');
const mainNav=document.querySelector('.mainNavbar');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Keyword_element_1 = entry.target.querySelector('.Keyword_element:nth-child(1)');
    const Keyword_element_2 = entry.target.querySelector('.Keyword_element:nth-child(2)');
    const Keyword_element_3 = entry.target.querySelector('.Keyword_element:nth-child(3)');

    if (entry.isIntersecting) {
      console.log("yes");
      mainTitle.classList.add('MainTitle');
      Keyword_element_1.classList.add('Keyword_element_animate');
      Keyword_element_2.classList.add('Keyword_element_animate');
      Keyword_element_3.classList.add('Keyword_element_animate');
      //console.log("yes");

	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    Keyword_element_1.classList.remove('Keyword_element_animate');
    Keyword_element_2.classList.remove('Keyword_element_animate');
    Keyword_element_3.classList.remove('Keyword_element_animate');
    mainTitle.classList.remove('MainTitle');
  });
});

observer1.observe(document.querySelector('.Keyword_list'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const Keyword_title = entry.target.querySelector('.Org_title');

    if (entry.isIntersecting) {
      console.log("yes");
      Keyword_title.classList.add('typing');
      //mainNav.classList.add('sticky');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    Keyword_title.classList.remove('typing');
    //mainNav.classList.remove('sticky');
  });
});

observer2.observe(document.querySelector('.Organisation_container'));
