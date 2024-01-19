document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
    })
    handle = function(){
        input1 = document.querySelector('#first_name').value;
        input2 = document.querySelector('#last_name').value;
        input3 = document.querySelector('#emailaddress').value;
        input4 = document.querySelector('#password').value;
        if(input1 == ''||input2 == ''||input3 == ''||input4 == ''){
            if(input1 == ''){
                document.querySelector('#first_name').classList.add('invalid')
                document.querySelector('#Lfirst_name').innerHTML = 'first name can not be empty';
                document.querySelector('#first_name').setAttribute('placeholder','')
            }
            if(input2 == ''){
                document.querySelector('#last_name').classList.add('invalid')
                document.querySelector('#Llast_name').innerHTML = 'last name can not be empty';
                document.querySelector('#last_name').setAttribute('placeholder','')
            }
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input3)) {
                document.querySelector('#emailaddress').classList.add('invalid')
                document.querySelector('#emailaddress').value = '';
                document.querySelector('#Lemailaddress').innerHTML = 'the format is incorrect';
                document.querySelector('#emailaddress').setAttribute('placeholder','email@example.com') ;
            }
            if(input3 == ''){
                document.querySelector('#emailaddress').classList.add('invalid')
                document.querySelector('#Lemailaddress').innerHTML = 'email can not be empty';
            }
            if(input4 == ''){
                document.querySelector('#password').classList.add('invalid')
                document.querySelector('#Lpassword').innerHTML = 'password can not be empty';
                document.querySelector('#password').setAttribute('placeholder','')
            }
            document.querySelector('#submitted').classList.remove('alert', 'bg-primary', 'mt-4', 'mb-0')
            document.querySelector('#submitted').innerHTML = ''
        }
        else{
            document.querySelector('#submitted').classList.add('alert', 'bg-primary', 'mt-4', 'mb-0','text-center')
            document.querySelector('#submitted').innerHTML = '<strong>Success!</strong> Your can access to the free trial.'
        }
    }
    function test() {
        document.querySelector('#first_name').addEventListener('input',function(){
            document.querySelector('#Lfirst_name').innerHTML = '';
            document.querySelector('#first_name').classList.remove('invalid');
        });
        document.querySelector('#last_name').addEventListener('input',function(){
            document.querySelector('#Llast_name').innerHTML = '';
            document.querySelector('#last_name').classList.remove('invalid');
        });
        document.querySelector('#emailaddress').addEventListener('input',function(){
            document.querySelector('#Lemailaddress').innerHTML = '';
            document.querySelector('#emailaddress').classList.remove('invalid');
        });
        document.querySelector('#password').addEventListener('input',function(){
            document.querySelector('#Lpassword').innerHTML = '';
            document.querySelector('#password').classList.remove('invalid');
        });
        input2 = document.querySelector('#last_name').value;
        input3 = document.querySelector('#emailaddress').value;
        input4 = document.querySelector('#password').value;
        document.querySelector('#submit').addEventListener('click',handle);
    }
    test();
    
})
