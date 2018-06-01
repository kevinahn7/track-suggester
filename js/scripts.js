$(document).ready(function() {
    let rubyScore = 0;
    let cssScore = 0;
    let csharpScore = 0;

    $(".questionOne").submit(function(event) {
        event.preventDefault();
        var questionOneAnswer = $("input:radio[name=one]:checked").val();
        if (questionOneAnswer === "csharpYes") {
            csharpScore ++;
        } else if (questionOneAnswer === "rubyYes") {
            rubyScore ++;
        } else {
            cssScore ++;
        }
        
        $(".intro").hide();
        $(".questionOne").hide();
        $(".questionTwo").show();
    });

    $(".questionTwo").submit(function(event) {
        event.preventDefault();
        var questionTwoAnswer = $("#rubyAnswer").val();
        if (questionTwoAnswer === "rubyYes") {
            rubyScore ++;
        }
        else {
            rubyScore --;
        }

        $(".questionTwo").hide();
        $(".questionThree").show();
    });

    $(".questionThree").submit(function(event) {
        event.preventDefault();
        var questionThreeAnswer = $("#cssAnswer").val();
        if (questionThreeAnswer === "cssYes") {
            cssScore ++;
        }
        else {
            cssScore --;
        }

        $(".questionThree").hide();
        $(".questionFour").show();
    });



});




