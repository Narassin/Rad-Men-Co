document.getElementById('svgForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var sections = parseInt(document.getElementById('sections').value);
    var sizeO = parseInt(document.getElementById('size').value);
    var thick = parseInt(document.getElementById('thick').value);
    var offset = parseInt(document.getElementById('offset').value);
 
    var angle = 360 / sections;
    // size = radius
    // var svgCode = '<svg width="' + (size * 2) + '" height="' + (size * 2) + '">';
    var svgCode = '<svg viewBox=" 0 0 ' + ((offset * 2) + (sizeO * 2)) + ' ' + ((offset * 2) + (sizeO * 2)) + '">';

    // Formula to get a point on a circle
    // for (var i = 0; i < sections; i++) {
    //     var startAngle = i * angle;
    //     var endAngle = (i + 1) * angle;

    //     var startX = size + size * Math.cos(startAngle * Math.PI / 180);
    //     var startY = size + size * Math.sin(startAngle * Math.PI / 180);

    //     var endX = size + size * Math.cos(endAngle * Math.PI / 180);
    //     var endY = size + size * Math.sin(endAngle * Math.PI / 180);

    //     svgCode += '<path d="M ' + size + ' ' + size + ' L ' + startX + ' ' + startY + ' A ' + size + ' ' + size + ' 0 0 1 ' + endX + ' ' + endY + ' Z" fill="none" stroke="black" />';
    // }

    // FUNNY FAILED ATTEMPT
//     for (var i = 0; i < sections; i++) {
//         var startAngle = i * angle;
//         var endAngle = (i + 1) * angle; 
//         var sizeI = sizeO - thick;

//         var XO1 = sizeO + sizeO * Math.cos(startAngle * Math.PI / 180);
//         var XI1 = sizeO + sizeI * Math.cos(startAngle * Math.PI / 180);
//         var YO1 = sizeO + sizeO * Math.sin(startAngle * Math.PI / 180);
//         var YI1 = sizeO + sizeI * Math.sin(startAngle * Math.PI / 180);

//         var XO2 = sizeO + sizeO * Math.cos(endAngle * Math.PI / 180);
//         var XI2 = sizeO + sizeI * Math.cos(endAngle * Math.PI / 180);
//         var YO2 = sizeO + sizeO * Math.sin(endAngle * Math.PI / 180);
//         var YI2 = sizeO + sizeI * Math.sin(endAngle * Math.PI / 180);
             
//         // svg created, need to rewrite the code so it adhere to the creating of mulitiple section
//         svgCode += '<path d="M ' + XO1 + ' ' + YO1 + 'A' + sizeO + ' ' + sizeO + ' 0 0 1 ' + XO2 + ' ' + YO2  + ' L ' + XI2 + ' ' + YI2 + ' A ' + sizeI + ' ' + sizeI + ' 0 0 1 ' + XI1 + ' ' + YI1 + ' Z" fill="none" stroke="black" />';
        

// }


    // Formula to point for a donut section
    for (var i = 0; i < sections; i++) {
        var startAngle = i * angle;
        var endAngle = (i + 1) * angle; 
        var sizeI = sizeO - thick;

        var XO1 = offset + sizeO + sizeO * Math.cos(startAngle * Math.PI / 180);
        var XI1 = offset + sizeO + sizeI * Math.cos(startAngle * Math.PI / 180);
        var YO1 = offset + sizeO + sizeO * Math.sin(startAngle * Math.PI / 180);
        var YI1 = offset + sizeO + sizeI * Math.sin(startAngle * Math.PI / 180);
        var XO2 = offset + sizeO + sizeO * Math.cos(endAngle * Math.PI / 180);
        var XI2 = offset + sizeO + sizeI * Math.cos(endAngle * Math.PI / 180);
        var YO2 = offset + sizeO + sizeO * Math.sin(endAngle * Math.PI / 180);
        var YI2 = offset + sizeO + sizeI * Math.sin(endAngle * Math.PI / 180);
             
        // svg created, need to rewrite the code so it adhere to the creating of mulitiple section
        svgCode += '<path d="M ' + XO1 + ' ' + YO1 + ' A' + sizeO + ' ' + sizeO + ' 0 0 1 ' + XO2 + ' ' + YO2  + ' L ' + XI2 + ' ' + YI2 + ' A ' + sizeI + ' ' + sizeI + ' 0 0 0 ' + XI1 + ' ' + YI1 + ' Z" fill="blue" stroke="black" />';
        // <path d="M 50 160 A 300 300 0 0 1 310 10 L 310 110 A 200 200 0 0 0 136 210 Z" fill="rgba(255,255,255,0.3)"/>
                            

}

    svgCode += '</svg>';

    document.getElementById('svgOutput').innerHTML = '<textarea readonly>' + svgCode + '</textarea>';
    document.getElementById('previewOut').style.display = 'block';
    document.getElementById('previewOut').innerHTML = svgCode;
});