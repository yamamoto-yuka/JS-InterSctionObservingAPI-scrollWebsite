let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);
// [...]スプレット構文　＝ you can get the data in the Array 
// whithout this spret syntax = you can get the data in the nodeList
// 配列の方が取りやすい要素などがあるため


// .img-wrapを順にとってきた

let titles = [...document.querySelectorAll('h2')];
let titleMessage = document.querySelector('.title');


// 監視対象になった瞬間、activeを付加する関数
let setItemActive = (entries) =>{
  console.log(entries);
  // isIntersecting　 = tureになると交差した事になる
  // 対処にview portされた、画面にスクロールされるとtrueになる。
  entries.forEach((entry)=>{
    // console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }else{
      entry.target.classList.remove('active');
    }
  })
}

let options = {
  rootMargin: '0px',
  threshold: 0.5,
  // このラインを何か発生させる、閾値。 1がマックス。
}

// どの位置に来たらを監視してくれているAPI
// どこにいるのか監視する、そして、特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive, options);
observer.observe(titleMessage);

// img-wrapは偶数と奇数で出現する場所が違う。
imagesItems.map((item, index)=>{
  console.log(item, index);
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = '55%') : item.style.left = '5%';
  // 
  // condition ? expr1 (true condition) : expr2 (false condition)
  observer.observe(item);
})


titles.map((title, index) =>{
  index % 2 == 0? title.style.left = "45%" : title.style.left = "35%";
  observer.observe(title);
})