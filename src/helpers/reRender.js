const reRender = async (elementRender, content, id) => {

    document.querySelector(elementRender).innerHTML = await content.render(id);

    //sau khi content đã render xong thì afterrender mới được chạy
    if (content.afterRender) {
        content.afterRender();
    }
}
export default reRender;