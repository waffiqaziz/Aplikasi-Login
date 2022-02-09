/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/** 
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/** 
 * Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
 * @constant {string}
 */
const expectedPassword = 'superpassword';

//Menambahkan aksi klik pada button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  //Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  
  //Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan
  if (email == expectedEmail && password == expectedPassword) {
    
    //Jika sesuai maka program akan berpindah ke halaman home
    goToHome();
  } else {
    
    //Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah
    showPopUp();
  }
});
