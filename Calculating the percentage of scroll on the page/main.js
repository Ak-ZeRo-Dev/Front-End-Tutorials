document.body.style.height = `5000px`;

const ele = document.createElement(`div`);
ele.style.cssText = `
background-color: #ed143d;
height: 5px;
position: fixed;
left: 0;
top: 0;
z-index: 99999999;
`;

document.body.append(ele);

const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

onscroll = (_) => {
  const scrollTop = document.documentElement.scrollTop;
  ele.style.width = `${(scrollTop / height) * 100}%`;
};
