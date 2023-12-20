
        function sum() {
            let a = Number(document.getElementById('A').value)
            let b = Number(document.getElementById('B').value)

            document.getElementById('res').value = `${a}+${b}=${a+b}`;
        }
        function minus() {
            let a = Number(document.getElementById('A').value)
            let b = Number(document.getElementById('B').value)

            document.getElementById('res').value =`${a}-${b}=${a-b}`;
        }
        function multi() {
            let a = Number(document.getElementById('A').value)
            let b = Number(document.getElementById('B').value)

            document.getElementById('res').value = `${a}*${b}=${a*b}`;
        }
        function divide() {
            let a = Number(document.getElementById('A').value)
            let b = Number(document.getElementById('B').value)

            document.getElementById('res').value = `${a}/${b}=${a/b}`;
        }
        function percent() {
            let a = Number(document.getElementById('A').value)
            let b = Number(document.getElementById('B').value)

            document.getElementById('res').value = `${a}%${b}=${a%b}`;
        }