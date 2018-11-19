// chrome.bookmarks.getChildren("5", function(results) {
//   console.log(results);
// });

// chrome.bookmarks.getSubTree("5", function(results) {
//   console.log(results);
// });

// function checkTitle(results) {
//   if();
// }
/*
chrome.bookmarks.search("coding resources", function(results) {
  results.map(result => console.log(result.id));
});
*/

// get the id

// const getChildren = x => {
//   chrome.bookmarks.search(x, result => {
//     result.map(childrenResult => {
//       console.log(childrenResult.id);
//       chrome.bookmarks.getChildren(childrenResult.id, results => {
//         results.map(result => {
//           chrome.bookmarks.create(
//             {
//               title: result.title,
//               url: result.url
//             },
//             result => console.log(result)
//           );
//         });
//       });
//     });
//   });
// };

// getChildren("coding resources");
