$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling:true,
        lockAnchors:false,
        anchors:['first','second','third','fourth'],
        navigation:true,
        navigationTooltips:['JOLYN','사회적가치','최상의품질','CONTACT US'],
        showActiveTooltip:true,
        sectionsColor:['#ffcccc','#ffffcc','#ffeecc','#ffb73a'],//섹션배경색
    });
});