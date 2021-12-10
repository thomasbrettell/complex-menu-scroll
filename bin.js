// if (scrollPosBotRelative >= sideContentHeight + scrollOffsetTop) {
//   const heightDifference =
//     $window.height() - sideContentHeight - DIST_BOT_AND_SIDE;
//   $sideContent.css({
//     position: 'sticky',
//     top: `${heightDifference}px`,
//     'margin-top': 0,
//   });
// }

// if (scrollOffsetTop >= scrollPos) {
//   const heightDifference =
//     $window.height() - sideContentHeight - DIST_BOT_AND_SIDE;
//   $sideContent.css({
//     position: 'sticky',
//     top: `${heightDifference}px`,
//     'margin-top': 0,
//   });
// }

//check if scrolling up or down
// if (scrollPos > prevScrollPos) {
//   currentDirect = 'DOWN_SCROLL';
//   if (scrollPosBotRelative >= sideContentHeight + scrollOffsetTop) {
//     const heightDifference = $window.height() - sideContentHeight - 40;
//     $sideContent.css({
//       position: 'sticky',
//       top: `${heightDifference}px`,
//       'margin-top': 0,
//     });
//   }
// } else {
//   currentDirect = 'UP_SCROLL';
//   $sideContent.css({
//     position: 'relative',
//     top: '0px',
//     'margin-top': `${Math.max(distTopAndSide, 0)}px`,
//   });
// }
// prevScrollPos = scrollPos <= 0 ? 0 : scrollPos;

// if (scrollPosBotRelative >= sideContentHeight + scrollOffsetTop) {
//   const heightDifference = $window.height() - sideContentHeight - 40;
//   $sideContent.css({
//     position: 'sticky',
//     top: `${heightDifference}px`,
//     'margin-top': 0,
//   });
// } else {
//   // $sideContent.css({ position: 'relative', top: '0px', 'margin-top': `${distTopAndSide}px` });
// }
