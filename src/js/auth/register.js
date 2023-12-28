import { supabase, successNotification, errorNotification } from "../main";


const form_register = document.getElementById("form_register");

form_register.onsubmit = async (e) => {
    e.preventDefault();

    // Disable  the submit button
    document.querySelector("#form_register button").disabled = true;
    document.querySelector
        ("#form_register button")
        .innerHTML = `<div class="spinner-border me-2" role="status" >
    </div>
    <span>Loading...</span>`;


    //get all values from input, select, text area under form tag
    const formData = new FormData(form_register);

    if (formData.get("password") == formData.get("password_confirmation")) {
        //do action if the condition is correct
        alert("Passwords does match");

        // Supabase SignUp
        const { data, error } = await supabase.auth.signUp({
            email: formData.get("email"),
            password: formData.get("password"),
        })


        // Show notification
        if (error == null)
            successNotification("Registered Successfully! <a href='./login.html'>Click here to Login!</a>", 20);
        else {
            errorNotification(
                "Something wrong happened. Cannot register account.", 10
            );
            console.log(error);
        }

        // Reset form data
        form_register.reset();

        //Enable submit button
        document.querySelector("#form_register button").disabled = false;
        document.querySelector("#form_register button").innerHTML = `Register`;
    }
};