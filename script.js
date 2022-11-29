const arr = ["Home", "About", "Contact us", "Downloads"];

// One way of redirecting menu's using array (innerHTML)

// for (let link of arr) {
//   document.getElementById("navbar-nav").innerHTML += ` <li class="nav-item">
//           <a class="nav-link" aria-current="page" href="${link}.html">${link}</a>
//         </li>`;
// }

// Another way of redirecting menu's using array (insertAdjacentHTML)

for (let link of arr) {
  document.getElementById("navbar-nav").insertAdjacentHTML(
    "beforeend",
    // BEFOREEND-Just inside the element, after its last child.

    ` <li class="nav-item">
                   <a class="nav-link" aria-current="page" href="${link}.html">${link}</a>
              </li>`
  );
}
