window.onload = function() {
    imgLocation("container", "box");
};

function imgLocation(parent, content) {
    var tparent = document.getElementById(parent);

    var tcontent = getChildContent(tparent, content);
    // console.log(tcontent.length)
    var imgWidth = tcontent[0].offsetWidth; //172px
    var nrows = Math.floor(document.documentElement.clientWidth / imgWidth);
    // console.log(imgWidth,nrows);
    // 172 10
    tparent.style.cssText = "width:" + nrows * imgWidth + "px;margin: 0px auto";
    var imgHeightAttr = [];
    for (var i = 0; i < tcontent.length; i++) {
        if (i < nrows) {
            console.log(i);
            imgHeightAttr[i] = tcontent[i].offsetHeight;
        }
        else{
            var minHeight = Math.min.apply(null, imgHeightAttr);// minimum number
            var minIndex = getMinIndex(imgHeightAttr, minHeight);
            console.log(minHeight,minIndex);
            tcontent[i].style.position = "absolute";
            tcontent[i].style.top = minHeight + "px";
            tcontent[i].style.left = tcontent[minIndex].offsetLeft + "px";
            imgHeightAttr[minIndex] += tcontent[i].offsetHeight;
        }
    }
}

function getChildContent(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");

    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}


function getMinIndex(imgHeightAttr, minHeight) {
    for (var j in imgHeightAttr) {
        if (imgHeightAttr[j] == minHeight) {
            return j;
        }
    }
}