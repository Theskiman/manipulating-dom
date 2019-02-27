  console.log("Linked main.js")

  /*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
  // const sectionEl = document.querySelector(".article__section")
  // console.log("Contents of variable sectionEl", sectionEl)

  console.log(document.querySelector(".article__section"))

  /*
      This code will only return the third section component
  */
  const footerEl = document.querySelector(".article__footer")
  console.log(footerEl)

  /*
      Get reference to the section with the class of `smallText`
      and remove that class. Then add a new class of `largeText`
  */


  const smallTextEl = document.querySelector(".smallText")
  smallTextEl.classList.remove("smallText")
  smallTextEl.classList.add("largeText")

  /*
      This code will return all section components
  */
  const sectionEl = document.querySelectorAll(".article__section")
  console.log("all elements with class article_section", sectionEl)

  for (let i = 0; i < sectionEl.length; i++) {
      sectionEl[i].classList.add("new_class")
  }