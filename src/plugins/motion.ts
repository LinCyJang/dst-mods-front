import { animate } from "motion";
import { interpolate } from "flubber";
const paths = {
  star: {
    color: "#fff208",
    d:
      "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  },
  heart: {
    color: "#ff2965",
    d:
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  }
};
const path = document.querySelector("path");

let currentPath = paths.star;

path.setAttribute("fill", currentPath.color);
path.setAttribute("d", currentPath.d);

const transition = { duration: 0.4 };

function togglePath() {
  currentPath = currentPath === paths.star ? paths.heart : paths.star;

  const mixPaths = interpolate(path.getAttribute("d"), currentPath.d, {
    maxSegmentLength: 0.1
  });

  animate(path, { fill: currentPath.color }, transition);
  animate((progress) => path.setAttribute("d", mixPaths(progress)), transition);
}

setTimeout(togglePath, 1000);

path.addEventListener("click", togglePath);