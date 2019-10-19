let g_nsmEditor = [];

function editBlogEditor(id) {
    showBlogEditor();

    let editContent = "";
    g_Contents.readContents().forEach(content => {
       if( content.id == id ) {
           g_nsmEditor.getById["ir1"].exec("PASTE_HTML", [unescape(content.body)]);
       }
    });

}

function showBlogEditor() {
    $("#writeBlog").removeClass('hideDiv');
    $("#blogList").addClass('hideDiv');
    $('#ir').text("");
    g_nsmEditor.getById["ir1"].exec("LOAD_CONTENTS_FIELD");

}

function showBlogList() {
    $("#writeBlog").addClass('hideDiv');
    $("#blogList").removeClass('hideDiv');

    $('#blogContents').empty();
    g_Contents.readContents().forEach(content => {
        let htmlBody = `
          <li>
            <button onclick="editBlogEditor(${content.id})">수정</button>
            <br>
            ${unescape(content.body)}
          </li>
        `;
        $('#blogContents').append(htmlBody);
    });
}

function submitContents() {
    g_nsmEditor.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);	// 에디터의 내용이 textarea에 적용됨
    let contentBody = document.getElementById("ir1").value;
    if( g_Contents.writeContent(contentBody) )
    {
        alert('등록되었습니다.');
        showBlogList();
    }
}

window.onload = function () {
    $.ajaxSetup({async:false});

    nhn.husky.EZCreator.createInIFrame({
        oAppRef: g_nsmEditor,
        elPlaceHolder: "ir1",
        sSkinURI: "../naverEditor/SmartEditor2Skin.html",
        fCreator: "ny030303"
    });
};