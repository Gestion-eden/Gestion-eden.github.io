const mainTitle = document.querySelector('.title');
const mainNav=document.querySelector('.mainNavbar');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Keyword_element_1 = entry.target.querySelector('.keyword_list li:nth-child(1)');
    const Keyword_element_2 = entry.target.querySelector('.keyword_list li:nth-child(2)');
    const Keyword_element_3 = entry.target.querySelector('.keyword_list li:nth-child(3)');

    if (entry.isIntersecting) {
      console.log("yes");
      mainTitle.classList.add('MainTitle');
      Keyword_element_1.classList.add('Keyword_element_animate');
      Keyword_element_2.classList.add('Keyword_element_animate');
      Keyword_element_3.classList.add('Keyword_element_animate');
      console.log("yes");

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

observer1.observe(document.querySelector('.Keyword_container'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const Keyword_title = entry.target.querySelector('.Org_title');

    if (entry.isIntersecting) {
      console.log("yes");
      //Keyword_title.classList.add('typing');
      //mainNav.classList.add('sticky');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    //Keyword_title.classList.remove('typing');
    //mainNav.classList.remove('sticky');
  });
});

observer2.observe(document.querySelector('.Organisation_container'));


const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const Soumission_email = entry.target.querySelector('.Soumission_email');

    const soumission_item_1 = entry.target.querySelector('.soumission_item:nth-child(1)');
    const soumission_item_2 = entry.target.querySelector('.soumission_item:nth-child(2)');
    const soumission_item_3 = entry.target.querySelector('.soumission_item:nth-child(3)');
    const soumission_item_4 = entry.target.querySelector('.soumission_item:nth-child(4)');
    const soumission_item_5 = entry.target.querySelector('.soumission_item:nth-child(5)');
    const soumission_item_6 = entry.target.querySelector('.soumission_item:nth-child(6)');
    const soumission_item_7 = entry.target.querySelector('.soumission_item:nth-child(7)');

    if (entry.isIntersecting) {
      console.log("yes");
      soumission_item_1.classList.add('animate_perspective_and_rotate');
      soumission_item_2.classList.add('animate_perspective_and_rotate');
      soumission_item_3.classList.add('animate_perspective_and_rotate');
      soumission_item_4.classList.add('animate_perspective_and_rotate');
      soumission_item_5.classList.add('animate_perspective_and_rotate');
      soumission_item_6.classList.add('animate_perspective_and_rotate');
      /*soumission_item_7.classList.add('animate_perspective_and_rotate');*/
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    soumission_item_1.classList.remove('animate_perspective_and_rotate');
    soumission_item_2.classList.remove('animate_perspective_and_rotate');
    soumission_item_3.classList.remove('animate_perspective_and_rotate');
    soumission_item_4.classList.remove('animate_perspective_and_rotate');
    soumission_item_5.classList.remove('animate_perspective_and_rotate');
    soumission_item_6.classList.remove('animate_perspective_and_rotate');
    //soumission_item_7.classList.remove('animate_perspective_and_rotate');
  });
});

observer3.observe(document.querySelector('.Soumission_email'));


/**const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const org_el_1 = entry.target.querySelector('#org_el_1');
    const org_el_3 = entry.target.querySelector('#org_el_3');
    const org_el_4 = entry.target.querySelector('#org_el_4');

    if (entry.isIntersecting) {
      console.log("yes");
      org_el_1.classList.add('org_el_1_position');
      org_el_3.classList.add('org_el_3_position');
      org_el_4.classList.add('org_el_4_position');
      /*soumission_item_7.classList.add('animate_perspective_and_rotate');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    org_el_1.classList.remove('org_el_1_position');
    org_el_3.classList.remove('org_el_3_position');
    org_el_4.classList.remove('org_el_4_position');
    //soumission_item_7.classList.remove('animate_perspective_and_rotate');
  });
});

//observer4.observe(document.querySelector('.Organisation_container'));**/


document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    )
    + 'px'
  );
}



