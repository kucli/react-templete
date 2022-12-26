const worker = new Worker('work.js'); // 此处写待处理的地址
const data = [1, 2, 3, 4, 5, 6, 7];
worker.postMessage(data);

worker.onmessage = function (event) {
  console.log(event.data);
  document.querySelector('ul').innerHTML = event.data;
};

// 此部分是work.js中
this.addEventListener('message', (data) => {
  const str = render(data.data);
  this.postMessage(str);
});

function render(data) {
  let str = '';
  data.forEach((i) => {
    str += `<li>${i}</li>`;
  });
  return str;
}
