$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling:true,
        lockAnchors:false,
        anchors:['first','second','third','fourth'],
        navigation:true,
        navigationTooltips:['섹션이름1','섹션이름2','섹션이름3','섹션이름4'],
        showActiveTooltip:true,
        sectionsColor:['#ffcccc','#ffffcc','#ffeecc','#ffeeaa'],//섹션배경색
    });
});