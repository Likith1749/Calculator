function display(val)
{
    document.getElementById("content").value+=val;
}
function solution()
{
    let x = document.getElementById("content").value;

    let res = eval(x);

    document.getElementById("content").value = res; 
}
function clearAll()
{
    document.getElementById("content").value = "";
}

