        $(document).ready(function($){
        
                $('.listSearch h5').each(function(){
                    $(this).attr('searchData', $(this).text().toLowerCase());
                });
                $('.boxSearch').on('keyup', function(){
                var dataList = $(this).val().toLowerCase();
                    $('.listSearch h5').each(function(){
                        if ($(this).filter('[searchData *= ' + dataList + ']').length > 0 || dataList.length < 1) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                });
        
            });

