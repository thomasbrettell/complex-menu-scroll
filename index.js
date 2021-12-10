function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf('?') + 1)
    .split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

const ARTICLES_AMOUNT = 50;
const $mainContent = $('#main-content');
const $sideContent = $('#side-content');
const $window = $(window);
const $header = $('header');

const createArticle = (root) => {
  const article = document.createElement('div');
  article.classList = 'fake-article';
  root.append(article);
};

const createSideItem = (root, i) => {
  const item = document.createElement('div');
  item.classList = 'side-item';
  const iEl = document.createElement('p');
  iEl.append(i);
  item.append(iEl);
  root.append(item);
};

for (let i = 0; i < 50; i++) {
  createArticle($mainContent);
}

const sideContentLength = getUrlVars().amount
  ? parseInt(getUrlVars().amount)
  : 4;
console.log(sideContentLength);
for (let i = 0; i < sideContentLength; i++) {
  createSideItem($sideContent, i);
}
//SETUP END

const DOWN_SCROLL = 'DOWN_SCROLL';
const UP_SCROLL = 'UP_SCROLL';

let prevScrollPos = $window.scrollTop();
let prevScrollDirection = null;

const DIST_TOP_AND_SIDE = 65;
const DIST_BOT_AND_SIDE = 75;

const onScroll = () => {
  if ($sideContent.height() < $window.height()) return;
  const scrollPos = $window.scrollTop();
  const scrollOffsetTop = $sideContent.offset().top;
  const scrollPosBotRelative = scrollPos + $window.height();
  const sideContentHeight = $sideContent.height();
  const distTopAndSide = scrollPosBotRelative - sideContentHeight;

  if (scrollPos > prevScrollPos) {
    const currentDirect = DOWN_SCROLL;

    if (currentDirect !== prevScrollDirection) {
      prevScrollDirection = currentDirect;
      console.log('scrolling down');
      $header.addClass('up');

      const heightDifference = scrollOffsetTop - DIST_TOP_AND_SIDE;

      $sideContent.css({
        position: 'relative',
        top: '0px',
        'margin-top': `${heightDifference}px`,
      });
    }

    if (
      scrollPosBotRelative - DIST_BOT_AND_SIDE >=
      sideContentHeight + scrollOffsetTop
    ) {
      const heightDifference =
        $window.height() - sideContentHeight - DIST_BOT_AND_SIDE;
      $sideContent.css({
        position: 'sticky',
        top: `${heightDifference}px`,
        'margin-top': 0,
      });
    }
  } else {
    const currentDirect = UP_SCROLL;

    if (currentDirect !== prevScrollDirection) {
      prevScrollDirection = currentDirect;
      console.log('scrolling up');
      $header.removeClass('up');

      $sideContent.css({
        position: 'relative',
        top: '0px',
        'margin-top': `${Math.max(
          distTopAndSide - (DIST_TOP_AND_SIDE + DIST_BOT_AND_SIDE),
          0
        )}px`,
      });
    }

    if (scrollOffsetTop >= scrollPos + 65) {
      $sideContent.css({
        position: 'sticky',
        top: '65px',
        'margin-top': '0px',
      });
    }
  }
  prevScrollPos = scrollPos <= 0 ? 0 : scrollPos;
};

document.addEventListener('scroll', onScroll);
