
const esprit = document.querySelector('.esprit');


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Gestion_box_container_1 = entry.target.querySelector('.Gestion_box_list li:nth-child(1)');
    const Gestion_box_container_2 = entry.target.querySelector('.Gestion_box_list li:nth-child(2)');
    const Gestion_box_container_3 = entry.target.querySelector('.Gestion_box_list li:nth-child(3)');
    const Gestion_box_container_4 = entry.target.querySelector('.Gestion_box_list li:nth-child(4)');
    const Gestion_box_container_5 = entry.target.querySelector('.Gestion_box_list li:nth-child(5)');

    if (entry.isIntersecting) {
      console.log("yes");
      Gestion_box_container_1.classList.add('box');
      Gestion_box_container_2.classList.add('box');
      Gestion_box_container_3.classList.add('box');
      Gestion_box_container_4.classList.add('box');
      Gestion_box_container_5.classList.add('box');
      esprit.classList.add('fade');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    Gestion_box_container_1.classList.remove('box');
    Gestion_box_container_2.classList.remove('box');
    Gestion_box_container_3.classList.remove('box');
    Gestion_box_container_4.classList.remove('box');
    Gestion_box_container_5.classList.remove('box');
    esprit.classList.remove('fade');
  });
});

observer2.observe(document.querySelector('.Gestion_box_list'));
