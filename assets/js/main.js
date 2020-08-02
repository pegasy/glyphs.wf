function LoadImageVersions(id, filename) {
  if ($(id).length && !$(id).children().length) {
    $.getJSON(
      `${BaseDataUrl}/versions/${filename}`,
      function (data) {
        $.each(data, function (ix, version) {
          var date = Date.parse(version.date);
          var tag = $(`<p>${version.date.split("T")[0]}</p>`);
          tag.append(
            `<img class="card-img-top glyph-bg" src="${BaseDataUrl}/version/${version.version}/${filename}" alt="${version.date}"></img>`
          );
          tag.appendTo(id);
        });
      }
    );
  }
}
