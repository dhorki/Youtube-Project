export const decodeHtml = (html) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export const lazyRemoveHtmlTags = (html) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value.replace(/<\/?[^>]+(>|$)/g, '');
};
