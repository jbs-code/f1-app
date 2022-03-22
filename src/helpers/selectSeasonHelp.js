export const selectSeasonHelp = () => {
    const buttonSeason = document.querySelector('.select-season__button');
    const selectSeason = document.querySelector('.select-season__ul');

    buttonSeason.addEventListener('click', () => {
        if (selectSeason.classList.contains('select-season__ul--oculto')) {
            selectSeason.classList.remove('select-season__ul--oculto');
            selectSeason.classList.add('select-season__ul--visible');
        }
        else {
            selectSeason.classList.remove('select-season__ul--visible');
            selectSeason.classList.add('select-season__ul--oculto');
        }
    });

    document.addEventListener("click", (e) => {
        var click = e.target;
        if (selectSeason.classList.contains('select-season__ul--visible') && click !== buttonSeason && click !== selectSeason) {
            selectSeason.classList.remove("select-season__ul--visible");
            selectSeason.classList.add("select-season__ul--oculto");
        }
    }, false);
}
