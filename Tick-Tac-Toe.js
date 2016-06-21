var TTTbox = [0];
var HighLight = [];
var highlight_1;
var highlight_2;
var highlight_3;
var count = 1;
var draw;

$(document).ready(function(){
	$(".screen").html("Player X's turn")
	$(".checkbox").one("click",(function(){
		{
			if(count%2 == 0)
    			{ 
    				$(this).css("background-color", "#5d4c46");
    				$(this).html("O");
    				$(".screen").html("Player X's turn")


    			}
    		else
    			{
    				$(this).css("background-color", "#5d4c46");
    				$(this).html("X");
    				$(".screen").html("Player O's turn")
    			}

    		var Current = Number($(this).attr('id'));
			TTTbox[Current] = $(this).html();
			HighLight[Current] = $(this);
    		count = count + 1;
    		if(count >=6)
    		{	
    			if(CheckRow(Current) || CheckColumn(Current) || CheckDiagonal1() || CheckDiagonal2())
    			{
    				HighLight[highlight_1].css("border-style", "solid");
    				HighLight[highlight_2].css("border-style", "solid");
    				HighLight[highlight_3].css("border-style", "solid");
    				$(".screen").html("Player " + HighLight[Current].html() + " Wins")
    				$(".checkbox").off("click");
    				draw = false;

    			}
    		};

    		if(count == 10 && draw!=false)
    			{
    				$(".screen").html("Draw");
    			}

    	};
	}));
});

var Compare = function(elem1,elem2,elem3)
{
	if(elem1 === elem2 && elem2 === elem3)
	{
		return true;
	}
	else
	{
		return false;
	}
}



var CheckRow = function(num) {

	if(num == 1 || num == 4 || num == 7)
	{		
			highlight_1 = num;
			highlight_2 = num + 1;
			highlight_3 = num + 2;
			return(Compare(TTTbox[num],TTTbox[num + 1],TTTbox[num + 2]));
	}
	else if(num == 2 || num == 5 || num == 8)
	{
			highlight_1 = num - 1;
			highlight_2 = num;
			highlight_3 = num + 1;
			return(Compare(TTTbox[num - 1],TTTbox[num],TTTbox[num + 1]));
	}
	else
	{		
			highlight_1 = num - 1;
			highlight_2 = num - 2;
			highlight_3 = num;
			return(Compare(TTTbox[num - 1],TTTbox[num - 2],TTTbox[num]));
	}
}

var CheckColumn = function(num) {

	if(num == 1 || num == 2 || num == 3)
	{		
			highlight_1 = num;
			highlight_2 = num + 3;
			highlight_3 = num + 6;
			return(Compare(TTTbox[num],TTTbox[num + 3],TTTbox[num + 6]));
	}
	else if(num == 4 || num == 5 || num == 6)
	{
			highlight_1 = num - 3;
			highlight_2 = num;
			highlight_3 = num + 3;
			return(Compare(TTTbox[num - 3],TTTbox[num],TTTbox[num + 3]));
	}
	else
	{
			highlight_1 = num - 6;
			highlight_2 = num - 3;
			highlight_3 = num;
			return(Compare(TTTbox[num - 6],TTTbox[num - 3],TTTbox[num]));
	}
}


var CheckDiagonal1 = function(num) {
	
	if (Diagonal_Eligible(num) === false)
	{	
			return false
	}
		
	else 
	{
			highlight_1 = 1;
			highlight_2 = 5;
			highlight_3 = 9;
			return(Compare(TTTbox[1],TTTbox[5],TTTbox[9]));
	}
}

var CheckDiagonal2 = function(num) {
	if (Diagonal_Eligible(num) === false)
	{	
			return false
	}

	else 
	{		highlight_1 = 3;
			highlight_2 = 5;
			highlight_3 = 7;
			return(Compare(TTTbox[3],TTTbox[5],TTTbox[7]));
	}
}

var Diagonal_Eligible = function(num) {

	if (num == 2 || num == 4 || num == 8 || num == 6)
	{
		return false;
	}
	else
	{
		return true;
	}
}
