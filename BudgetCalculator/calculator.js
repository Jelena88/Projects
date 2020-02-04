const selekt = document.querySelector('#selekt')
    const prihodiLista = document.querySelector('#prihodiLista')
    const rashodiLista = document.querySelector('#rashodiLista')
    const rashodiCont = document.querySelector('rashodiUkupno')
    const div = document.querySelector('div')
    var dugme = document.querySelector('#unosDugme')
    dugme.addEventListener('click', add)
    var opis = document.querySelector('#opis')
    var iznos = document.querySelector('#iznos')

    var items1 = [0];
    var items2 = [0];
    document.addEventListener("keypress", event => {
        if (event.key === "Enter") {
          add();
        }
      });
    function add() {

        var sel = selekt.value
        var opis = document.querySelector('#opis')
        var iznos = document.querySelector('#iznos')

    
        if (opis.value == '' || iznos.value == '') {
            alert("All fields must be completed")
            return
        }
        if (iznos.value <= 0) {
            alert("You didn't put a right value")
            return
        }
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
        function sumArray(total, value) {
            return total + value;
        }
        if (sel == 'Prihodi') {
            var par = document.createElement('div')
            par.className = 'list1cont'
            var par1 = document.createElement('div')
            par1.className = 'div1'
            var par13 = document.createElement('div')
            par13.className = 'div13'
            var par12 = document.createElement('div')
            par12.className = 'div12'
            var obrisi = document.createElement('button')
            obrisi.className = 'obrisi1'
            obrisi.innerHTML = 'x'
            par.appendChild(par1)
            par.appendChild(par13)
            par.appendChild(par12)
            par.appendChild(obrisi)
            prihodiLista.appendChild(par)
            par1.innerHTML = `${opis.value} \xa0\xa0\xa0\xa0`
            par13.innerHTML = `+`
            par12.innerHTML = `${(iznos.value)}`
            items1.push(iznos.value * 1);

            var sum1 = items1.reduce(sumArray);
            var sum2 = items2.reduce(sumArray)

            document.getElementById('prihodiUkupno').innerHTML = `${sum1} `
            var sum3 = sum1 - sum2
            document.getElementById('stanjeUkupno').innerHTML = `${sum3}`
            obrisi.addEventListener('click', removee)
            function removee(e) {

                var obrisi = e.target
                var divtoremove1 = obrisi.parentElement
                divtoremove1.remove();

                var divvalue = parseFloat(obrisi.previousSibling.innerHTML)
                console.log(divvalue)
                var a = items1.indexOf(divvalue)
                console.log(a)
                delete items1[a];
                console.log(items1)
                var sum1 = items1.reduce(sumArray);
                document.getElementById('prihodiUkupno').innerHTML = `${sum1} `

                var sum2 = items2.reduce(sumArray)
                var sum3 = sum1 - sum2
                document.getElementById('stanjeUkupno').innerHTML = `${sum3}`
                if (sum1 == 0) {
                    var procenat2 = "0"
                    document.getElementById('procenat').innerHTML = `${procenat2}% `
                }
                else if (sum1 > 0 || sum1 < 0) {
                    var procenat2 = (sum2 * 100 / sum1).toFixed(0)
                    document.getElementById('procenat').innerHTML = `${procenat2}% `
                }
            }
        }
      
        if (sel == 'Rashodi') {
            var parr = document.createElement('div')
            parr.className = 'list2cont'
            var sum1 = items1.reduce(sumArray);
            if (sum1 == 0) { alert('Select first Income'); return }
            var par2 = document.createElement('div')
            par2.className = 'div2'
            var par23 = document.createElement('div')
            par23.className = 'div23'
            var par22 = document.createElement('div')
            par22.className = 'div22'
            var par222 = document.createElement('div')
            par222.className = 'div222'
            var obrisi1 = document.createElement('button')
            obrisi1.className = 'obrisi2'
            obrisi1.innerHTML = 'x'
            parr.appendChild(par2)
            parr.appendChild(par23)
            parr.appendChild(par22)
            parr.appendChild(par222)
            parr.appendChild(obrisi1)
            rashodiLista.appendChild(parr)
            var procenat = (iznos.value * 100 / sum1).toFixed(0)

            par2.innerHTML = `${opis.value} \xa0\xa0\xa0\xa0`
            par23.innerHTML = `-`
            par22.innerHTML = `${iznos.value} `
            par222.innerHTML = ` ${procenat}%`

            items2.push(iznos.value * 1);

            var sum2 = items2.reduce(sumArray);
            var procenat2 = (sum2 * 100 / sum1).toFixed(0)
            var sum3 = sum1 - sum2
            document.getElementById('stanjeUkupno').innerHTML = `${sum3}`
            document.getElementById('rashodiUkupno').innerHTML = `${-sum2} `
            document.getElementById('procenat').innerHTML = `${procenat2}% `
            obrisi1.addEventListener('click', removeee)
            function removeee(a) {
                var obrisi1 = a.target
                var divtoremove2 = obrisi1.parentElement
                divtoremove2.remove();
                var divvalue1 = parseFloat(obrisi1.previousSibling.previousSibling.innerHTML)
                console.log(divvalue1)
                var b = items2.indexOf(divvalue1)
                console.log(b)
                delete items2[b];
                console.log(items2)
                var sum2 = items2.reduce(sumArray);
                document.getElementById('rashodiUkupno').innerHTML = `${-sum2} `
                //  document.getElementById('rashodiUkupno').innerHTML = `(${procenat2})%`
                var sum1 = items1.reduce(sumArray);
                var sum3 = sum1 - sum2
                document.getElementById('stanjeUkupno').innerHTML = `${sum3}`
                if (sum1 == 0) {
                    var procenat2 = "0"
                    document.getElementById('procenat').innerHTML = `${procenat2}% `
                }
                else if (sum1 > 0 || sum1 < 0) {
                    var procenat2 = (sum2 * 100 / sum1).toFixed(0)
                    document.getElementById('procenat').innerHTML = `${procenat2}% `
                }
            }
        }
        //var sum1 = items1.reduce(sumArray)
        //var sum2 = items2.reduce(sumArray)
        //var sum3 = sum1-sum2
        //var items3 = items1.concat(items2)
        // var sum3 = items3.reduce(sumArray);
        //console.log(sum3)
        // document.getElementById('stanjeUkupno').innerHTML = `${sum3}`
    }