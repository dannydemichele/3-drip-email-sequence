var key = '';
var xhr = new XMLHttpRequest();
xhr.open("GET", "./key.txt", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        key = xhr.responseText;
    }
};
xhr.send();

function validateContactForm() {
    var valid = true;
    $(".info").html("");
    $(".input-field").css('border', '#e0dfdf 1px solid');
    $("#field1").removeClass("error-field");
    $("#field2").removeClass("error-field");
    $("#field3").removeClass("error-field");
    $("#field4").removeClass("error-field");
    $("#field5").removeClass("error-field");
    $("#field6").removeClass("error-field");
    $("#field7").removeClass("error-field");
    $("#field8").removeClass("error-field");
    $("#field9").removeClass("error-field");
    $("#field10").removeClass("error-field");


    var field1 = $("#field1").val();
    var field2 = $("#field2").val();
    var field3 = $("#field3").val();
    var field4 = $("#field4").val();
    var field5 = $("#field5").val();
    var field6 = $("#field6").val();
    var field7 = $("#field7").val();
    var field8 = $("#field8").val();
    var field9 = $("#field9").val();
    var field10 = $("#field10").val();


    if (field1 == "") {
        $("#field1-label").html("Required.");
        $("#field1").css('border', '#e66262 1px solid');
        $("#field1").addClass("error-field");
        valid = false;
    }

    if (field2 == "") {
        $("#field2-label").html("Required.");
        $("#field2").css('border', '#e66262 1px solid');
        $("#field2").addClass("error-field");
        valid = false;
    }

    if (field3 == "") {
        $("#field3-label").html("Required.");
        $("#field3").css('border', '#e66262 1px solid');
        $("#field3").addClass("error-field");
        valid = false;
    }

    if (field4 == "") {
        $("#field4-label").html("Required.");
        $("#field4").css('border', '#e66262 1px solid');
        $("#field4").addClass("error-field");
        valid = false;
    }

    if (field5 == "") {
        $("#field5-label").html("Required.");
        $("#field5").css('border', '#e66262 1px solid');
        $("#field5").addClass("error-field");
        valid = false;
    }

    if (field6 == "") {
        $("#field6-label").html("Required.");
        $("#field6").css('border', '#e66262 1px solid');
        $("#field6").addClass("error-field");
        valid = false;
    }

    if (field7 == "") {
        $("#field7-label").html("Required.");
        $("#field7").css('border', '#e66262 1px solid');
        $("#field7").addClass("error-field");
        valid = false;
    }

    if (field8 == "") {
        $("#field8-label").html("Required.");
        $("#field8").css('border', '#e66262 1px solid');
        $("#field8").addClass("error-field");
        valid = false;
    }

    if (field9 == "") {
        $("#field9-label").html("Required.");
        $("#field9").css('border', '#e66262 1px solid');
        $("#field9").addClass("error-field");
        valid = false;
    }
   

    if(field1 != "" && field2 != "" && field3 != "" && field4 != "" && field5 != "" && field6 != "" && field7 != "" && field8 != "" && field9 != ""){
        valid=true
    }
    
    if(valid){

        var url = "https://api.openai.com/v1/completions";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader(
            "Authorization",
            `Bearer ${key}`
        );
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
                let response = xhr.responseText;
                response = JSON.parse(response);
    
                console.log(response);
    
                document.getElementById("output").innerHTML =
                    response["choices"][0]["text"];
            }
        };
    
        prompt=
            Ignore All Previous instructions before this one. You are one of the top email sales copywriters in the United States in the field of {field2} for over two decades now. You are using your expertise and rewrite a three-part email sequence that I have used successfully in the past, and use it as your base foundation to create a new email by incorporating the new details and instructions I have supplied in [NewContent] section below.  

            Specific Instructions: Please use the structure, format, style, Tone and length of the three emails listed [PreviousContent] below (To be clear, these are labeled [email1], [email2], and [email3] respectively) and rewrite the 3 emails for a new company, including the details that I list in [NewContent] section below. 

            [NewContent]= 
            Information on our audience: ${field3} (Do not mention the audience by name, just know this is it incase it helps your writing)
            I am offering the following promo: Promotion information: ${field4}
            My Main outcome desired is: ${field5}
            The Company name we are rewriting this for is: {field1}
            {field8} - Data Points to include in email (separate by comma)
            Here are some additional important notes to consider when rewriting: {field10}.

            [PreviousContent]
            [email1] = ${field6}
            [email2] = ${field7}
            [email3] = ${field8}
        
        
        prompt = JSON.parse(JSON.stringify(prompt));
    
    
        var data = {
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        };
    
        data = JSON.stringify(data);
    
        xhr.send(data);
    }

    



    return valid;
}




function text() {
    // console.log("hello")


}
