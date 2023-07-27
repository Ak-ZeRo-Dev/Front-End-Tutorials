const height = document.documentElement.scrollHeight - window.innerHeight;

onscroll = () => {
  document.querySelector(`.scroller`).style.width = `${
    (scrollY / height) * 100
  }%`;
};
