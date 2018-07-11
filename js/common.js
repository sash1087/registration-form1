$(document).ready(function() {


            $('#contact-form').bootstrapValidator({
                
                fields: {
                    firstname: {
                        validators: {
                            stringLength: {
                                min: 2,

                            },
                            notEmpty: {
                                message: 'Пожалуйста введите Ваше имя'
                            },
                            regexp: {
                                regexp: /^[а-яА-ЯёЁ]+$/,
                                message: 'Ошибка'
                            },

                        }
                    },
                    lastname: {
                        validators: {
                            stringLength: {
                                min: 2,


                            },
                            notEmpty: {
                                message: 'Пожалуйста введите Вашу фамилию'
                            },
                            regexp: {
                                regexp: /^[а-яА-ЯёЁ]+$/,
                                message: 'Ошибка'
                            },
                        }
                    },
                    email: {
                        validators: {
                            stringLength: {
                                min: 8,
                            },
                            notEmpty: {
                                message: 'Пожалуйста введите Ваш email'
                            },
                            regexp: {
                                regexp: /\S+@[a-z]+.[a-z]+/,
                                message: 'Ошибка'
                            },
                        }
                    },
                    gender: {
                        validators: {
                            notEmpty: {
                                message: 'Пожалуйста введите Ваш пол'
                            }
                        }
                    },
                    city: {
                        validators: {
                            notEmpty: {
                                message: 'Пожалуйста введите Ваш город'
                            }
                        }
                    },
                    district: {
                        validators: {
                            notEmpty: {
                                message: 'Пожалуйста введите Ваш район'
                            }
                        }
                    },
                }
            })


            .on('success.form.bv', function(e) {
                $('#success_message').slideDown({
                        opacity: "show"
                    }, "slow") 
                $('#contact-form').data('bootstrapValidator').resetForm();
                
                e.preventDefault();
              
                var $form = $(e.target);
 
                var bv = $form.data('bootstrapValidator');

                $.post($form.attr('action'), $form.serialize(), function(result) {
                    console.log(result);
                }, 'json');
            });
            $('#rus-district-nizhny').hide();
            $('#city').on('change', function() {
                if (this.value == 'Нижний Новгород') {
                    $("#rus-district-nizhny").show();
                    
                } else {
                    $('#rus-district-nizhny').hide();
                    
                }
            });
        });

        function clickAlert() {
            if (document.getElementById('gender1').checked) {
                gen = document.getElementById('gender1').value;
            } else if (document.getElementById('gender2').checked) {
                gen = document.getElementById('gender2').value;
            } else {
                gen = "";
            }

            
            if (document.getElementById('city').value == 'Нижний Новгород') {
                c = document.getElementById('district1').value;
            }
            
            if (document.getElementById('firstname').value !== "" && c !== "" && document.getElementById('lastname').value !== "" && document.getElementById('email').value !== "" && document.getElementById('city').value !== "" && gen !== "" ) {

                alert("Имя:" + document.getElementById("firstname").value + "\nФамилия:" + document.getElementById("lastname").value +
                    "\nEmail:" + document.getElementById("email").value + "\nПол:" + gen + "\nГород:" + document.getElementById("city").value + "\nРайон:"+ c);
            }
        }
