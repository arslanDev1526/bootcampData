const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const id = document.getElementById("id").value;

  // Name validation
  if (/\s/.test(name)) {
    alert("Name should not contain spaces");
    return false;
  }

  // Email validation
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Password validation
  if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    )
  ) {
    alert(
      "Password must contain at least 8 characters, including a number, a letter, and a special character"
    );
    return false;
  }

  // Date of Birth validation
  if (!/^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-[0-9]{4}$/.test(dob)) {
    alert("Invalid date format. Use MM-DD-YYYY");
    return false;
  }

  // ID Card Number validation
  if (!/^\d+$/.test(id)) {
    alert("ID Card Number should only contain numbers");
    return false;
  }

  // Submit the form
  form.submit();
});
