# Calculator
Simple calculator performs arthimatic calculations.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="./Calculator.css">
</head>
<body>
    <center>
    <table border="2">
        <tr>
            
            <td colspan="4"><input type="text" id="content"></td>
        </tr>
        <tr>
            <td><button value="7" onclick="display('7')">7</button></td>  
            <td><button value="8" onclick="display('8')">8</button></td>
            <td><button value="9" onclick="display('9')">9</button></td>
            <td><button value="+" onclick="display('+')">+</button></td>
        </tr>
        <tr>
            <td><button value="4" onclick="display('4')">4</button></td>
            <td><button value="5" onclick="display('5')">5</button></td>
            <td><button value="6" onclick="display('6')">6</button></td>
            <td><button value="-" onclick="display('-')">-</button></td>
        </tr>
        <tr>
            <td><button value="1" onclick="display('1')">1</button></td>
            <td><button value="2" onclick="display('2')">2</button></td>
            <td><button value="3" onclick="display('3')">3</button></td>
            <td><button value="" onclick="display('*')">*</button></td>
        </tr>
        <tr>
            
            <td><button value="0" onclick="display('0')">0</button></td>
            <td><button value="." onclick="display('.')">.</button></td>
            <td><button value="=" onclick="solution()">=</button></td>
            <td><button value="/" onclick="display('/')">/</button></td>
           
        </tr>
        <tr>
            <pre>
            <td colspan="4" id="id"><button value="c" onclick="clearAll()">C</button></td>
        </pre>
        </tr>
    </table>
</center>
    <script src="./Calculator.js"></script>
   
</body>
</html>
