window.addEventListener('load', function () {
    // menu navegador movil
    var poner1;
    poner1 = false;
    document.getElementById('menu1').addEventListener('click', function () {

        if (poner1 == false) {
            document.getElementById('menu2').style.left = "-400%";
            poner1 = true;
        } else {
            document.getElementById('menu2').style.left ="155%";
            poner1 = false;
        }    
    })
    document.getElementById('bot5').addEventListener('click', function () {
        if (poner1 == false) {
            document.getElementById('menu2').style.left = "-400%";
            poner1 = true;
        } else {
            document.getElementById('menu2').style.left ="155%";
            poner1 = false;
        }
    })

    // menu webs amigas

    var mostrar1;
    mostrar1 = false;
    document.getElementById('volver').addEventListener('click', function () {

        if (mostrar1 == false) {
            document.getElementById('web1').style.left = "20%";
            document.getElementById('web2').style.left = "20%";
            document.getElementById('web3').style.left = "20%";
            // document.getElementById('web4').style.left = "20%";
            mostrar1 = true;
        } else {
            document.getElementById('web1').style.left = "120%";
            document.getElementById('web2').style.left = "120%";
            document.getElementById('web3').style.left = "120%";
            // document.getElementById('web4').style.left = "120%";
            mostrar1 = false;
        }    
    })

    // document.getElementById('enviarf').addEventListener('click', function () {
    //     alert('Lo siento el formulario está en obras, mejor enviame un correo a luisjuradoquesada@gmail.com');
    // })
    document.getElementById('web1').addEventListener('mouseover', function () {
        document.getElementById('anadeImagen').style.backgroundImage = "url('./images/grel1.png')";
       
    })
    document.getElementById('web2').addEventListener('mouseover', function () {
        document.getElementById('anadeImagen').style.backgroundImage = "url('./images/horizontesinfinitos.png')";

    })
    document.getElementById('web3').addEventListener('mouseover', function () {
        document.getElementById('anadeImagen').style.backgroundImage = "url('./images/titiritubers1.png')";

    })

    document.getElementById('subeya').addEventListener('click', function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })

    document.getElementById('iruno').addEventListener('click', function () {
        window.scroll({
            top: 4700,
            left: 0,
            behavior: "smooth"
        });
    })

    document.getElementById('irdos').addEventListener('click', function () {
        window.scroll({
            top: 1730,
            left: 0,
            behavior: "smooth"
        });
    })


    document.getElementById('irtres').addEventListener('click', function () {
        window.scroll({
            top: 3000,
            left: 0,
            behavior: "smooth"
        });
    })

    
    document.getElementById('ir1uno').addEventListener('click', function () {
        window.scroll({
            top: 5900,
            left: 0,
            behavior: "smooth"
        });
    })

    document.getElementById('ir2dos').addEventListener('click', function () {
        window.scroll({
            top: 1390,
            left: 0,
            behavior: "smooth"
        });
    })


    document.getElementById('ir3tres').addEventListener('click', function () {
        window.scroll({
            top: 2900,
            left: 0,
            behavior: "smooth"
        });
    })

     window.addEventListener('scroll', function () {
         if (scrollY >= 400 && scrollY <= 1100) {
            document.getElementById('tit2').style.left = "10%";
        } else {
            document.getElementById('tit2').style.left = "-100%";
        }
        if (scrollY >= 1370 && scrollY <= 1900) {
            document.getElementById('trab2').style.opacity = "1";
        } else {
            document.getElementById('trab2').style.opacity = "0";
        }
/*         if (scrollY >= 3000 && scrollY <= 4150) {
            document.getElementById('cont1').style.left = "2%";
            document.getElementById('cont2').style.left = "40%";
            document.getElementById('cont3').style.left = "40%";
            document.getElementById('cont4').style.left = "0%";
            document.getElementById('cont2').style.top = "20%";
            document.getElementById('cont3').style.top = "50%";
            document.getElementById('cont4').style.top = "51%";
        } else {
            document.getElementById('cont1').style.left = "120%";
            document.getElementById('cont2').style.left = "120%";
            document.getElementById('cont3').style.left = "120%";
            document.getElementById('cont4').style.left = "0";
            document.getElementById('cont2').style.top = "20%";
            document.getElementById('cont3').style.top = "50%";
            document.getElementById('cont4').style.top = "51%";
        } */

        if (scrollY >= 4300 && scrollY <= 4900) {
            document.getElementById('ima1').style.left = "1%";
            document.getElementById('ima2').style.left = "26%";
            document.getElementById('ima3').style.left = "51%";
            document.getElementById('ima4').style.left = "76%";

        } else {
            document.getElementById('ima1').style.left = "-100%";
            document.getElementById('ima2').style.left = "-100%";
            document.getElementById('ima3').style.left = "-100%";
            document.getElementById('ima4').style.left = "-100%";
        }

        if (scrollY >= 2900 && scrollY <= 3333) {
            document.getElementById('nuevo2').style.left = "25%";
        } else {
            document.getElementById('nuevo2').style.left = "-100%";
        }

        // if (screenY >= 935) {
        //     if (scrollY >= 1800 && scrollY <= 3150) {
        //         document.getElementById('op1').style.left = "40%";
        //         document.getElementById('op2').style.top = "5%";
        //         document.getElementById('opt1').style.left = "10%";
        //         document.getElementById('opt2').style.left = "10%";
        //         document.getElementById('opt3').style.left = "10%";
    
        //     } else {
        //         document.getElementById('op1').style.left = "-100%";
        //         document.getElementById('op2').style.top = "-100%";
        //         document.getElementById('opt1').style.left = "120%";
        //         document.getElementById('opt2').style.left = "120%";
        //         document.getElementById('opt3').style.left = "120%";
    
        //     }
        // } else {
        //     document.getElementById('op1').style.position = "static";
        //     document.getElementById('op2').style.position = "static";
        //     document.getElementById('opt1').style.position = "static";
        //     document.getElementById('opt2').style.position = "static";
        //     document.getElementById('opt3').style.position = "static";
        // }

        // if (scrollY >= 1800 && scrollY <= 3150) {
        //     document.getElementById('op1').style.left = "40%";
        //     document.getElementById('op2').style.top = "5%";
        //     document.getElementById('opt1').style.left = "10%";
        //     document.getElementById('opt2').style.left = "10%";
        //     document.getElementById('opt3').style.left = "10%";

        // } else {
        //     document.getElementById('op1').style.left = "-100%";
        //     document.getElementById('op2').style.top = "-100%";
        //     document.getElementById('opt1').style.left = "120%";
        //     document.getElementById('opt2').style.left = "120%";
        //     document.getElementById('opt3').style.left = "120%";

        // }


        // window.addEventListener('screen', function () {
           
            // if (screenX >= 535) {
            //     if (scrollY >= 4300 && scrollY <= 5600) {
            //         document.getElementById('ima1').style.left = "5%";
            //         document.getElementById('ima2').style.left = "5%";
            //         document.getElementById('ima3').style.left = "5%";
            //         document.getElementById('ima4').style.left = "5%";
            //         document.getElementById('ima1').style.top = "1%";
            //         document.getElementById('ima2').style.top = "25%";
            //         document.getElementById('ima3').style.top = "50%";
            //         document.getElementById('ima4').style.top = "75%";
        
            //     } else {
            //         document.getElementById('ima1').style.left = "-100%";
            //         document.getElementById('ima2').style.left = "-100%";
            //         document.getElementById('ima3').style.left = "-100%";
            //         document.getElementById('ima4').style.left = "-100%";
            //     }
            // } else if (screenX >= 934 && screenX <= 536) {
            //     if (scrollY >= 4700 && scrollY <= 5300) {
            //         document.getElementById('ima1').style.left = "1%";
            //         document.getElementById('ima2').style.left = "51%";
            //         document.getElementById('ima3').style.left = "1%";
            //         document.getElementById('ima4').style.left = "51%";
            //         document.getElementById('ima1').style.top = "1%";
            //         document.getElementById('ima2').style.top = "1%";
            //         document.getElementById('ima3').style.top = "50%";
            //         document.getElementById('ima4').style.top = "50%";
        
            //     } else {
            //         document.getElementById('ima1').style.left = "-100%";
            //         document.getElementById('ima2').style.left = "-100%";
            //         document.getElementById('ima3').style.left = "-100%";
            //         document.getElementById('ima4').style.left = "-100%";
            //     }
            // } else {
            //     if (scrollY >= 4100 && scrollY <= 5100) {
            //         document.getElementById('ima1').style.left = "1%";
            //         document.getElementById('ima2').style.left = "26%";
            //         document.getElementById('ima3').style.left = "51%";
            //         document.getElementById('ima4').style.left = "76%";
        
            //     } else {
            //         document.getElementById('ima1').style.left = "-100%";
            //         document.getElementById('ima2').style.left = "-100%";
            //         document.getElementById('ima3').style.left = "-100%";
            //         document.getElementById('ima4').style.left = "-100%";
            //     }
            // }
        // })


        
    })
    

})
