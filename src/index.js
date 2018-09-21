module.exports = function solveEquation(equation) {

var my_string = equation
var a = Number(my_string.substring(0, my_string.indexOf('x')-3));

my_string = my_string.substring([my_string.indexOf('x')+4,])

if (my_string[0] == '+')
{
my_string = my_string.substring([2,])
var b = Number(my_string.substring(0, my_string.indexOf('x')-3));
}

else
{
	my_string = my_string.substring([2,])
	var b = -1*Number(my_string.substring(0, my_string.indexOf('x')-3));
}

my_string = my_string.substring([my_string.indexOf('x')+2,])

if (my_string[0] == '+')
{
var c = Number(my_string.substring(2, ));
}

else
{
	var c  = -1*Number(my_string.substring(2, ));
}


x1=Math.round((-b-Math.pow(b*b-4*a*c,0.5))/(2*a))
x2=Math.round((-b+Math.pow(b*b-4*a*c,0.5))/(2*a))


return [x1,x2].sort(function(a,b){
        return a-b;
      })
}


    
