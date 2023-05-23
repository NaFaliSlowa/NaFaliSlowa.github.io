var form = document.getElementById("myForm");

var dropdownA= document.getElementById("dropdownA");
var dropdownB= document.getElementById("dropdownB");
var dropdownC= document.getElementById("dropdownC");
var dropdownD= document.getElementById("dropdownD");
var dropdownE= document.getElementById("dropdownE");
var dropdownF= document.getElementById("dropdownF");
var dropdownG= document.getElementById("dropdownG");
var dropdownH= document.getElementById("dropdownH");

var dropdown2A= document.getElementById("dropdown2A");
var dropdown2B= document.getElementById("dropdown2B");
var dropdown2C= document.getElementById("dropdown2C");
var dropdown2D= document.getElementById("dropdown2D");

var dropdown2A1= document.getElementById("dropdown2A1");
var dropdown2A2= document.getElementById("dropdown2A2");
var dropdown2A3= document.getElementById("dropdown2A3");
var dropdown2A4= document.getElementById("dropdown2A4");
var dropdown2A5= document.getElementById("dropdown2A5");
var dropdown2A6= document.getElementById("dropdown2A6");
var dropdown2A7= document.getElementById("dropdown2A7");
var dropdown2A8= document.getElementById("dropdown2A8");
var dropdown2A9= document.getElementById("dropdown2A9");
var dropdown2A10= document.getElementById("dropdown2A10");
var dropdown2A11= document.getElementById("dropdown2A11");
var dropdown2A12= document.getElementById("dropdown2A12");

var dropdown2B1= document.getElementById("dropdown2B1");
var dropdown2B2= document.getElementById("dropdown2B2");
var dropdown2B3= document.getElementById("dropdown2B3");
var dropdown2B4= document.getElementById("dropdown2B4");

var dropdown3A= document.getElementById("dropdown3A");
var dropdown3B= document.getElementById("dropdown3B");
var dropdown3C= document.getElementById("dropdown3C");
var dropdown3D= document.getElementById("dropdown3D");
var dropdown3E= document.getElementById("dropdown3E");
var dropdown3F= document.getElementById("dropdown3F");
var dropdown3G= document.getElementById("dropdown3G");
var dropdown3H= document.getElementById("dropdown3H");
var dropdown3I= document.getElementById("dropdown3I");
var dropdown3J= document.getElementById("dropdown3J");
var dropdown3K= document.getElementById("dropdown3K");
var dropdown3L= document.getElementById("dropdown3L");
var dropdown3M= document.getElementById("dropdown3M");

if(localStorage.dropcount%2===0){
    dropdownA.classList.toggle("hidden");
    dropdownB.classList.toggle("hidden");
    dropdownC.classList.toggle("hidden");
    dropdownD.classList.toggle("hidden");
    dropdownE.classList.toggle("hidden");
    dropdownF.classList.toggle("hidden");
    dropdownG.classList.toggle("hidden");
    dropdownH.classList.toggle("hidden");
}

if(localStorage.dropcount2%2===0){
    dropdown2A.classList.toggle("hidden");
    dropdown2B.classList.toggle("hidden");
    dropdown2C.classList.toggle("hidden");
    dropdown2D.classList.toggle("hidden");
}

if(localStorage.drop1count2%2===0){
    dropdown2A1.classList.toggle("hidden");
    dropdown2A2.classList.toggle("hidden");
    dropdown2A3.classList.toggle("hidden");
    dropdown2A4.classList.toggle("hidden");
    dropdown2A5.classList.toggle("hidden");
    dropdown2A6.classList.toggle("hidden");
    dropdown2A7.classList.toggle("hidden");
    dropdown2A8.classList.toggle("hidden");
    dropdown2A9.classList.toggle("hidden");
    dropdown2A10.classList.toggle("hidden");
    dropdown2A11.classList.toggle("hidden");
    dropdown2A12.classList.toggle("hidden");
}

if(localStorage.drop2count2%2===0){
    dropdown2B1.classList.toggle("hidden");
    dropdown2B2.classList.toggle("hidden");
    dropdown2B3.classList.toggle("hidden");
    dropdown2B4.classList.toggle("hidden");
}

if(localStorage.dropcount3%2===0){
    dropdown3A.classList.toggle("hidden");
    dropdown3B.classList.toggle("hidden");
    dropdown3C.classList.toggle("hidden");
    dropdown3D.classList.toggle("hidden");
    dropdown3E.classList.toggle("hidden");
    dropdown3F.classList.toggle("hidden");
  /*dropdown3G.classList.toggle("hidden");
    dropdown3H.classList.toggle("hidden");
    dropdown3I.classList.toggle("hidden");
    dropdown3J.classList.toggle("hidden");
    dropdown3K.classList.toggle("hidden");
    dropdown3L.classList.toggle("hidden");
    dropdown3M.classList.toggle("hidden");*/
}

function openForm() {
    form.classList.toggle("on");
}

function closeForm() {
    form.classList.toggle("on");

}
function dropdowns() {
    dropCounter();
    setTimeout(()=>{
        dropdownA.classList.toggle("hidden")
        setTimeout(()=>{
            dropdownB.classList.toggle("hidden");
            setTimeout(()=>{
                dropdownC.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdownD.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdownE.classList.toggle("hidden");
                        setTimeout(()=>{
                            dropdownF.classList.toggle("hidden");
                            setTimeout(()=>{
                                dropdownG.classList.toggle("hidden");
                                setTimeout(()=>{
                                    dropdownH.classList.toggle("hidden");
                                },20)
                            },20)
                        },20)
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function dropdowns2() {
    if(localStorage.drop1count2%2===0) drop1downs2()
    if(localStorage.drop2count2%2===0) drop2downs2()
    drop2Counter();
    setTimeout(()=>{
        dropdown2A.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown2B.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown2C.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown2D.classList.toggle("hidden");
                },20)
            },20)
        },20)
    },20)
}

function drop1downs2() {
    drop2Counter1();
    setTimeout(()=>{
        dropdown2A1.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown2A2.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown2A3.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown2A4.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdown2A5.classList.toggle("hidden");
                        setTimeout(()=>{
                            dropdown2A6.classList.toggle("hidden");
                            setTimeout(()=>{
                                dropdown2A7.classList.toggle("hidden");
                                setTimeout(()=>{
                                    dropdown2A8.classList.toggle("hidden");
                                    setTimeout(()=>{
                                        dropdown2A9.classList.toggle("hidden");
                                        setTimeout(()=>{
                                            dropdown2A10.classList.toggle("hidden");
                                            setTimeout(()=>{
                                                dropdown2A11.classList.toggle("hidden");
                                                setTimeout(()=>{
                                                    dropdown2A12.classList.toggle("hidden");
                                                },20)
                                            },20)
                                        },20)
                                    },20)
                                },20)
                            },20)
                        },20)
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function drop2downs2() {
    drop2Counter2();
    setTimeout(()=>{
        dropdown2B1.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown2B2.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown2B3.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown2B4.classList.toggle("hidden");
                },20)
            },20)
        },20)
    },20)
}

function dropdowns3() {
    drop3Counter();
    setTimeout(()=>{
        dropdown3A.classList.toggle("hidden")
        setTimeout(()=>{
            dropdown3B.classList.toggle("hidden");
            setTimeout(()=>{
                dropdown3C.classList.toggle("hidden");
                setTimeout(()=>{
                    dropdown3D.classList.toggle("hidden");
                    setTimeout(()=>{
                        dropdown3E.classList.toggle("hidden");
                        setTimeout(()=>{
                            dropdown3F.classList.toggle("hidden");
                            /*setTimeout(()=>{
                                dropdown3G.classList.toggle("hidden");
                                setTimeout(()=>{
                                    dropdown3H.classList.toggle("hidden");
                                    setTimeout(()=>{
                                        dropdown3I.classList.toggle("hidden");
                                        setTimeout(()=>{
                                            dropdown3J.classList.toggle("hidden");
                                            setTimeout(()=>{
                                                dropdown3K.classList.toggle("hidden");
                                                setTimeout(()=>{
                                                    dropdown3L.classList.toggle("hidden");
                                                    setTimeout(()=>{
                                                        dropdown3M.classList.toggle("hidden");
                                                    },20)
                                                },20)
                                            },20)
                                        },20)
                                    },20)
                                },20)
                            },20)*/
                        },20)
                    },20)
                },20)
            },20)
        },20)
    },20)
}

function dropCounter() {
    if(Number(localStorage.dropcount)>9)
        localStorage.dropcount = 0;
    if (localStorage.dropcount) {
        localStorage.dropcount = Number(localStorage.dropcount)+1;
    }else{
        localStorage.dropcount = 1;
    }
}

function drop2Counter() {
    if(Number(localStorage.dropcount2)>9)
        localStorage.dropcount2 = 0;
    if (localStorage.dropcount2) {
        localStorage.dropcount2 = Number(localStorage.dropcount2)+1;
    }else{
        localStorage.dropcount2 = 1;
    }
}

function drop2Counter1() {
    if(Number(localStorage.drop1count2)>9)
        localStorage.drop1count2 = 0;
    if (localStorage.drop1count2) {
        localStorage.drop1count2 = Number(localStorage.drop1count2)+1;
    }else{
        localStorage.drop1count2 = 1;
    }
}

function drop2Counter2() {
    if(Number(localStorage.drop2count2)>9)
        localStorage.drop2count2 = 0;
    if (localStorage.drop2count2) {
        localStorage.drop2count2 = Number(localStorage.drop2count2)+1;
    }else{
        localStorage.drop2count2 = 1;
    }
}

function drop3Counter() {
    if(Number(localStorage.dropcount3)>9)
        localStorage.dropcount3 = 0;
    if (localStorage.dropcount3) {
        localStorage.dropcount3 = Number(localStorage.dropcount3)+1;
    }else{
        localStorage.dropcount3 = 1;
    }
}