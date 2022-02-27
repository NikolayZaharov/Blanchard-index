const defaultSelect = () => {
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
        allowHTML : true,
        searchEnabled: false ,
        itemSelectText: '',
        shouldSort: false,
    })
};


defaultSelect();

const myDefault = () => {
    const elements = document.querySelectorAll('.my-default');
    elements.forEach(el => {
        const choices = new Choices(el, {
            allowHTML : true,
            searchEnabled: false ,
            itemSelectText: '',
            shouldSort: false,
        }); 
    });

}

myDefault();