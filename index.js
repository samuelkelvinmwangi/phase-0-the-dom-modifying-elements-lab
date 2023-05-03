const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

li.textContent = "Hi there!";
// => <li>Hi there!</li>
console.log(li.textContent);
const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

  const elements = document.getElementById("main");

elements.style.height = "300px";
elements.style.backgroundColor = "#27647B";
elements.textContent = "You've changed what's on the screen!";
elements.style.fontSize = "24px";
elements.style.marginLeft = "30px";
elements.style.lineHeight = 2;
elements.className = "pet-listing dog";
<main id="main" class="pet-listing dog"></main>
element.classList.remove("dog");
element.classList.add("cat", "sale");
<main id="main" class="pet-listing cat sale"></main>
someElement.removeChild(someChildElement);
const ul1 = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);
