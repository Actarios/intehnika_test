jQuery(document).ready(function(e) {
    const selectAllBtn = $('#select_all')
    const selectProduct = $('.product .checkbox')
    const deleteSelected = $('.delete-select')
    const removeFromCard = $('.product__icons')

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

   
});