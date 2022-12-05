import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    console.log("I clicked edit btn");
    event.preventDefault();
    event.stopPropagation();
    const formID = event.params["form"];
    const commentBodyID = event.params["body"];
    const form = document.getElementById(formID);
    form.classList.toggle("d-none")
    const commentBody = document.getElementById(commentBodyID)
    commentBody.classList.toggle("d-none")
  }
}
