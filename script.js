
//1. Sleep_in
function sleep_in(weekday, vacation){
    if(weekday == true && vacation == false){
        return false;

    }else{
        return true;

    }
}

//2. monkey_trouble
function monkey_trouble(a_smile, b_smile){
    if(a_smile==true && b_smile==true){
        return true;
    }else if(a_smile==false && b_smile ==false){
        return true;
    }else{
        return false;
    }
}

//3. String_times
function string_times(string, num){

    var answer = "";

    //loop num times and add str to answer every time
for(i=0; i<num; i++){
    var  answer = answer + string;
}
return answer;

}

//4. front_times
function front_times(string, x){
    var answer = "";
    var firstThreeLetters = string.substring(0,3);
    if(firstThreeLetters == -1){
        for(i=0; i<x; i++){
            var answer = answer + string;
        }
    }else{
        for(i=0; i<x; i++){
            answer = answer + firstThreeLetters;
        }
    }
    return answer;

}

//5. String_bits
function string_bits(string) {
    var answer = "";

    for (i=0; i<string.length; i+=2) {
        answer = answer + string[i];

    }
    return answer;
}
//6.caughtspeeding
function caughtSpeeding (speed,birthday){
    if (birthday==false){
        if (speed <= 60){
            return 0
        }
        else if (speed >= 61 && speed <= 80){
            return 1
        }
        else if (speed >= 81){
            return 2
        }
    }
    if (birthday==true){
        if (speed <= 65){
            return 0
        }
        else if (speed >= 66 && speed <= 85){
            return 1
        }
        else if (speed >= 86){
            return 2
        }
    }
}
//7. fizzbuzz
function fizz_buzz (a){
    if (a%3 == 0 && a%5 == 0){
        return "FizzBuzz"
    }
    else if (a%3 == 0){
        return "Fizz"
    }
    else if (a%5 == 0){
        return "Buzz"
    }
    else{
        return a +"!"
    }
}

//8.teaparty
function teaParty(a,b){
    var answer = "";
    if (a < 5 || b < 5){
        answer = 0;
    }
    else if (a>=b*2 || b >= a*2){
        answer = 2;
    }
    else if (a >= 5 && b >= 5){
        answer = 1;
    }
    return answer;
}
//9.blackjack
function blackjack(x,y){
    var answer = "";
    if(x<=21 && y<=21){
        if((21-x)>(21-y)){
            answer = y;
        }
        else if((21-y)>(21-x)){
            answer = x;
        }
    }
    else if( (x<=21) && (y>21)){
        answer = x;
    }
    else if(y<=21 && x>21){
        answer=y;
    }
    return answer;
}

//10.loneSum
function loneSum(a,b,c){
    var answer = "";
    if((a != b) && (a != c) && (b != c)){
        answer = a+b+c;
    }
    else if ((a == c) && (a != b)){
        answer = b;
    }
    else if ((a==b)&&(a != c)){
        answer = c;
    }
    else if((b == c)&& (a!=b)){
        answer = a;
    }
    return answer;
}


//11.
