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
        } else {
            cssScore --;
        }

        $(".questionThree").hide();
        $(".questionFour").show();
    });

    $(".questionFour").submit(function(event) {
        event.preventDefault();
        var questionFourAnswer = $("#csharpAnswer").val();
        if (questionFourAnswer === "csharpYes") {
            csharpScore ++;
        } else {
            csharpScore --;
        }

        $(".questionFour").hide();
        $(".questionFive").show();
    });

    $(".questionFive").submit(function(event) {
        event.preventDefault();
        var questionFiveAnswer = $("input:radio[name=five]:checked").val();
        if (questionFiveAnswer === "csharpYes") {
            csharpScore ++;
        } else if (questionFiveAnswer === "rubyYes") {
            rubyScore ++;
        } else {
            cssScore ++;
        }

        $(".questionFive").hide();

        if (rubyScore > cssScore && rubyScore > csharpScore) {
            $(".choseRuby").show();
        } else if (cssScore > rubyScore && cssScore > csharpScore) {
            $(".choseCss").show();
        } else if (csharpScore > rubyScore && csharpScore > cssScore) {
            $(".choseCsharp").show();
        }
        alert("ruby=" + rubyScore + ", css=" + cssScore + ", csharp=" +csharpScore);
    });
});




