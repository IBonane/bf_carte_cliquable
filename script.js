$(document).ready(function(){
    $('[id*=region_').mouseover(function(){
        $('[id*=region_').css('fill', '#fff');
        $(this).css('fill', '#55d400');
    });
    $("[id*=region_]").click(function(){
        // console.log($(this)[0].id);
        //recupere les regions
        allregion = $('[id*=region_');
        region = $(this);
        console.log(region);
        allregion.css('fill', '#fff');
        region.css('fill', '#55d400')
        regionId = region[0].id.replace('region_','');
        $(this).parents().attr({
            "xlink:href": "#"+regionId
        });

        //regionId = region[0].id.replace('region_','');
        let underscore = true;
        do{
            regionId = regionId.replace('_', ' ');
            if(regionId.indexOf('_') == -1){
                underscore = false;
            }

        }while(underscore)
        console.log(regionId);
    });      
});