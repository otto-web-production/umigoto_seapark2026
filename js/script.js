

//swiper
const swiperFarm = new Swiper(".swiper-about", {
  loop: true, // ループ
  speed: 6000, // 少しゆっくり
  slidesPerView: 'auto',
  allowTouchMove: false,
  autoplay: { // 自動再生
    delay: 0, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
});

//drawer
jQuery('.body-menu').on('click',function(e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-icon__bars').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
    jQuery("body").toggleClass("is-active");

    return false;
  });

// drawer閉じる動作
  function closeDrawer() {
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-icon__bars').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-background').removeClass('is-active');
  jQuery("body").removeClass("is-active");
}


//bun
jQuery('.drawer-content a[href^="#"]').on('click', function(e) {
  e.preventDefault();

  const id = jQuery(this).attr('href');

  // TOP(#)も0へ
  const offsetAdjustment = 0;
  const position = (id === '#')
    ? 0
    : (jQuery(id).length ? jQuery(id).offset().top - offsetAdjustment : 0);

  closeDrawer();

  jQuery('html, body').stop(true).delay(500).animate(
    { scrollTop: position },
    300
  );
});


jQuery('.pc-left a[href^="#"], a.hp-body-bottom[href^="#"]').on('click', function(e) {
  e.preventDefault();

  const id = jQuery(this).attr('href');

  const offsetAdjustment = 0;
  const position = (id === '#')
    ? 0
    : (jQuery(id).length ? jQuery(id).offset().top - offsetAdjustment : 0);

  jQuery('html, body').stop(true).animate(
    { scrollTop: position },
    300
  );
});


//snsシェア
document.addEventListener("DOMContentLoaded", () => {
  const url = encodeURIComponent(location.href);
  const title = encodeURIComponent(document.title);

  // X（旧Twitter）
  const x = document.querySelector(".js-share-x");
  if (x) {
    x.href = `https://twitter.com/share?url=${url}&text=${title}`;
  }

  // Facebook
  const fb = document.querySelector(".js-share-facebook");
  if (fb) {
    fb.href = `https://www.facebook.com/share.php?u=${url}`;
  }

  // LINE
  const line = document.querySelector(".js-share-line");
  if (line) {
    line.href = `https://social-plugins.line.me/lineit/share?url=${url}`;
  }
});


//下から要素をふわっと出現
document.documentElement.classList.add("js-enabled");

const targets = document.querySelectorAll(".js-animate");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      // main-bodyだけ、順番に少し遅らせる（0ms, 120ms, 240ms...）
      if (el.classList.contains("main-body")) {
        const allMain = Array.from(document.querySelectorAll(".main-body"));
        const index = allMain.indexOf(el);
        el.style.setProperty("--delay", `${index * 120}ms`);
      }

      el.classList.add("is-in");
      obs.unobserve(el);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
);

targets.forEach((el) => observer.observe(el));


// 回転用：表示されたら1回だけ回す
const rotateTargets = document.querySelectorAll(".js-rotate");

const rotateObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-rotating");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);

rotateTargets.forEach((el) => rotateObserver.observe(el));


//girl持ち上げ
document.addEventListener("DOMContentLoaded", () => {
  const girls = document.querySelectorAll(".js-girl");

  setTimeout(() => {
    girls.forEach((el) => el.classList.add("is-play"));
  }, 1500);
});

