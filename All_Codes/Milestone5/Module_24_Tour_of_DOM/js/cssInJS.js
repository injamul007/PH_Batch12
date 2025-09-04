//? 

// console.log("File Connected");

// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections)

for(const section of sections) {
  // console.log(section)
  section.style.backgroundColor = 'lightblue';
  section.style.border = '3px solid green';
  section.style.marginBottom = '8px';
  section.style.borderRadius = '14px';
  section.style.padding = '14px';
  // section.classList.add('bg_lightblue');
  // section.classList.add('margin_bottom');
  // section.classList.add('padding');
  // section.classList.add('border_radius');
  // section.classList.add('section_styles');
}