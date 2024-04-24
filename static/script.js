function validateForm() {
    const nameInput = document.querySelector('input[name="Name"]');
    const schoolInput = document.querySelector('input[name="School"]');
    const categorySelect = document.querySelector('select[name="Category"]');
    const quotaSelect = document.querySelector('select[name="Quota"]');
    const poolSelect = document.querySelector('select[name="Pool"]');
    const instituteSelect = document.querySelector('select[name="Institute"]');
    const roundSelect = document.querySelector('select[name="Round"]');
    const openingInput = document.querySelector('input[name="Opening"]');
    const closingInput = document.querySelector('input[name="Closing"]');

    // Validate Name (non-empty)
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate School (non-empty)
    if (schoolInput.value.trim() === "") {
        alert("Please enter your school name.");
        return false;
    }

    // Validate Category (not the default value)
    if (categorySelect.value === "Select your Category") {
        alert("Please select your category.");
        return false;
    }

    // Validate Quota (not the default value)
    if (quotaSelect.value === "Select your Quota") {
        alert("Please select your quota.");
        return false;
    }

    // Validate Gender (not the default value)
    if (poolSelect.value === "Choose Your Gender") {
        alert("Please select your gender.");
        return false;
    }

    // Validate Institute (not the default value)
    if (instituteSelect.value === "Choose your Institute") {
        alert("Please select your institute.");
        return false;
    }

    // Validate Round (not the default value)
    if (roundSelect.value === "Preferred Round Number") {
        alert("Please select your preferred round number.");
        return false;
    }

    // Validate Opening JEE Rank (non-empty)
    if (openingInput.value.trim() === "") {
        alert("Please enter your opening JEE rank.");
        return false;
    }

    // Validate Closing JEE Rank (non-empty)
    if (closingInput.value.trim() === "") {
        alert("Please enter your closing JEE rank.");
        return false;
    }

    // All validations passed
    return true;
}
