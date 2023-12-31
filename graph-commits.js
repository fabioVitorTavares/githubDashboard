import { Octokit } from "https://esm.sh/octokit";
const octokit = new Octokit({
  auth: `${process.env.TOKEN}`,
});
console.log(">>>", process.env.TOKEN);
console.log(">>>", window.process);

const OWNER = "fabioVitorTavares";
const REPOS = [
  "githubDashboard",
  "Habitus",
  "learningShellScript",
  "maratonaJavaDevDojo",
  "Animations",
  "divShootWithHtml2canvas",
  "projectWebTemplate",
  "pdfComponent",
  "guideDev",
  "products-list",
  "products-api",
  "Pagination-springboot",
  "Tasks-mobile",
  "my-portfolio",
  "endpoint-update-user",
  "Mask-components",
  "car-personalization",
  "Tasks",
  "Pagination-react",
  "send-email",
  "magic-cube",
  "Rotas-no-react",
  "Authenticated-Routes",
  "Tasks-Backend",
  "tasks-api",
  "login-page",
  "EFC1-GCC253---Complexidade-e-Projeto-de-Algoritmos",
  "de-bem-com-as-unhas",
  "ToDoList",
  "Simulacao-reacao-ao-panico-netlogo",
  "e-commerce",
  "fabioVitorTavares",
  "rocket-pay",
];

const colors = [
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
  "#618264",
  "#3085C3",
  "#D83F31",
  "#5B0888",
  "#D80032",
  "#B4B4B3",
  "#E55604",
  "#004225",
  "#FFB000",
  "#35A29F",
  "#FFCC70",
  "#662549",
  "#4F709C",
  "#AED2FF",
  "#A6FF96",
  "#A73121",
  "#D2DE32",
  "#9D44C0",
  "#0E21A0",
  "#C63D2F",
  "#94A684",
  "#A2C579",
  "#FFB6D9",
  "#7091F5",
  "#FFC436",
  "#279EFF",
  "#352F44",
  "#EBE76C",
  "#A8DF8E",
  "#85E6C5",
  "#F8DE22",
];

async function fetchCommits(repos) {
  const promises = repos?.map((repo) => {
    return octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: OWNER,
      repo,
    });
  });

  const responses = await Promise.allSettled(promises);

  const commits = responses.map((response, index) => {
    if (response?.status === "fulfilled") {
      return {
        repo: repos[index],
        commits: response?.value?.data,
      };
    }
  });

  return commits;
}

function getElement(id) {
  return document.getElementById(id);
}

async function generateGrphCommits(REPOS) {
  const commits = await fetchCommits(REPOS);

  const commitsByDate = commits
    .map((obj) => {
      return obj?.commits?.map(({ commit }) => {
        return {
          date: commit?.author?.date,
        };
      });
    })
    .flat(1)
    .map(({ date }) => new Date(date).toLocaleDateString());

  const commitDate = {};

  commitsByDate.reverse().flatMap((date, index) => {
    if (commitDate[date]) {
      commitDate[date].count += 1;
    } else {
      commitDate[date] = { count: 1 };
    }
    commitDate[date]["color"] = index;
  });

  const regexRemoveDay = /..\//;
  const months = [];
  const graphContainer = getElement("graph-commits-container");
  const sizeColumn = 50;
  graphContainer.style = `width: ${
    sizeColumn * (Object.keys(commitDate).length + 2) + 600
  }px`;
  for (const key in commitDate) {
    months.push(key.replace(regexRemoveDay, ""));

    const containerCollum = document.createElement("div");
    containerCollum.setAttribute("class", "container-collum");

    const column = document.createElement("div");
    column.setAttribute("class", "colum-graph-commits");
    column.setAttribute("id", `${key}`);
    column.style = `width: ${sizeColumn}px; height: ${
      commitDate[key].count * 20
    }px; background-color: ${colors[commitDate[key].color]}`;

    const newMonth = document.createElement("span");
    newMonth.setAttribute("class", "span-month");
    newMonth.innerHTML = key.replace(regexRemoveDay, "");

    containerCollum.appendChild(column);
    containerCollum.appendChild(newMonth);

    graphContainer.appendChild(containerCollum);

    column.addEventListener("mousemove", hoverGraph);
    column.addEventListener("mouseleave", outGraph);
  }

  const tooltipCommits = getElement("tooltip-graph-commits");

  function outGraph(e) {
    tooltipCommits.innerHTML = "";
    tooltipCommits.style = `display: none;`;
  }

  function hoverGraph(e) {
    const colorTooltip = colors[commitDate[e.target.id].color];
    tooltipCommits.innerHTML = `Date: ${e.target.id}<br>Commits: ${
      commitDate[e.target.id].count
    }`;
    tooltipCommits.style = `
      display: block;
      background-color: ${colorTooltip};
      left: ${e.pageX}px;
      top: ${e.pageY - 80}px;
      `;
  }

  const scrollDiv = getElement("scroll-graph-commits");
  // graphContainer.addEventListener("mousemove", scroolFunction);
  graphContainer.addEventListener("wheel", whellScroll);

  function scroolFunction(e) {
    const margem =
      Number(window.getComputedStyle(scrollDiv)["width"].replace("px", "")) /
      10;

    const marginLeft = margem * 2;
    const marginRight = margem * 8 + 80;
    if (e.layerX < marginLeft) {
      scrollDiv.scrollLeft -= 10;
    } else if (e.layerX > marginRight) {
      scrollDiv.scrollLeft += 10;
    }
  }

  function whellScroll(e) {
    e.preventDefault();
    scrollDiv.scrollLeft -= e.deltaY;
  }

  scrollDiv.scrollTo({ left: 14000 });
}

(async function main() {
  generateGrphCommits(REPOS);
})();
