jQuery(document).ready(function(e) {
    const selectAllBtn = $('#select_all')
    const selectProduct = $('.product .checkbox')
    const deleteSelected = $('.delete-select')
    const removeFromCard = $('.product__icons_remove')
    const vaforiteProduct = $('.product__icons_favorite')
    const productAmount = $('.product__amount')

    selectAllBtn.on('click', () => {
        selectProduct.prop('checked', true)
        if (!selectAllBtn.is(':checked')) {
            selectProduct.prop('checked', false)
        }
    })

    deleteSelected.on('click', () => {
        $('input:checkbox:checked').each(function(){
            $(this).parents().eq(1).remove()
        })
    })

    removeFromCard.on('click', (e) => {
        $(e.target).parents('.product')[0].remove()
    })

    vaforiteProduct.on('click', (e) => {
        const elem = $(e.target)[0]
        if ($(e.target).hasClass('active')) {
            elem.src = './images/heart.svg'
            $(e.target).removeClass('active')
        } else {
            elem.src = './images/heart_active.svg'
            $(e.target).addClass('active')
        }
    })
   
});