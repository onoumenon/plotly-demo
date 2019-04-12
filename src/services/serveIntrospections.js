const category = [
  { name: "Diversity and Inclusion", sector: [0, 45] },
  { name: "Religious Minorities", sector: [45, 90] },
  { name: "Society and Privilege", sector: [90, 135] },
  { name: "Climate Injustice", sector: [135, 180] },
  { name: "Equitable Tech", sector: [180, 225] },
  { name: "Sexual Orientation and Gender Identity", sector: [225, 270] },
  { name: "Racial Minorities", sector: [270, 315] },
  { name: "Economic Justice", sector: [315, 360] }
];

const data = [
  {
    time: Date.now(),
    name: "John Dory",
    email: "jd@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0].name, level: 4, action: ["would like to share"] },
      {
        category: category[1].name,
        level: 3,
        action: ["would like to explore", "would like to share"]
      },
      { category: category[2].name, level: 2, action: ["would like to learn"] },
      { category: category[3].name, level: 2, action: ["would like to learn"] },
      { category: category[4].name, level: 1, action: ["would like to learn"] },
      { category: category[5].name, level: 2, action: ["would like to learn"] },
      { category: category[6].name, level: 4, action: ["would like to share"] },
      { category: category[7].name, level: 2, action: ["would like to learn"] }
    ]
  },
  {
    time: Date.now(),
    name: "Anna Pavlova",
    email: "ap@thoughtworks.com",
    office: "Singapore",
    categories: [
      {
        category: category[0].name,
        level: 1,
        action: ["would like to deepen"]
      },
      { category: category[1].name, level: 4, action: ["would like to share"] },
      { category: category[2].name, level: 4, action: ["would like to share"] },
      { category: category[3].name, level: 4, action: ["would like to share"] },
      { category: category[4].name, level: 1, action: ["would like to learn"] },
      {
        category: category[5].name,
        level: 4,
        action: ["would like to share", "would like to deepen"]
      },
      {
        category: category[6].name,
        level: 2,
        action: ["would like to explore"]
      },
      { category: category[7].name, level: 3, action: ["would like to deepen"] }
    ]
  },
  {
    time: Date.now(),
    name: "Nellie Melba",
    email: "nb@thoughtworks.com",
    office: "Singapore",
    categories: [
      {
        category: category[0].name,
        level: 1,
        action: ["would like to explore"]
      },
      {
        category: category[1].name,
        level: 2,
        action: ["would like to explore"]
      },
      { category: category[2].name, level: 3, action: ["would like to share"] },
      { category: category[3].name, level: 4, action: ["would like to share"] },
      {
        category: category[4].name,
        level: 2,
        action: ["would like to deepen", "would like to explore"]
      },
      {
        category: category[5].name,
        level: 3,
        action: ["would like to explore"]
      },
      {
        category: category[6].name,
        level: 3,
        action: ["would like to explore"]
      },
      { category: category[7].name, level: 4, action: ["would like to share"] }
    ]
  },
  {
    time: Date.now(),
    name: "James Salisbury",
    email: "js@thoughtworks.com",
    office: "Singapore",
    categories: [
      { category: category[0].name, level: 4, action: ["would like to share"] },
      {
        category: category[1].name,
        level: 1,
        action: ["would like to explore"]
      },
      {
        category: category[2].name,
        level: 2,
        action: ["would like to deepen"]
      },
      {
        category: category[3].name,
        level: 3,
        action: ["would like to explore", "would like to deepen"]
      },
      { category: category[4].name, level: 4, action: ["would like to share"] },
      {
        category: category[5].name,
        level: 1,
        action: ["would like to explore"]
      },
      { category: category[6].name, level: 4, action: ["would like to share"] },
      {
        category: category[7].name,
        level: 1,
        action: ["would like to explore"]
      }
    ]
  }
];

const findOne = tarName => {
  const oneDatum = data.find(a => a.name === tarName);
  return [oneDatum];
};

const findAllExcept = tarName => {
  const oneDatum = data.find(a => a.name === tarName);
  const index = data.indexOf(oneDatum);
  const copy = data.slice();
  copy.splice(index, 1);
  return copy;
};

const getCategoriesByOffice = office => {
  const tarOffice = data.filter(a => a.office === office);
  const categories = new Set();
  tarOffice.forEach(empl =>
    empl.categories.forEach(elem => {
      if (categories.has) categories.add(elem.category);
    })
  );
  return Array.from(categories).map(elem => elem.name);
};

const getCategoryBrick = (categoryName, office) => {
  const brick = {
    name: categoryName,
    action: {}
  };
  let tarOfficeCategories = data
    .filter(a => a.office === office)
    .map(empl => empl.categories)
    .flat();
  tarOfficeCategories = tarOfficeCategories.filter(
    elem => elem.category === "Religious Minorities"
  );

  tarOfficeCategories.forEach(empl => {
    empl.action.forEach(action => {
      if (!brick.action[action]) {
        brick.action[action] = 0;
      }
      brick.action[action] += 1;
    });
  });

  return brick;
};

export { findOne, findAllExcept, getCategoriesByOffice, getCategoryBrick };
export default data;