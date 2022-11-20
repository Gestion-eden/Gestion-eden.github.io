
const esprit = document.querySelector('.esprit');


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Gestion_box_container_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1)');
    const Gestion_box_container_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2)');
    const Gestion_box_container_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3)');
    const Gestion_box_container_4 = entry.target.querySelector('.Gestion_box_list li:nth-child(4)');
    const Gestion_box_container_5 = entry.target.querySelector('.Gestion_box_list li:nth-child(5)');


    const Gestion_box_header_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1) h1');
    const Gestion_box_header_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2) h1');
    const Gestion_box_header_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3) h1');
    const Gestion_box_header_4 = entry.target.querySelector('.Gestion_box_list li:nth-child(4) h1');
    const Gestion_box_header_5 = entry.target.querySelector('.Gestion_box_list li:nth-child(5) h1');

    const Gestion_box_description_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1) p2');
    const Gestion_box_description_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2) p2');
    const Gestion_box_description_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3) p2');
    const Gestion_box_description_4 = entry.target.querySelector('.Gestion_box_list li:nth-child(4) p2');
    const Gestion_box_description_5 = entry.target.querySelector('.Gestion_box_list li:nth-child(5) p2');

    if (entry.isIntersecting) {
      console.log("yes");
      Gestion_box_container_1.classList.add('border-trace');
      Gestion_box_container_2.classList.add('border-trace');
      Gestion_box_container_3.classList.add('border-trace');
      Gestion_box_container_4.classList.add('border-trace');
      Gestion_box_container_5.classList.add('border-trace');

      Gestion_box_header_1.classList.add('fade');
      Gestion_box_header_2.classList.add('fade');
      Gestion_box_header_3.classList.add('fade');
      Gestion_box_header_4.classList.add('fade');
      Gestion_box_header_5.classList.add('fade');

      Gestion_box_description_1.classList.add('fade');
      Gestion_box_description_2.classList.add('fade');
      Gestion_box_description_3.classList.add('fade');
      Gestion_box_description_4.classList.add('fade');
      Gestion_box_description_5.classList.add('fade');

      esprit.classList.add('fade');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    Gestion_box_container_1.classList.remove('border-trace');
    Gestion_box_container_2.classList.remove('border-trace');
    Gestion_box_container_3.classList.remove('border-trace');
    Gestion_box_container_4.classList.remove('border-trace');
    Gestion_box_container_5.classList.remove('border-trace');


    Gestion_box_header_1.classList.remove('fade');
    Gestion_box_header_2.classList.remove('fade');
    Gestion_box_header_3.classList.remove('fade');
    Gestion_box_header_4.classList.remove('fade');
    Gestion_box_header_5.classList.remove('fade');

    Gestion_box_description_1.classList.remove('fade');
    Gestion_box_description_2.classList.remove('fade');
    Gestion_box_description_3.classList.remove('fade');
    Gestion_box_description_4.classList.remove('fade');
    Gestion_box_description_5.classList.remove('fade');
    esprit.classList.remove('fade');
  });
});

observer2.observe(document.querySelector('.Gestion_box_list'));



const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const Soumission_email = entry.target.querySelector('.Soumission_email');

    const soumission_img = entry.target.querySelector('.Soumission_image');

    if (entry.isIntersecting) {
      console.log("yes");
      /*soumission_item_7.classList.add('animate_perspective_and_rotate');*/
      //console.log("yes");
      soumission_img.classList.add('fade');
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!

    soumission_img.classList.remove('fade');

    //soumission_item_7.classList.remove('animate_perspective_and_rotate');
  });
});

observer3.observe(document.querySelector('.Soumission_email'));
