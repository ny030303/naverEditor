class Contents {
    constructor() {
    }

    writeContent(body) {
        let result = 0;
        $.post(`/php/add-content.php`, {body: escape(body) }).done(value => {
            console.log(value);
            result = value;
        });
        return result;
    }

    readContents() {
        let results = [];
        $.getJSON(`/php/get-contents.php`).done(values => {
            console.log(values);
            results = values.arr;
        });
        return results;
    }
}
let g_Contents = new Contents();