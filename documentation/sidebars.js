// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  opalSidebar: [
    {
      type: "doc",
      id: "welcome",
      label: "Welcome",
    },
    {
      type: "category",
      label: "Overview",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "overview",
        }
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        }
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials",
        }
      ],
    },
    {
      type: "doc",
      id: 'FAQ',
      label: "FAQ"
    },
  ],
};

module.exports = sidebars;
