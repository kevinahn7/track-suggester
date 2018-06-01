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
        //alert("ruby=" + rubyScore + ", css=" + cssScore + ", csharp=" +csharpScore);
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
        //alert("ruby=" + rubyScore + ", css=" + cssScore + ", csharp=" +csharpScore);
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
        //alert("ruby=" + rubyScore + ", css=" + cssScore + ", csharp=" +csharpScore);
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
        //alert("ruby=" + rubyScore + ", css=" + cssScore + ", csharp=" +csharpScore);
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
        $(".reset").show();

        if (rubyScore > cssScore && rubyScore > csharpScore) {
            $(".choseRuby").show();
        } else if (cssScore > rubyScore && cssScore > csharpScore) {
            $(".choseCss").show();
        } else if (csharpScore > rubyScore && csharpScore > cssScore) {
            $(".choseCsharp").show();
        } else if (cssScore === rubyScore && cssScore === csharpScore) {
            $(".equal").show();
        } else if (rubyScore === csharpScore && rubyScore > cssScore) {
            $(".choseRuby").show();
            $(".or1").show();
            $(".choseCsharp").show();
        } else if (rubyScore === cssScore && rubyScore > csharpScore) {
            $(".choseRuby").show();
            $(".or1").show();
            $(".choseCss").show();
        } else if (csharpScore === cssScore && csharpScore > rubyScore) {
            $(".choseCsharp").show();
            $(".or2").show();
            $(".choseCss").show();
        }

        //alert("ruby=" + rubyScore + ", css=" + cssScore + ", csharp=" +csharpScore);
    
    });
});




